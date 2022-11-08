describe("回答", () => {
  describe("盾のみ装備している状態", () => {
    describe("同値分割法", () => {
      it.each`
        value             | expected
        ${"けやきの棒"}   | ${true}
        ${"きこりの大斧"} | ${false}
      `(
        "装備 $value の場合、メッセージ表示有無が $expected であること",
        ({ value, expected }) => {}
      );
    });
  });
});
