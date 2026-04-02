export default function save({ attributes }) {
  const { icon } = attributes;

  const style = {
    '--bw-icon-size': `${attributes.size}px`,
    '--bw-icon-color': attributes.color,
    '--bw-icon-bg': attributes.bgColor,
    '--bw-icon-padding': `${attributes.padding}px`,
    '--bw-icon-radius': `${attributes.borderRadius}px`,
  };

  return (
    <div {...useBlockProps.save()}>
      <span data-icon={icon}></span>
    </div>
  );
}
