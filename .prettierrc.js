module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  quoteProps: 'as-needed',
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  // Additional configuration options
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'always',
      },
    },
  ],
};
