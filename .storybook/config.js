import { configure } from '@kadira/storybook';
import * as storybook from '@kadira/storybook';

import { setOptions } from '@kadira/storybook-addon-options';


setOptions({
    name: 'Focus-showcase',
    showDownPanel: false
});

function loadStories() {
  require('../stories');
}

storybook.configure(loadStories, module);
