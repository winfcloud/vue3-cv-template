module.exports = {
  defaultSeverity: 'error',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-html',
  ],
  plugins: ['stylelint-order'],
  overrides: [],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['alpha'],
      },
    ],
    'selector-class-pattern': [
      /^([_a-z][a-z0-9]*)(?:(-[a-z0-9]+)|(__[a-z0-9]+)|(--[a-z0-9]+))*$/,
      {
        message: (selector) => `Expected class selector "${selector}" to be kebab-case with __ or --`,
      },
    ], // class名字规则
    'custom-property-pattern': null,
    'import-notation': null, // import导入规则和 less 导入有冲突
  },
};
