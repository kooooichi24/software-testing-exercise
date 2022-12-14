describe("回答", () => {
  describe("60サイズのケース", () => {
    it.each`
      value1 | value2 | expected
      ${0}   | ${0}   | ${"60サイズ"}
      ${0}   | ${1}   | ${"60サイズ"}
      ${0}   | ${2}   | ${"60サイズ"}
      ${30}  | ${0}   | ${"60サイズ"}
      ${30}  | ${1}   | ${"60サイズ"}
      ${30}  | ${2}   | ${"60サイズ"}
      ${60}  | ${0}   | ${"60サイズ"}
      ${60}  | ${1}   | ${"60サイズ"}
      ${60}  | ${2}   | ${"60サイズ"}
    `(
      "3辺合計 $value1 cm 、重量 $value2 kg の場合、荷物サイズ $expected と表示されること",
      () => {}
    );
  });

  describe("80サイズのケース", () => {
    it.each`
      value1 | value2 | expected
      ${0}   | ${61}  | ${"60サイズ"}
      ${0}   | ${70}  | ${"60サイズ"}
      ${0}   | ${80}  | ${"60サイズ"}
      ${30}  | ${61}  | ${"60サイズ"}
      ${30}  | ${70}  | ${"60サイズ"}
      ${30}  | ${80}  | ${"60サイズ"}
      ${60}  | ${61}  | ${"60サイズ"}
      ${60}  | ${70}  | ${"60サイズ"}
      ${60}  | ${80}  | ${"60サイズ"}
      ${61}  | ${0}   | ${"80サイズ"}
      ${61}  | ${1}   | ${"80サイズ"}
      ${61}  | ${2}   | ${"80サイズ"}
      ${61}  | ${3}   | ${"80サイズ"}
      ${61}  | ${4}   | ${"80サイズ"}
      ${61}  | ${5}   | ${"80サイズ"}
      ${70}  | ${0}   | ${"80サイズ"}
      ${70}  | ${1}   | ${"80サイズ"}
      ${70}  | ${2}   | ${"80サイズ"}
      ${70}  | ${3}   | ${"80サイズ"}
      ${70}  | ${4}   | ${"80サイズ"}
      ${70}  | ${5}   | ${"80サイズ"}
      ${80}  | ${0}   | ${"80サイズ"}
      ${80}  | ${1}   | ${"80サイズ"}
      ${80}  | ${2}   | ${"80サイズ"}
      ${80}  | ${3}   | ${"80サイズ"}
      ${80}  | ${4}   | ${"80サイズ"}
      ${80}  | ${5}   | ${"80サイズ"}
    `(
      "3辺合計 $value1 cm 、重量 $value2 kg の場合、荷物サイズ $expected と表示されること",
      () => {}
    );
  });

  describe("100サイズのケース", () => {
    it.each`
      value1 | value2 | expected
      ${0}   | ${6}   | ${"60サイズ"}
      ${0}   | ${8}   | ${"60サイズ"}
      ${0}   | ${10}  | ${"60サイズ"}
      ${30}  | ${6}   | ${"60サイズ"}
      ${30}  | ${8}   | ${"60サイズ"}
      ${30}  | ${10}  | ${"60サイズ"}
      ${60}  | ${6}   | ${"60サイズ"}
      ${60}  | ${8}   | ${"60サイズ"}
      ${60}  | ${10}  | ${"60サイズ"}
      ${61}  | ${6}   | ${"60サイズ"}
      ${61}  | ${8}   | ${"60サイズ"}
      ${61}  | ${10}  | ${"60サイズ"}
      ${70}  | ${6}   | ${"60サイズ"}
      ${70}  | ${8}   | ${"60サイズ"}
      ${70}  | ${10}  | ${"60サイズ"}
      ${80}  | ${6}   | ${"60サイズ"}
      ${80}  | ${8}   | ${"60サイズ"}
      ${80}  | ${10}  | ${"60サイズ"}
      ${81}  | ${0}   | ${"100サイズ"}
      ${81}  | ${1}   | ${"100サイズ"}
      ${81}  | ${2}   | ${"100サイズ"}
      ${81}  | ${3}   | ${"100サイズ"}
      ${81}  | ${4}   | ${"100サイズ"}
      ${81}  | ${5}   | ${"100サイズ"}
      ${81}  | ${6}   | ${"100サイズ"}
      ${81}  | ${8}   | ${"100サイズ"}
      ${81}  | ${10}  | ${"100サイズ"}
      ${90}  | ${0}   | ${"100サイズ"}
      ${90}  | ${1}   | ${"100サイズ"}
      ${90}  | ${2}   | ${"100サイズ"}
      ${90}  | ${3}   | ${"100サイズ"}
      ${90}  | ${4}   | ${"100サイズ"}
      ${90}  | ${5}   | ${"100サイズ"}
      ${100} | ${6}   | ${"100サイズ"}
      ${100} | ${8}   | ${"100サイズ"}
      ${100} | ${10}  | ${"100サイズ"}
      ${100} | ${0}   | ${"100サイズ"}
      ${100} | ${1}   | ${"100サイズ"}
      ${100} | ${2}   | ${"100サイズ"}
      ${100} | ${3}   | ${"100サイズ"}
      ${100} | ${4}   | ${"100サイズ"}
      ${100} | ${5}   | ${"100サイズ"}
      ${100} | ${6}   | ${"100サイズ"}
      ${100} | ${8}   | ${"100サイズ"}
      ${100} | ${10}  | ${"100サイズ"}
    `(
      "3辺合計 $value1 cm 、重量 $value2 kg の場合、荷物サイズ $expected と表示されること",
      () => {}
    );
  });

  describe("エラーのケース", () => {
    it.each`
      value1 | value2 | expected
      ${0}   | ${11}  | ${"エラー"}
      ${0}   | ${15}  | ${"エラー"}
      ${30}  | ${11}  | ${"エラー"}
      ${30}  | ${15}  | ${"エラー"}
      ${60}  | ${11}  | ${"エラー"}
      ${60}  | ${15}  | ${"エラー"}
      ${61}  | ${11}  | ${"エラー"}
      ${61}  | ${15}  | ${"エラー"}
      ${70}  | ${11}  | ${"エラー"}
      ${70}  | ${15}  | ${"エラー"}
      ${80}  | ${11}  | ${"エラー"}
      ${80}  | ${15}  | ${"エラー"}
      ${81}  | ${11}  | ${"エラー"}
      ${81}  | ${15}  | ${"エラー"}
      ${90}  | ${11}  | ${"エラー"}
      ${90}  | ${15}  | ${"エラー"}
      ${100} | ${11}  | ${"エラー"}
      ${100} | ${15}  | ${"エラー"}
      ${101} | ${0}   | ${"エラー"}
      ${110} | ${0}   | ${"エラー"}
      ${101} | ${1}   | ${"エラー"}
      ${110} | ${1}   | ${"エラー"}
      ${101} | ${2}   | ${"エラー"}
      ${110} | ${2}   | ${"エラー"}
      ${101} | ${3}   | ${"エラー"}
      ${110} | ${3}   | ${"エラー"}
      ${101} | ${4}   | ${"エラー"}
      ${110} | ${4}   | ${"エラー"}
      ${101} | ${5}   | ${"エラー"}
      ${110} | ${5}   | ${"エラー"}
      ${101} | ${6}   | ${"エラー"}
      ${110} | ${6}   | ${"エラー"}
      ${101} | ${8}   | ${"エラー"}
      ${110} | ${8}   | ${"エラー"}
      ${101} | ${10}  | ${"エラー"}
      ${110} | ${10}  | ${"エラー"}
      ${101} | ${11}  | ${"エラー"}
      ${110} | ${11}  | ${"エラー"}
      ${101} | ${15}  | ${"エラー"}
      ${110} | ${15}  | ${"エラー"}
    `(
      "3辺合計 $value1 cm 、重量 $value2 kg の場合、荷物サイズ $expected と表示されること",
      () => {}
    );
  });
});
