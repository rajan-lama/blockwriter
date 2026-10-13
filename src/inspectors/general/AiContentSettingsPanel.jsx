import {
	Button,
	Notice,
	PanelBody,
	SelectControl,
	Spinner,
	TextareaControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { generateAiContent, getAiStatus } from '../../admin/ai-client';

const TONE_OPTIONS = [
	{ label: __( 'Neutral', 'blockwriter' ), value: 'neutral' },
	{ label: __( 'Professional', 'blockwriter' ), value: 'professional' },
	{ label: __( 'Friendly', 'blockwriter' ), value: 'friendly' },
	{ label: __( 'Persuasive', 'blockwriter' ), value: 'persuasive' },
	{ label: __( 'Casual', 'blockwriter' ), value: 'casual' },
];

const LENGTH_OPTIONS = [
	{ label: __( 'Short', 'blockwriter' ), value: 'short' },
	{ label: __( 'Medium', 'blockwriter' ), value: 'medium' },
	{ label: __( 'Long', 'blockwriter' ), value: 'long' },
];

const AiContentSettingsPanel = ( { attributes, setAttributes } ) => {
	const { prompt, content, tone, length } = attributes;
	const [ isLoading, setIsLoading ] = useState( false );
	const [ error, setError ] = useState( '' );
	const [ status, setStatus ] = useState( null );

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
		prompt.trim() !== '' && ! isLoading && status?.configured !== false;

	const handleGenerate = async () => {
		setIsLoading( true );
		setError( '' );

		try {
			const userPrompt = [
				`Tone: ${ tone }.`,
				`Length: ${ length }.`,
				prompt,
			].join( ' ' );

			const result = await generateAiContent( {
				mode: 'content',
				prompt: userPrompt,
			} );

			setAttributes( { content: result.content } );
		} catch ( requestError ) {
			setError(
				requestError?.message ||
					__( 'Generation failed. Please try again.', 'blockwriter' ),
			);
		} finally {
			setIsLoading( false );
		}
	};

	let buttonLabel = __( 'Generate', 'blockwriter' );

	if ( isLoading ) {
		buttonLabel = __( 'Generating…', 'blockwriter' );
	} else if ( content ) {
		buttonLabel = __( 'Regenerate', 'blockwriter' );
	}

	return (
		<PanelBody title={ __( 'AI Content', 'blockwriter' ) } initialOpen={ true }>
			{ status && status.configured === false && (
				<Notice status="warning" isDismissible={ false }>
					{ __( 'BlockWriter AI is not configured.', 'blockwriter' ) }{ ' ' }
					<a href={ status.settingsUrl }>
						{ __( 'Open AI settings', 'blockwriter' ) }
					</a>
				</Notice>
			) }

			<TextareaControl
				label={ __( 'Prompt', 'blockwriter' ) }
				value={ prompt }
				onChange={ ( value ) => setAttributes( { prompt: value } ) }
				rows={ 4 }
				placeholder={ __(
					'A short introduction to our new coffee subscription.',
					'blockwriter',
				) }
			/>

			<SelectControl
				label={ __( 'Tone', 'blockwriter' ) }
				value={ tone }
				options={ TONE_OPTIONS }
				onChange={ ( value ) => setAttributes( { tone: value } ) }
			/>

			<SelectControl
				label={ __( 'Length', 'blockwriter' ) }
				value={ length }
				options={ LENGTH_OPTIONS }
				onChange={ ( value ) => setAttributes( { length: value } ) }
			/>

			<Button
				variant="primary"
				onClick={ handleGenerate }
				disabled={ ! canGenerate }
				className="bw-ai-content__generate"
			>
				{ buttonLabel }
			</Button>

			{ isLoading && (
				<div className="bw-ai-content__loading">
					<Spinner />
				</div>
			) }

			{ error && (
				<Notice status="error" isDismissible={ false }>
					{ error }
				</Notice>
			) }

			{ content && (
				<Button
					variant="link"
					isDestructive
					onClick={ () => setAttributes( { content: '' } ) }
				>
					{ __( 'Clear generated content', 'blockwriter' ) }
				</Button>
			) }

			<p className="bw-ai-content__disclaimer">
				{ __(
					'AI-generated content can be inaccurate. Review and edit it before publishing.',
					'blockwriter',
				) }
			</p>
		</PanelBody>
	);
};

export default AiContentSettingsPanel;
