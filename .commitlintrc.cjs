// .commitlintrc.cjs
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'type-empty': [2, 'never'], // <type> 不能为空
    'type-enum': [2, 'always', ['wip',
    'feat',
    'fix',
    'ui',
    'docs',
    'style',
    'perf',
    'refactor',
    'release',
    'chore',
    'revert',
    'build']], // <type> 规定使用类型
    'type-case': [0],
    'scope-empty': [0], // <scope> 可为空
    'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
    'subject-full-stop': [2, 'never', '.'], // <subject> 结尾不加'.'
    'subject-case': [0],
    'header-max-length': [2, 'always', 72], // header最大72个字符
    'body-leading-blank': [1, 'always'], // body上面要有换行
    'footer-leading-blank': [1, 'always'] // footer上面要有换行
  },
  prompt: {
    messages: {
      type: "请选择一种提交类型:",
      subject: "请简要描述提交 message (必填):\n",
      confirmCommit: "确认使用以上信息提交？"
    },
    types: [
      { value: 'feat', name: 'feat:     A new feature', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      A bug fix', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     Documentation only changes', emoji: ':memo:' },
      { value: 'style', name: 'style:    Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
      { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
      { value: 'perf', name: 'perf:     A code change that improves performance', emoji: ':zap:' },
      { value: 'test', name: 'test:     Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
      { value: 'build', name: 'build:    Changes that affect the build system or external dependencies', emoji: ':package:' },
      { value: 'ci', name: 'ci:       Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' },
      { value: 'chore', name: 'chore:    Other changes that don\'t modify src or test files', emoji: ':hammer:' },
      { value: 'revert', name: 'revert:   Reverts a previous commit', emoji: ':rewind:' }
    ],
    useEmoji: false,
    emojiAlign: 'center',
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: ["scope"],
    issuePrefixs: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixsAlign: 'top',
    emptyIssuePrefixsAlias: 'skip',
    customIssuePrefixsAlias: 'custom',
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
