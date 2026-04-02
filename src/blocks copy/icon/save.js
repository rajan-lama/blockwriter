export default function save({ attributes }) {
  const { icon } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <span data-icon={icon}></span>
    </div>
  );
}
