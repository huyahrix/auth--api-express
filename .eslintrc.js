module.exports = {
    //   ╔═╗╔═╗╦  ╦╔╗╔╔╦╗┬─┐┌─┐
    //   ║╣ ╚═╗║  ║║║║ ║ ├┬┘│
    //  o╚═╝╚═╝╩═╝╩╝╚╝ ╩ ┴└─└─┘
    // A set of basic code conventions (similar to a .jshintrc file) designed to
    // encourage quality and consistency across your Sails app's code base.
    // These rules are checked against automatically any time you run `npm test`.
    // 
    // > An additional eslintrc override file is included in the `assets/` folder
    // > right out of the box.  This is specifically to allow for variations in acceptable
    // > global variables between front-end JavaScript code designed to run in the browser
    // > vs. backend code designed to run in a Node.js/Sails process.
    //
    // > Note: If you're using mocha, you'll want to add an extra override file to your
    // > `test/` folder so that eslint will tolerate mocha-specific globals like `before`
    // > and `describe`.
    // Designed for ESLint v4.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // For more information about any of the rules below, check out the relevant
    // reference page on eslint.org.  For example, to get details on "no-sequences",
    // you would visit `http://eslint.org/docs/rules/no-sequences`.  If you're unsure
    // or could use some advice, come by https://sailsjs.com/support.
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
    "env": {
      "node": true
    },
  
    "parserOptions": {
      "ecmaVersion": 8,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true
      }
    },
  
    "globals": {
      // If "no-undef" is enabled below, be sure to list all global variables that
      // are used in this app's backend code (including the globalIds of models):
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      "Promise": true,
      "sails": true,
      "_": true,
      "async": true
      // …and any others (e.g. `"Organization": true`)
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    },
  
    "rules": {
      "callback-return":              ["error", ["done", "proceed", "next", "onwards", "callback", "cb"]],
      "camelcase":                    ["warn", {"properties":"never"}],
      "comma-style":                  ["warn", "last"],
      "curly":                        ["error"],
      "eqeqeq":                       ["error", "always"],
      "eol-last":                     ["warn"],
      "handle-callback-err":          ["error"],
      "indent":                       ["warn", 4, {
        "SwitchCase": 1,
        "MemberExpression": "off",
        "FunctionDeclaration": {"body":1, "parameters":"off"},
        "FunctionExpression": {"body":1, "parameters":"off"},
        "CallExpression": {"arguments":"off"},
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ignoredNodes": ["ConditionalExpression"]
      }],
      "no-dupe-keys":                 ["error"],
      "no-duplicate-case":            ["error"],
      "no-extra-semi":                ["warn"],
      "no-labels":                    ["error"],
      "no-mixed-spaces-and-tabs":     [2, "smart-tabs"],
      "no-redeclare":                 ["warn"],
      "no-return-assign":             ["error", "always"],
      "no-sequences":                 ["error"],
      "no-trailing-spaces":           ["warn"],
      "no-undef":                     ["off"],
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      // ^^Note: If this "no-undef" rule is enabled (set to `["error"]`), then all model globals
      // (e.g. `"Organization": true`) should be included above under "globals".
      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      "no-unexpected-multiline":      ["warn"],
      "no-unreachable":               ["warn"],
      "no-unused-vars":               ["warn", {"caughtErrors":"all", "caughtErrorsIgnorePattern": "^unused($|[A-Z].*$)", "argsIgnorePattern": "^unused($|[A-Z].*$)", "varsIgnorePattern": "^unused($|[A-Z].*$)" }],
      "no-use-before-define":         ["error", {"functions":false}],
      "one-var":                      ["warn", "never"],
      "quotes":                       ["warn", "single", {"avoidEscape":false, "allowTemplateLiterals":true}],
      "semi":                         ["error", "always"],
      "semi-spacing":                 ["warn", {"before":false, "after":true}],
      "semi-style":                   ["warn", "last"]
    }
  
  }
  