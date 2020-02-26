module.exports ={
   presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage", 
                targets: {
                    "browsers": [ ">0.25%"]
                },
                debug: false,
                corejs: 3
            }, 
        ],
        "@babel/preset-react"
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true,
            }
        ],
        "@babel/plugin-transform-object-assign",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-proposal-object-rest-spread",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
    ],
};