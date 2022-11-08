describe("回答", () => {
  describe("同値分割法(メッセージ)", () => {
    it.each`
      value             | status        | expected
      ${"龍の槍"}       | ${"未強化"}   | ${"武器の攻撃力が上がりました"}
      ${"けやきのぼう"} | ${"-"}        | ${"武器の強化に失敗しました"}
      ${"草薙の剣"}     | ${"強化済み"} | ${"これ以上この武器の強化はできません"}
    `(
      "武器 $value ($status)の場合、メッセージ $expected と表示されること",
      ({ value, expected }) => {}
    );
  });

  describe("同値分割法(攻撃力)", () => {
    it.each`
      value             | status        | expected
      ${"龍の槍"}       | ${"未強化"}   | ${60}
      ${"けやきのぼう"} | ${"-"}        | ${5}
      ${"草薙の剣"}     | ${"強化済み"} | ${90}
    `(
      "武器 $value ($status)の場合、攻撃力が $expected であること",
      ({ value, expected }) => {}
    );
  });
});
