// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  modify: config => {
    const appConfig = Object.assign({}, config);

    // appConfig.module.rules.push({
    //   test: /\.css$/,
    //   loaders: ['style-loader', 'css-loader?modules'],
    // });
    // console.log(appConfig.module.rules)

    // if (typeof window !== 'undefined') {
    //   config.plugins.push(
    //     new BundleAnalyzerPlugin({
    //       analyzerMode: 'static',
    //       reportFilename: 'webpack-report.html',
    //       openAnalyzer: false,
    //     })
    //   );
    // }

    return appConfig;
  },
};
