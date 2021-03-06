/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { configure, getStorybookUI } from '@storybook/react-native';

import { AppRegistry } from 'react-native';

// import stories
configure(() => {
  require('../stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUI);
export default StorybookUI;
