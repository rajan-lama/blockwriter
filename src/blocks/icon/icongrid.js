export default function IconGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '10px',
      }}
    >
      {icons.solid.map((icon, index) => (
        <div
          key={index}
          style={{
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          {icon.replace(/-/g, ' ')}
        </div>
      ))}
    </div>
  );
}
