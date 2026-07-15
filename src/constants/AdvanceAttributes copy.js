const advancedOptionsAttributes = {
  animations: {
    type: 'string',
    default: 'none',
    usedBy: 'AnimationPanel',
  },
  onHoverAnimations: {
    type: 'string',
    default: 'none',
    usedBy: 'AnimationPanel',
  },
  displayDateRange: {
    type: 'Object',
    usedBy: 'DateRangeVisibilityPanel',
  },
  showDesktop: {
    type: 'Boolean',
    display: true,
    usedBy: 'DeviceVisibilityPanel',
  },
  showTablet: {
    type: 'Object',
    display: true,
    usedBy: 'DeviceVisibilityPanel',
  },
  showMobile: {
    type: 'Object',
    display: true,
    usedBy: 'DeviceVisibilityPanel',
  },
  userVisibility: {
    type: 'string',
    default: 'none',
    usedBy: 'UserVisibilityPanel',
  },
  selectedRoles: {
    type: 'array',
    default: '[]',
    usedBy: 'UserVisibilityPanel',
  },

  header: {
    type: 'string',
    default: '',
    usedBy: '',
  },
  headerBgColor: {
    type: 'string',
    default: '#000',
    usedBy: '',
  },
  headerTextColor: {
    type: 'string',
    default: '#eee',
    usedBy: '',
  },
  headerIcon: {
    type: 'string',
    default: 'unfold',
    usedBy: '',
  },
  headerIconColor: {
    type: 'string',
    default: '#fff',
    usedBy: '',
  },
  bodyBgColor: {
    type: 'string',
    usedBy: '',
  },
  bodyTextColor: {
    type: 'string',
    usedBy: '',
  },
  borderStyle: {
    type: 'string',
    default: 'solid',
    usedBy: '',
  },
  borderWidth: {
    type: 'number',
    default: 0,
    usedBy: '',
  },
  borderColor: {
    type: 'string',
    usedBy: '',
  },
  borderRadius: {
    type: 'number',
    default: 2,
    usedBy: '',
  },
  marginBottom: {
    type: 'number',
    default: 15,
    usedBy: '',
  },
  collapsedAll: {
    type: 'boolean',
    default: false,
    usedBy: '',
  },
  changed: {
    type: 'boolean',
    default: false,
    usedBy: '',
  },
};

export default advancedOptionsAttributes;
