export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
  ignoreFiles: ['node_modules/**/*', 'src/index.css', 'src/App.css'],
};
