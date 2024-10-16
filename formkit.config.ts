import { defaultConfig } from '@formkit/vue';
import {
  createLocalStoragePlugin,
  createMultiStepPlugin,
} from '@formkit/addons';
import { rootClasses } from './formkit.theme';
import '@formkit/addons/css/multistep';

function removePrompts(obj) {
  // Check if the current object is an array
  if (Array.isArray(obj)) {
    return obj.map(removePrompts);
  }

  // Check if the current object is an object
  if (obj !== null && typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      if (key !== 'prompts') {
        newObj[key] = removePrompts(obj[key]);
      }
    }
    return newObj;
  }

  // Return the value if it's neither an array nor an object
  return obj;
}

const onBeforeSave = (data) => {
  // Remove hidden fields from the data
  const filteredData = removePrompts(data);
  // console.log('++++++++++++++++++++++++ ');
  // console.dir(filteredData);
  return filteredData;
};

export default defaultConfig({
  config: {
    rootClasses,
  },
  plugins: [
    createLocalStoragePlugin({
      // plugin defaults:
      prefix: 'formkit',
      key: undefined,
      control: undefined,
      maxAge: 3600000, // 1 hour
      debounce: 200,
      beforeSave: onBeforeSave,
      beforeLoad: undefined,
    }),
    createMultiStepPlugin(),
  ],
});
