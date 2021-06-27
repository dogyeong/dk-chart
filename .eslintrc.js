module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  /** 사용할 플러그인들을 eslint에 등록 */
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    /** 기본 내장 eslint rule을 동작시킨다 */
    'eslint:recommended',
    /** 타입스크립트 관련 eslint rule을 동작시킨다 */
    'plugin:@typescript-eslint/recommended',
    /**
     * 코드 포맷팅 관련 eslint rule을 off하고, prettier rule을 eslint에 포함시켜서 에러를 eslint가 검사하도록 한다.
     *
     * 8.0.0버전부터 'prettier/@typescript-eslint'설정은 'prettier'설정에 포함되었다.
     * eslint-plugin-prettier 패키지를 사용하면 'prettier' 대신 'plugin:prettier/recommended'만 명시해주면 된다.
     * 'plugin:prettier/recommended'는 eslint-config-prettier와 eslint-plugin-prettier를 한번에 설정한다.
     *
     * @see https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
     * @see https://github.com/prettier/eslint-plugin-prettier#readme
     * */
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
  },
};
