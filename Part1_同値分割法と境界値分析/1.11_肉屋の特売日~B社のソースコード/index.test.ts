describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      value | expected
      ${1}  | ${20}
      ${2}  | ${20}
      ${3}  | ${20}
      ${4}  | ${20}
      ${5}  | ${20}
      ${28} | ${20}
      ${29} | ${20}
      ${30} | ${20}
      ${10} | ${0}
    `(
      "テストデータ $value の場合、割引率 $expected % と表示されること",
      ({ value, expected }) => {}
    );
  });
});
