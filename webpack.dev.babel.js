import webpack from 'webpack';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.common.babel.js';

module.exports = function () {
  return Merge(CommonConfig, {
    devtool: 'source-map',
  });
};
