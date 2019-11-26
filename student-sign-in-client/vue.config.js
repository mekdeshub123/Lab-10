module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: 'http://127.0.0.1:3000'
    }
}