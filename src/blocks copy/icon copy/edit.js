import { renderIcon } from './iconrender';
import iconData from './zap.json';
import Inspector from './inspector';

export default function Edit() {
  return (
    <>
      <Inspector attributes={{}} setAttributes={() => {}} />
      <div
        dangerouslySetInnerHTML={{
          __html: renderIcon(iconData),
        }}
      />
    </>
  );
}
