describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      value   | expected
      ${-10}  | ${"EEEE"}
      ${1000} | ${"1000"}
      ${2500} | ${"EEEE"}
    `(
      "重さ $value グラムの場合、$expectedと表示されること",
      ({ value, expected }) => {}
    );
  });
  describe("境界値分析", () => {
    it.each`
      value   | expected
      ${-1}   | ${"EEEE"}
      ${0}    | ${"0"}
      ${2000} | ${"2000"}
      ${2001} | ${"EEEE"}
    `(
      "重さ $value グラムの場合、$expectedと表示されること",
      ({ value, expected }) => {}
    );
  });
});
