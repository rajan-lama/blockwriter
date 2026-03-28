/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param root0
 * @param root0.attributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 */
const save = ({ attributes }) => {
	const containerStickyClass = attributes.sticky
		? ' gs-sticky ' + attributes.stickyPosition
		: '';

	const containerHideOnDesktop = attributes.hideOnDesktop
		? ' gs-hide-desktop'
		: '';

	const containerHideOnTablet = attributes.hideOnTablet
		? ' gs-hide-tablet'
		: '';

	const containerHideOnMobile = attributes.hideOnMobile
		? ' gs-hide-mobile'
		: '';

	const containerAnimationClass =
		attributes.animation !== 'none'
			? ' gs-container-animation animate__animated animate__' +
				attributes.animation +
				' animate__' +
				attributes.animationDuration
			: '';

	const containerClass = !attributes.hasParent
		? attributes.containerType
		: '';

	const containerClassList =
		containerClass +
		containerAnimationClass +
		containerStickyClass +
		containerHideOnDesktop +
		containerHideOnTablet +
		containerHideOnMobile;

	const contentClass = !attributes.hasParent
		? 'gs-container ' + attributes.contentType
		: '';

	const blockProps = useBlockProps.save({
		className: containerClassList,
	});

	const TagName = attributes.htmlTag;

	return (
		<TagName
			{...blockProps}
			style={{
				'--gs-sticky-offset': attributes.stickyOffsetValue,
				'--gs-zindex': attributes.zindex,
			}}
		>
			<div className={contentClass}>
				<InnerBlocks.Content />
			</div>
		</TagName>
	);
};
export default save;
