module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', //
        'chore', // 对构建过程或辅助工具和库进行更改
        'ci', // ci
        'docs', // 仅文档变动
        'feat', // 新特性 新功能
        'fix', // 修补bug
        'perf', // 性能提升
        'refactor', // 重构 既不修复错误也不增加功能的鹅更改
        'revert', // 版本回退
        'style', // 不影响代码含义的修改（空格，格式，缺少号等）
        'test', // 添加缺失或修正现有测试
      ],
    ],
    'type-empty': [2, 'never'], // type不能为空
    'type-case': [0, 'always', 'lower-case'], // type不限制大小写
    'subject-empty': [2, 'never'], // subject（简短得描述）不能为空
    'subject-max-length': [1, 'always', 50], // subject最大长度，超出只会警告，不阻止提交
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
  },
}
