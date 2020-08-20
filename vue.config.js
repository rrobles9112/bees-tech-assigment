module.exports = {
    "configureWebpack": {
        "devtool": 'source-map'
    },
    "css": {
        "loaderOptions": {
            "less": {
                "lessOptions": {
                    /*modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },*/
                    "javascriptEnabled": true,
                },
            },
        },
    },
}