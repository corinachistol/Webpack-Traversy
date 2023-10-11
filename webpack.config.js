import path from 'node:path'
import { fileURLToPath } from 'node:url'
import  HtmlWebpackPlugin  from 'html-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),

    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'[name][contentHash].js',
        clean:true,
    },
    // devTool: 'source-map', //outdated
    devServer: {
        static:{
            directory:path.resolve(__dirname, 'dist')
        },
        // port:3000,
        // // open:true,
        // // hot: true,
        // compres:true,
        // historyApiFallback: true
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}