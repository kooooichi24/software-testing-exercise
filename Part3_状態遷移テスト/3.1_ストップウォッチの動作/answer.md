# 3.1

## 状態遷移図

```puml
@startuml
hide empty description

[*] --> 計測準備中
計測準備中 : 経過時間の表示 00:00

計測準備中 --> 計測中 : スタートボタン押下
計測中 --> 一時停止中 : スタートボタン押下
一時停止中 --> 計測中 : スタートボタン押下
一時停止中 --> 計測準備中 : リセットボタン押下

@enduml
```

## 状態遷移表

|            | スタートボタン押下 | リセットボタン押下 |
| ---------- | ------------------ | ------------------ |
| 計測準備中 | 計測中             | -                  |
| 計測中     | 一時停止中         | -                  |
| 一時停止中 | 計測中             | 計測準備中         |
