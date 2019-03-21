module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "object-curly-newline": 0,
        "comma-dangle": ["error", "never"],
        "quote-props": ["error", "consistent"],
        "prefer-destructuring": 0,
        "dot-notation": 0,
        "no-param-reassign": 0,
        "radix": 0,
        "no-restricted-globals": 0,
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true
        }],
        "max-len": ["error", {
            "code": 200
        }],
        "arrow-body-style": 0,
        "no-return-assign": 0,
        "no-plusplus": 0,
        "quotes": 0,
        "no-console": 0,
        "semi": 0,
        "indent": ["error", 4],
    }
};