describe("回答", () => {
  describe("同値分割法", () => {
    it.each`
      value    | expected
      ${0.0}   | ${"エラー"}
      ${15.0}  | ${"痩せ"}
      ${20.0}  | ${"普通体重"}
      ${27.0}  | ${"前肥満"}
      ${32.0}  | ${"肥満(1度)"}
      ${37.0}  | ${"肥満(2度)"}
      ${42.0}  | ${"肥満(3度)"}
      ${150.0} | ${"エラー"}
    `(
      "BMI指数 $value の場合、栄養状態 $expected と表示されること",
      ({ value, expected }) => {}
    );
  });
  describe("境界値分析", () => {
    it.each`
      value    | expected
      ${0.0}   | ${"エラー"}
      ${0.1}   | ${"痩せ"}
      ${18.4}  | ${"痩せ"}
      ${18.5}  | ${"普通体重"}
      ${24.9}  | ${"普通体重"}
      ${25.0}  | ${"前肥満"}
      ${29.9}  | ${"前肥満"}
      ${30.0}  | ${"肥満(1度)"}
      ${34.9}  | ${"肥満(1度)"}
      ${35.0}  | ${"肥満(2度)"}
      ${39.9}  | ${"肥満(2度)"}
      ${40.0}  | ${"肥満(3度)"}
      ${99.9}  | ${"肥満(3度)"}
      ${100.0} | ${"エラー"}
    `(
      "BMI指数 $value の場合、栄養状態 $expected と表示されること",
      ({ value, expected }) => {}
    );
  });
});
