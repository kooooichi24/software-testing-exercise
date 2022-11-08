describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      value | expected
      ${3}  | ${20}
      ${15} | ${0}
      ${29} | ${20}
    `(
      "テストデータ $value の場合、割引率 $expected % と表示されること",
      ({ value, expected }) => {}
    );
  });
  describe("境界値分析", () => {
    it.each`
      value | expected
      ${1}  | ${20}
      ${5}  | ${20}
      ${6}  | ${0}
      ${27} | ${0}
      ${28} | ${20}
      ${30} | ${20}
      ${31} | ${0}
    `(
      "テストデータ $value の場合、割引率 $expected % と表示されること",
      ({ value, expected }) => {}
    );
  });
});
