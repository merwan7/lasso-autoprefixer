var autoprefixer = require('autoprefixer-core');
var postcss = require('postcss');

module.exports = function (lasso, config) {
    lasso.addTransform({
        contentType: 'css',
        name: module.id,
        stream: false,
        transform: function (code, lassoContext) {
            var processed = postcss([ autoprefixer(config) ]).process(code);

            processed.warnings().forEach(function (warn) {
                process.stderr.write(warn.toString());
            });
            return processed.css;
        }
    });
};