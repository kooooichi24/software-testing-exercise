describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      value   | expected
      ${-150} | ${"EEEE"}
      ${-50}  | ${"畳数は1以上を入力してください"}
      ${10}   | ${"165"}
      ${200}  | ${"EEEE"}
    `(
      "畳数 $value 畳の場合、$expectedと表示されること",
      ({ value, expected }) => {}
    );
  });
  describe("境界値分析", () => {
    it.each`
      value   | expected
      ${-129} | ${"EEEE"}
      ${-128} | ${"畳数は1以上を入力してください"}
      ${0}    | ${"畳数は1以上を入力してください"}
      ${1}    | ${"16.5"}
      ${127}  | ${"2095.5"}
      ${128}  | ${"EEEE"}
    `(
      "畳数 $value 畳の場合、$expectedと表示されること",
      ({ value, expected }) => {}
    );
  });
});
