/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint-config-airbnb-base',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue-scoped-css/base',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  overrides: [
    {
      files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:playwright/recommended'],
    },
    {
      files: ['*.vue'],
      rules: {
        'vue/component-definition-name-casing': ['off', 'PascalCase'],
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase',
          {
            registeredComponentsOnly: false,
            ignores: [],
          },
        ],
        'vue/require-default-prop': 'off', // props 一定要有默认值
        'vue/multi-word-component-names': 'off', // 组件名必须是多单词的
        'vue/no-reserved-props': 'off', // 不允许在 props 中使用保留名称
        'vue/no-v-html': 'off', // 不允许使用 v-html
        'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped'] }], // style 一定要有 scoped
        'no-undef': 'off', // ts(2304) //禁用未声明的变量
      },
    },
    {
      files: ['*.ts', '*.tsx'], // https://github.com/typescript-eslint eslint-recommended
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-new-symbol': 'off', // ts(2588)
        'no-obj-calls': 'off', // ts(2349)
        'no-redeclare': 'off', // ts(2451)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376)
        'no-undef': 'off', // ts(2304)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
        'valid-typeof': 'off', // ts(2367)
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // env: {
  //   'vue/setup-compiler-macros': true,
  //   browser: true,
  //   node: true,
  //   jest: true,
  //   es6: true,
  // },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    strict: ['error', 'never'],
    camelcase: 'off', // 强制驼峰法命名
    'default-param-last': 'warn', // 函数参数默认值应该放在后面
    'dot-notation': 'off', // 禁止不必要的方括号符号
    'no-console': 'off', // 不禁用console
    'no-debugger': 'error', // 禁用debugger
    'no-var': 'warn', // 对var警告
    'no-class-assign': 'error', // 禁止给类赋值
    'no-lone-blocks': 'off', // 禁止不必要的嵌套块
    'no-cond-assign': 'error', // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 'error', // 禁止修改const声明的变量
    'no-trailing-spaces': 'warn', // 一行结束后面有空格就发出警告
    'no-underscore-dangle': 'off', // 标识符不能以_开头或结尾
    'no-invalid-this': 'off', // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
    'no-this-before-super': 'off', // 在调用super()之前不能使用this或super
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'error', // 禁止重复的 case 标签
    'no-label-var': 'error', // 不允许标签与变量同名
    'no-extra-parens': 'off', // 禁止不必要的括号 //(a * b) + c;//报错
    'no-catch-shadow': 'off', // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-shadow': 'off', // 禁止 var 声明 与外层作用域的变量同名
    'no-bitwise': 'off', // 禁用按位运算符
    'no-continue': 'off', // 禁用 continue 语句
    'no-inline-comments': 'off', // 禁止在代码行后使用内联注释
    'no-lonely-if': 'off', // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-negated-condition': 'off', // 不允许否定的表达式
    'no-nested-ternary': 'off', // 不允许使用嵌套的三元表达式
    'no-plusplus': 'off', // 禁止使用一元操作符 ++ 和 --
    'no-ternary': 'off', // 不允许使用三元操作符
    'no-use-before-define': 'off', // 禁止在定义前使用
    'no-param-reassign': 'off', // 禁止对函数参数再赋值
    'func-names': 'off', // 强制使用命名的 function 表达式
    'jsx-quotes': 'off', // 强制在 JSX 属性中一致地使用双引号或单引号
    'prefer-const': 'off', // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-reflect': 'off', // 要求在合适的地方使用 Reflect 方法
    'prefer-spread': 'off', // 要求使用扩展运算符而非 .apply()
    'generator-star-spacing': 'off', // 强制 generator *号单独
    'function-paren-newline': 'off', // 强制在函数括号内使用一致的换行
    'sort-imports': 'off', // 导入排序
    'class-methods-use-this': 'off', // 强制class使用this // 因为AxiosCancel必须实例化而能静态化所以加的规则，如果有办法解决可以取消
    'no-confusing-arrow': 'off', // 禁止可能与比较混淆的箭头函数
    'linebreak-style': 'off', // 强制使用一致的换行符风格
    'no-prototype-builtins': 'off', // 禁止直接使用 Object.prototypes 的内置属性 //限制性太强
    'prefer-destructuring': [
      'warn',
      {
        array: false,
      },
    ],
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off', // 当只有有个模块导出时，使用默认导出而不是用命名导出
    'import/first': 'off', // https://github.com/vuejs/vue-eslint-parser/issues/58
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/first-attribute-linebreak': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
};
