import path from 'path'
import __dirname from './__dirname.js'

export default {
    mode: 'development',
    entry: {
        script1: './public/js/script1.js',
        script2: './public/js/script2.js', 
        script3: './public/js/script3.js', 
        script4: './public/js/script4.js',
        script5: './public/js/script5.js',
        script6: './public/js/script6.js'           
    },
    output: {
        path: path.join(__dirname, '/public/dist'),
        publicPath: '/public/dist',
        filename:"[name].bundle.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
    }
}