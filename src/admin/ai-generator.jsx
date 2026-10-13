/**
 * BlockWriter AI generator.
 *
 * Registers an editor sidebar that turns a prompt into Gutenberg blocks. The
 * generated HTML is converted with the WordPress raw handler, so the result
 * uses native blocks the author can edit. The "Section" mode produces a full
 * layout and the "Blocks" mode a smaller fragment.
 */
import {
	Button,
	Notice,
	SelectControl,
	Spinner,
	TextareaControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { rawHandler } from '@wordpress/blocks';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { brush } from '@wordpress/icons';

import { generateAiContent, getAiStatus } from './ai-client';

import './ai-generator.scss';

const SIDEBAR_NAME = 'blockwriter-ai-generator';

const MODE_OPTIONS = [
	{
		label: __( 'Section', 'blockwriter' ),
		value: 'section',
	},
	{
		label: __( 'Blocks', 'blockwriter' ),
		value: 'blocks',
	},
];

/**
 * The AI generator sidebar content.
 *
 * @return {Element} The generator UI.
 */
function AiGeneratorPanel() {
	const [ mode, setMode ] = useState( 'section' );
	const [ prompt, setPrompt ] = useState( '' );
	const [ status, setStatus ] = useState( null );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ notice, setNotice ] = useState( '' );

	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const insertionPoint = useSelect(
		( select ) => select( 'core/block-editor' ).getBlockInsertionPoint(),
		[],
	);

	useEffect( () => {
		let active = true;

		getAiStatus()
			.then( ( result ) => {
				if ( active ) {
					setStatus( result );
				}
			} )
			.catch( () => {
				if ( active ) {
					setStatus( { configured: true } );
				}
			} );

		return () => {
			active = false;
		};
	}, [] );

	const canGenerate =
		'' !== prompt.trim() && ! isLoading && status?.configured !== false;

	const handleGenerate = async () => {
		setIsLoading( true );
		setError( '' );
		setNotice( '' );

		try {
			const result = await generateAiContent( {
				mode,
				prompt,
			} );

			const blocks = rawHandler( { HTML: result.content } ).filter( Boolean );

			if ( ! blocks.length ) {
				setError(
					__(
						'The AI did not return any usable blocks. Try rephrasing the prompt.',
						'blockwriter',
					),
				);

				return;
			}

			insertBlocks( blocks, insertionPoint.index, insertionPoint.rootClientId );

			setNotice( __( 'Generated content inserted.', 'blockwriter' ) );
			setPrompt( '' );
		} catch ( requestError ) {
			setError(
				requestError?.message ||
					__( 'Generation failed. Please try again.', 'blockwriter' ),
			);
		} finally {
			setIsLoading( false );
		}
	};

	if ( status && status.configured === false ) {
		return (
			<div className="bw-ai-generator">
				<Notice status="warning" isDismissible={ false }>
					{ __(
						'BlockWriter AI is not configured yet. Add an OpenAI-compatible API key to use the generators.',
						'blockwriter',
					) }{ ' ' }
					<a href={ status.settingsUrl }>
						{ __( 'Open AI settings', 'blockwriter' ) }
					</a>
				</Notice>
			</div>
		);
	}

	return (
		<div className="bw-ai-generator">
			<p className="bw-ai-generator__intro">
				{ __(
					'Describe what you want and BlockWriter will generate editable blocks.',
					'blockwriter',
				) }
			</p>

			<SelectControl
				label={ __( 'Generate', 'blockwriter' ) }
				value={ mode }
				options={ MODE_OPTIONS }
				onChange={ setMode }
			/>

			<TextareaControl
				label={ __( 'Prompt', 'blockwriter' ) }
				value={ prompt }
				onChange={ setPrompt }
				placeholder={ __(
					'A call to action section for a bakery, warm and inviting.',
					'blockwriter',
				) }
				rows={ 5 }
			/>

			<Button
				variant="primary"
				onClick={ handleGenerate }
				disabled={ ! canGenerate }
				className="bw-ai-generator__button"
			>
				{ isLoading
					? __( 'Generating…', 'blockwriter' )
					: __( 'Generate', 'blockwriter' ) }
			</Button>

			{ isLoading && (
				<div className="bw-ai-generator__loading">
					<Spinner />
				</div>
			) }

			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }

			{ notice && (
				<Notice status="success" isDismissible={ false }>
					{ notice }
				</Notice>
			) }

			<p className="bw-ai-generator__disclaimer">
				{ __(
					'AI-generated content can be inaccurate. Review and edit it before publishing.',
					'blockwriter',
				) }
			</p>
		</div>
	);
}

/**
 * Editor plugin entry point. Registers the AI generator sidebar.
 *
 * @return {Element|null} The editor plugin UI.
 */
function AiGenerator() {
	if ( ! PluginSidebar ) {
		return null;
	}

	return (
		<>
			{ PluginSidebarMoreMenuItem && (
				<PluginSidebarMoreMenuItem target={ SIDEBAR_NAME } icon={ brush }>
					{ __( 'BlockWriter AI', 'blockwriter' ) }
				</PluginSidebarMoreMenuItem>
			) }

			<PluginSidebar
				name={ SIDEBAR_NAME }
				icon={ brush }
				title={ __( 'BlockWriter AI', 'blockwriter' ) }
			>
				<AiGeneratorPanel />
			</PluginSidebar>
		</>
	);
}

registerPlugin( SIDEBAR_NAME, {
	render: AiGenerator,
} );
