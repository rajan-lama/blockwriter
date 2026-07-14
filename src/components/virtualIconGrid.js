import { FixedSizeGrid as Grid } from 'react-window';
import { Button } from '@wordpress/components';

export default function VirtualIconGrid({ icons, onSelect }) {
  const columnCount = 8;
  const rowCount = Math.ceil(icons.length / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const icon = icons[index];

    if (!icon) return null;

    return (
      <div style={style}>
        <Button onClick={() => onSelect(icon.name)}>
          <span dangerouslySetInnerHTML={{ __html: icon.svg }} />
        </Button>
      </div>
    );
  };

  return (
    <Grid
      columnCount={columnCount}
      columnWidth={60}
      height={400}
      rowCount={rowCount}
      rowHeight={60}
      width={500}
    >
      {Cell}
    </Grid>
  );
}
