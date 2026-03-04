# ごじゅうおん — 日文50音學習 PWA

行動優先的日文平假名學習應用，使用間隔重複算法（SM-2）輔助記憶，旅行主題例句加深印象。

## 功能

- **フラッシュカード** — CSS 3D 翻轉動畫，答題後記錄熟練度
- **クイズ** — 選擇題與輸入題交替出現
- **進捗グリッド** — 50音方格熟練度視覺化（5色等級）
- **離線可用** — PWA + Workbox Service Worker
- **本地儲存** — IndexedDB，無需登入

## 快速開始

```bash
pnpm install
pnpm dev       # 開發伺服器 http://localhost:5173
pnpm build     # 生產建置
```

## 技術棧

| 層次 | 技術 |
|------|------|
| 框架 | React 19 + TypeScript + Vite |
| PWA | vite-plugin-pwa + Workbox |
| 儲存 | IndexedDB（原生 API） |
| SRS | SM-2 算法（純函式） |
| 樣式 | CSS Modules + CSS 自訂屬性 |
| 路由 | 純 state（無 React Router） |

## 熟練度等級

| 等級 | 顏色 | 條件 |
|------|------|------|
| 未學習 | 灰 | reps = 0 |
| 學習中 | 紅 | reps = 1 |
| 熟悉中 | 黃 | reps = 2 |
| 已掌握 | 淡綠 | reps = 3 |
| 精通 | 深綠 | reps ≥ 4 |
