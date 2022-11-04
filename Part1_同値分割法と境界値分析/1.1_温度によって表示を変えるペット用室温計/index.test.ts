describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      degree | expected
      ${20.0}  | ${"寒い"}
      ${25.0}  | ${"快適"}
      ${30.0}  | ${"暑い"}
    `("室温$degree度 の場合、$expectedと表示されること", ({degree, expected}) => {});
  });
  describe("境界値分析", () => {
    it.each`
      degree | expected
      ${23.9}  | ${"寒い"}
      ${24.0}  | ${"快適"}
      ${25.9}  | ${"快適"}
      ${26.0}  | ${"暑い"}
    `("室温$degree度 の場合、$expectedと表示されること", ({degree, expected}) => {});
  });
});
