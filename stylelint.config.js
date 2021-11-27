const ignoreAtRules = [
  'mixin',
  'include',
  'tailwind',
  'extend',
  'apply',
  'variants',
  'responsive',
  'screen',
]
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['node_modules/**', 'dist/**'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ignoreAtRules,
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ignoreAtRules,
      },
    ],
    // ::v-deep
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
  },
}
