// prettier.config.js
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  arrowParens: "always", // 화살표 함수의 매개변수에 항상 괄호 사용
  bracketSpacing: true, // 객체 리터럴에서 중괄호와 객체 내용 사이에 공백 삽입
  jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내린다.
  jsxSingleQuote: false, // JSX에 singe 쿼테이션 사용 여부
  quoteProps: "as-needed", // 객체 속성에 쿼테이션을 필요할 때만 사용
  semi: true, // 문장의 끝에 세미콜론을 사용
  singleQuote: false, // single quote (') 대신 double quote (")를 사용합니다.
  tabWidth: 2, // 탭 너비
  printWidth: 120, //  줄 바꿈 할 폭 길이
  trailingComma: "all", // 여러 줄로 작성된 구문에서 마지막 요소 뒤에 후행 콤마를 사용
};
