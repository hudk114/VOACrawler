module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        // 定义采用let或const，不要使用var
        "no-var": 2,
        "prefer-const": 2,
        // 未使用变量
        "no-unused-vars": 1,
        // 每个变量都要有const或let
        "one-var": [
            2,
            "never"
        ],
        // 使用{}而非Object()
        "no-new-object": 2,
        // 使用简写的对象方法定义与属性定义
        "object-shorthand": 1,
        // 在对象定义时仅非合法标识符的属性名使用引号
        "quote-props": [
            2,
            "as-needed"
        ],
        "quotes": [
            "error",
            "single"
        ],
        // 使用[]而非Array()
        "no-array-constructor": 2,
        // 使用模板字符串而非连接操作，模板字符串中的{}不需要留空
        "prefer-template": 1,
        "template-curly-spacing": 2,
        // 避免不必要的字符转义
        "no-useless-escape": 2,
        // 只能使用函数表达式
        "func-style": [
            2,
            "expression",
            {
                "allowArrowFunctions": true
            }
        ],
        "no-new-func": 2,
        // 禁止在块内声明函数
        "no-loop-func": 2,
        // 使用...而非arguments
        "prefer-rest-params": 2,
        // 块空格
        "space-before-blocks": 2,
        "keyword-spacing": 2,
        "space-infix-ops": 2,
        // 禁止对参数赋值
        "no-param-reassign": 2,
        // 避免空构造函数
        "no-useless-constructor": 2,
        // 避免重复定义
        "no-dupe-class-members": 2,
        // 使用.运算符读取对象属性
        "dot-notation": 2,
        "eqeqeq": 2,
        // 禁止嵌套三元表达式
        "no-nested-ternary": 2,
        // if-else语句
        "brace-style": 2,
        // 注释空格
        "spaced-comment": 2,
        // 不要空行填充
        "padded-blocks": [
            2,
            "never"
        ],
        "space-in-parens": 2,
        "array-bracket-spacing": 2,
        "object-curly-spacing": [
            2,
            "always"
        ],
        "id-length": 1,
        "camelcase": 2
    },
    "parser": "babel-eslint"
};
