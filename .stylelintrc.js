export default {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'prettier/prettier': true,
  },
  ignoreFiles: ['node_modules/**/*', 'src/index.css', 'src/App.css'],
};
