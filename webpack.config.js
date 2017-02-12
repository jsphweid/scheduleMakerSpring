let path = require('path');

module.exports = {
    entry: './src/main/webapp/assets/js/react/schedule_react_entry.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/webapp/assets/js/react/bundled/bundle.js'
        // filename: './target/scheduleMaker/assets/js/react/bundled/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

// module.exports = {
//     entry: './src/main/webapp/assets/js/react/schedule_react_entry.js',
//     output: {
//         path: __dirname,
//         filename: './src/main/webapp/assets/js/react/bundled/bundle.js'
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     }
// };