module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    rules: {
        'array-bracket-newline': [
            'error', {
                multiline: true,
                minItems: 4
            }
        ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-spacing': 'error',
        'block-spacing': [ 'error', 'always' ],
        'brace-style': [
            'error', '1tbs', {
                allowSingleLine: true
            }
        ],
        'comma-spacing': [
            'error', {
                after: true
            }
        ],
        'comma-style': [ 'error', 'last' ],
        'computed-property-spacing': [ 'error', 'always' ],
        'eol-last': [ 'error', 'always' ],
        indent: [
            'error', 4, {
                SwitchCase: 1
            }
        ],
        'key-spacing': [
            'error', {
                mode: 'strict',
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            'error', {
                before: true,
                after: true
            }
        ],
        'lines-between-class-members': [
            'error', 'always', {
                exceptAfterSingleLine: true
            }
        ],
        'max-statements-per-line': [
            'error', {
                max: 1
            }
        ],
        'new-cap': [
            'error', {
                newIsCap: true,
                capIsNew: false
            }
        ],
        'no-alert': 'warn',
        'no-debugger': 'error',
        'no-extra-parens': 'error',
        'no-extra-semi': 'error',
        'no-multi-spaces': 'error',
        'no-new-object': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'warn',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'object-property-newline': [
            'error', {
                allowAllPropertiesOnSameLine: true
            }
        ],
        'object-shorthand': 'error',
        'padded-blocks': [ 'error', 'always' ],
        'padding-line-between-statements': [
            'error', {
                blankLine: 'always',
                prev: [ 'function', 'class', 'block-like' ],
                next: '*'
            }, {
                blankLine: 'always',
                prev: '*',
                next: [ 'function', 'class', 'block-like' ]
            }, {
                blankLine: 'always',
                prev: '*',
                next: [ 'return', 'default' ]
            }, {
                blankLine: 'always',
                prev: [ 'const', 'let', 'var' ],
                next: '*'
            }, {
                blankLine: 'any',
                prev: [ 'const', 'let', 'var' ],
                next: [ 'const', 'let', 'var' ]
            }
        ],
        'prefer-const': 'warn',
        'quote-props': [ 'error', 'as-needed' ],
        quotes: [ 'error', 'single' ],
        semi: [ 'error', 'always' ],
        'semi-spacing': [
            'error', {
                before: false,
                after: true
            }
        ],
        'space-before-blocks': [ 'error', 'always' ],
        'space-before-function-paren': [
            'error', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [ 'error', 'always' ],
        'space-infix-ops': [
            'error', {
                int32Hint: false
            }
        ],
        'space-unary-ops': [
            'error', {
                words: true,
                nonwords: false,
                overrides: {
                    '+': true,
                    '-': true,
                    '*': true,
                    '/': true,
                    '**': true
                }
            }
        ],
        'yield-star-spacing': [ 'error', 'after' ]
    }
};
