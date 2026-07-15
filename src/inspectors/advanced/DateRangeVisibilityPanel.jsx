import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, DateRangeCalendar } from '@wordpress/components';

const DateRangeVisibilityPanel = ({ attributes, setAttributes }) => {
  const [selected, setSelected] = useState({
    from: new Date(),
    to: new Date(),
  });

  useEffect(() => {
    setAttributes({
      dateRange: selected,
    });
  }, [selected, setAttributes]);

  console.log(DateRangeCalendar);

  return (
    <PanelBody title={__('Display Date', 'blockwriter')} initialOpen={false}>
      <DateRangeCalendar selected={selected} onSelect={setSelected} />
    </PanelBody>
  );
};

export default DateRangeVisibilityPanel;
