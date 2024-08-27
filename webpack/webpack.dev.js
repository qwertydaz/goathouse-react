import path from 'path';
import { __dirname } from './utils.js';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
  stats: {
    errorDetails: false,
  },
};

export default merge(commonConfig, devConfig);
