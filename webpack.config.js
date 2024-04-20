/** Packages */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/** Constants */
const EXPORT_CONFIG = [];
const CSS_OUTPUT = 'public/static/css';
const JS_OUTPUT = 'public/static/js';

const BOOTSTRAP_PACKAGE_LOADER = {
    Alert: 'exports-loader?Alert!bootstrap/js/src/alert',
    // Button: 'exports-loader?Button!bootstrap/js/src/button',
    Carousel: 'exports-loader?Carousel!bootstrap/js/src/carousel',
    Collapse: 'exports-loader?Collapse!bootstrap/js/src/collapse',
    // Dropdown: 'exports-loader?Dropdown!bootstrap/js/src/dropdown',
    Modal: 'exports-loader?Modal!bootstrap/js/src/modal',
    // Popover: 'exports-loader?Popover!bootstrap/js/src/popover',
    Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/src/scrollspy',
    Tab: 'exports-loader?Tab!bootstrap/js/src/tab',
    // Tooltip: 'exports-loader?Tooltip!bootstrap/js/src/tooltip',
    Util: 'exports-loader?Util!bootstrap/js/src/util'
};

const webpackHelpers = {
    getResource: (type) => {
        let resourceDir = path.join(__dirname, 'client', type);
        let entries = {};

        fs.readdirSync(resourceDir)
            .filter(file => {
                return new RegExp(`.${type}$`, 'g').test(file);
            })
            .forEach(file => {
                let fileName = file.replace(new RegExp(`.${type}$`, 'g'), '');
                entries[fileName] = path.join(resourceDir, file);
            });

        return entries;
    }
}

function getSCSSConfig() {
    return {
        name: 'scss',
        entry: webpackHelpers.getResource('scss'),
        output: {
            filename: '[name].css',
            path: path.resolve(__dirname, CSS_OUTPUT)
        },
        plugins: [
            new ExtractTextPlugin({
                filename: '[name].css'
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }]
                },
                canPrint: true
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc)ss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                // Ignore all the url() attribute in scss files
                                url: false
                            }
                        }, {
                            loader: 'sass-loader'
                        }]
                    })
                }
            ]
        }
    };
}

function getJSConfig() {
    return {
        name: 'js',
        entry: webpackHelpers.getResource('js'),
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, JS_OUTPUT)
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
                ...BOOTSTRAP_PACKAGE_LOADER
            })
        ]
    };
}

module.exports = env => {
    const mode = env.mode ? env.mode : 'production';
    const target = (env.target === 'scss' || env.target === 'js') ? env.target : 'both';

    switch (target) {
        case 'scss':
            EXPORT_CONFIG.push(getSCSSConfig());
            break;
    
        case 'js':
            EXPORT_CONFIG.push(getJSConfig());
            break;
    
        default:
            EXPORT_CONFIG.push(getSCSSConfig(), getJSConfig());
            break;
    }

    return EXPORT_CONFIG.map(config => {
        config.mode = mode;
        return config;
    });
};
