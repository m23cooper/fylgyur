import { defaultConfig } from '@formkit/vue'
import { createLocalStoragePlugin } from '@formkit/addons'
import { rootClasses } from './formkit.theme'

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
            beforeSave: undefined,
            beforeLoad: undefined
        }),
    ],
})