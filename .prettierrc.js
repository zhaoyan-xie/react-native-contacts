module.exports = {
  /**
   * Trailing commas may default to "all" in the future
   * ref: https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-trailingcomma-to-es5-6963httpsgithubcomprettierprettierpull6963-by-fiskerhttpsgithubcomfisker
   */
  trailingComma: 'all',

  /**
   * Mainly to prevent making imports too vertical
   * ref: https://github.com/prettier/prettier/issues/5995
   */
  printWidth: 120,

  useTabs: true,
};
