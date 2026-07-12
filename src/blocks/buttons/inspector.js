import { InspectorControls } from '@wordpress/block-editor';
import Settings from '../../hooks/ClassSettings';
import TabButton from '../../components/TabButton';

export default function Inspector(props) {
  const settings = new Settings(
    'buttonLabel',
    'text',
    'attribute',
    'input',
    'value',
    {
      placeholder: 'Enter button label',
      defaultValue: '',
      required: false,
    },
  );

  const option = settings.generateTextBoxOptions();

  const { attributes, setAttributes } = props;

  return (
    <InspectorControls>
      <>
        <TabButton attributes={attributes} setAttributes={setAttributes} />
      </>
    </InspectorControls>
  );
}
