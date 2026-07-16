import { background } from '@wordpress/icons';

const layoutOptionsAttributes = {
  backgroundOption: {
    type: 'string',
    default: 'color',
    usedBy: 'BackgroundPanel',
  },
  backgroundColor: {
    type: 'string',
    default: '#fff',
    usedBy: 'BackgroundPanel',
  },
  backgroundGradient: {
    type: 'string',
    default: '',
    usedBy: 'BackgroundPanel',
  },
  backgroundImageOverlay: {
    type: 'string',
    default: '',
    usedBy: 'BackgroundPanel',
  },
  backgroundFocalPoint: {
    type: 'object',
    default: {
      x: 0.5,
      y: 0.5,
    },
    usedBy: 'BackgroundPanel',
  },
  backgroundAttachmentScroll: {
    type: 'string',
    default: 'scroll',
    usedBy: 'BackgroundPanel',
  },
  backgroundBlendMode: {
    type: 'string',
    default: 'normal',
    usedBy: 'BackgroundPanel',
  },
  backgroundRepeat: {
    type: 'string',
    default: 'normal',
    usedBy: 'BackgroundPanel',
  },
  backgroundOpacity: {
    type: 'string',
    default: 'normal',
    usedBy: 'BackgroundPanel',
  },
  displayType: {
    type: 'string',
    default: 'normal',
    usedBy: 'DisplayTypePanel',
  },
  rowDirection: {
    type: 'string',
    default: 'normal',
    usedBy: 'DisplayTypePanel',
  },
  flexWrap: {
    type: 'string',
    default: 'normal',
    usedBy: 'DisplayTypePanel',
  },
  justifyContent: {
    type: 'string',
    default: 'normal',
    usedBy: 'DisplayTypePanel',
  },
  alignItem: {
    type: 'string',
    default: 'normal',
    usedBy: 'DisplayTypePanel',
  },
  positionType: {
    type: 'string',
    default: 'normal',
    usedBy: 'PositionPanel',
  },
  rowGap: {
    type: 'string',
    default: 'normal',
    usedBy: 'SpacingPanel',
  },
  columnGap: {
    type: 'string',
    default: 'normal',
    usedBy: 'SpacingPanel',
  },
  padding: {
    type: 'string',
    default: 'normal',
    usedBy: 'SpacingPanel',
  },
  margin: {
    type: 'string',
    default: 'normal',
    usedBy: 'SpacingPanel',
  },
  textColor: {
    type: 'string',
    default: 'normal',
    usedBy: 'TextColorPanel',
  },
  linkColor: {
    type: 'string',
    default: 'normal',
    usedBy: 'TextColorPanel',
  },
  hoverColor: {
    type: 'string',
    default: 'normal',
    usedBy: 'TextColorPanel',
  },
  visitedColor: {
    type: 'string',
    default: 'normal',
    usedBy: 'TextColorPanel',
  },
  zindex: {
    type: 'string',
    default: 'normal',
    usedBy: 'ZIndexPanel',
  },

  headerBgColor: {
    type: 'string',
    default: '#000',
  },
  headerTextColor: {
    type: 'string',
    default: '#eee',
  },
  headerIcon: {
    type: 'string',
    default: 'unfold',
  },
  headerIconColor: {
    type: 'string',
    default: '#fff',
  },
  bodyBgColor: {
    type: 'string',
  },
  bodyTextColor: {
    type: 'string',
  },
  borderStyle: {
    type: 'string',
    default: 'solid',
  },
  borderWidth: {
    type: 'number',
    default: 0,
  },
  borderColor: {
    type: 'string',
  },
  borderRadius: {
    type: 'number',
    default: 2,
  },
  marginBottom: {
    type: 'number',
  },
  collapsedAll: {
    type: 'boolean',
    default: false,
  },
  changed: {
    type: 'boolean',
    default: false,
  },
};

export default layoutOptionsAttributes;
