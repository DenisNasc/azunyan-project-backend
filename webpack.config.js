import path from 'path'
import nodeExternals from 'webpack-node-externals'

module.exports = {
  target: 'node',
  entry: {
    app: ['./back.js'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle-back.js',
  },
  externals: [nodeExternals()],
}
