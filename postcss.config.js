module.exports = {
    plugins: [
        require("postcss-import"),
        require('cssnano')({
            preset: 'default',
        }),
        require('uncss').postcssPlugin({
            html: ['dist/**/*.html']
        })
    ],
};
