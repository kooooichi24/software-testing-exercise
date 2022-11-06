describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      value  | expected
      ${-10} | ${"-"}
      ${3}   | ${"無料"}
      ${10}  | ${"500円"}
      ${15}  | ${"1000円"}
      ${20}  | ${"1500円"}
      ${150} | ${"-"}
    `(
      "年齢 $value歳 の場合、入園料金 $expected と表示されること",
      ({ value, expected }) => {}
    );
  });
  describe("境界値分析", () => {
    it.each`
      value  | expected
      ${-1}  | ${"-"}
      ${0}   | ${"無料"}
      ${5}   | ${"無料"}
      ${6}   | ${"500円"}
      ${12}  | ${"500円"}
      ${13}  | ${"1000円"}
      ${17}  | ${"1000円"}
      ${18}  | ${"1500円"}
      ${120} | ${"1500円"}
      ${121} | ${"-"}
    `(
      "年齢 $value歳 の場合、入園料金 $expected と表示されること",
      ({ value, expected }) => {}
    );
  });
});
