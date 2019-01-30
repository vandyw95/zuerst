// Assuming extending this AirBnB rules:
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js

export const x = {
  // https://eslint.org/docs/rules/jsx-quotes
  // AirBnB
  // 'jsx-quotes': ['off', 'prefer-double'],
  // ============
  // Proposed:
  'jsx-quotes': ['error', 'prefer-double'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  // AirBnB
  // 'react/jsx-max-props-per-line': [
  //   'error',
  //   {
  //     maximum: 1,
  //     when: 'multiline',
  //   },
  // ],
  // ============
  // Proposed:
  'react/jsx-max-props-per-line': [
    'error',
    {
      maximum: 1,
      when: 'always',
      // Will warn:
      // <Component isSingle life={isProgrammer ? undefined : 'hard'} />

      // Enforce into:
      // <Component
      //   isSingle
      //   life={isProgrammer ? undefined : 'hard'}
      // />
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  // AirBnB
  // 'react/jsx-sort-props': ['off', {
  //   ignoreCase: true,
  //   callbacksLast: false,
  //   shorthandFirst: false,
  //   shorthandLast: false,
  //   noSortAlphabetically: false,
  //   reservedFirst: true,
  // }],
  // ============
  // Proposed:
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      // <Component isABC tel={5555555} onClick={this._handleClick} />
      ignoreCase: true,
      shorthandFirst: true,
      // <Component a b c d="string" e="string" />
      reservedFirst: true,
      // <Component className="x" style={} isABC onClick={this._handleClick} />
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-sort-default-props.md
  // AirBnB
  // 'react/jsx-sort-default-props': ['off', {
  //   ignoreCase: true,
  // }],
  // ============
  // Proposed:
  'react/jsx-sort-default-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
  // AirBnB
  // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  // ============
  // Proposed:
  'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  // AirBnB
  // 'react/jsx-no-literals': ['off', { noStrings: true }],
  // ============
  // Proposed:
  'react/jsx-no-literals': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
  // AirBnB
  // 'react/no-direct-mutation-state': 'off',
  // ============
  // Proposed:
  'react/no-direct-mutation-state': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
  // AirBnB
  // 'react/forbid-component-props': ['off', { forbid: [] }],
  // ============
  // Default value: className & style
  // Proposed:
  'react/forbid-component-props': [
    'error',
    {
      forbid: [{ propName: 'className', allowedFor: ['span'] }, { propName: 'style' }],
    },
  ],

  // https://eslint.org/docs/rules/array-element-newline
  // AirBnB
  // 'array-element-newline': ['off', { multiline: true, minItems: 3 }],
  // ============
  // Proposed:
  'array-element-newline': ['error', 'consistent', { multiline: true, minItems: 3 }],

  // https://eslint.org/docs/rules/max-statements-per-line
  // AirBnB
  // 'max-statements-per-line': ['off', { max: 1 }],
  // ============
  // Proposed:
  'max-statements-per-line': ['error', { max: 1 }],

  // require multiline ternary
  // https://eslint.org/docs/rules/multiline-ternary
  // AirBnB
  // 'multiline-ternary': ['off', 'never'],
  // ============
  // Proposed:
  'multiline-ternary': ['error', 'always-multiline'],

  // https://eslint.org/docs/rules/object-curly-newline
  // AirBnB
  // 'object-curly-newline': [
  //   'error',
  //   {
  //     ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
  //     ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
  //     ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  //     ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  //   },
  // ],
  // ============
  // Proposed:
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { minProperties: 2, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 2, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 2, multiline: true, consistent: true },
    },
  ],

  // https://github.com/airbnb/javascript#whitespace--implicit-arrow-linebreak
  // Not Found in AirBnB rules
  // Proposed:
  'implicit-arrow-linebreak': 'error',

  // =========================================================
  // Question
  // =========================================================

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  // AirBnB
  // Need to enable?
  'react/jsx-handler-names': [
    'off',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    },
  ],

  // disallow require() ?
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
  // AirBnB
  'import/no-commonjs': 'off',

  // Prevent unassigned imports
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
  // importing for side effects is perfectly acceptable, if you need side effects.
  'import/no-unassigned-import': 'off',

  // Which style?
  // Reports if a module's default export is unnamed
  // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': [
    'off',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  // This rule enforces that all exports are declared at the bottom of the file.
  // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
  'import/exports-last': 'off',

  // Reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present
  // in a single file.
  // ====> Might need to restructure all styles.js exports <=====
  // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
  'import/group-exports': 'off',

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  // TODO: semver-major (eslint 5): enable
  'max-classes-per-file': ['off', 1],

  // disallow implicit type conversions
  // Typecasting explicit methods
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': [
    'off',
    {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    },
  ],

  // Use const YOUR_VARIABLE
  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'off',

  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': [
    'off',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'off',

  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // https://github.com/airbnb/javascript#arrows--one-arg-parens
};
