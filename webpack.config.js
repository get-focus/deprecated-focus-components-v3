const configBuilder = require('webpack-focus').configBuilder;
const path = require('path');

const customConfig = {
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        moment: 'moment'
    },
    module: {
        preLoaders: [
            {
                test: /material-design-lite\/material/,
                loader: 'exports?componentHandler'
            }
        ]
    }
};
module.exports = configBuilder(customConfig);
