# Gojuon — 日文50音學習 PWA 設計文件

## 概述

行動優先的日文50音學習 PWA，使用卡片記憶法搭配間隔重複算法（SRS）進行學習。

## 技術棧

- React 19 + TypeScript + Vite
- PWA: vite-plugin-pwa + Workbox
- 儲存: IndexedDB（原生 API）
- SRS: SM-2 算法（純函式）
- 樣式: CSS Modules + CSS 自訂屬性

## 架構決策

### 為何不使用 React Router
4頁 SPA 用純 state 管理即可，避免引入不必要依賴。

### 為何不使用第三方 IndexedDB 函式庫
原生 API 足夠，避免額外套件重量。

### SM-2 算法
業界標準間隔重複算法，已驗證有效性。

## 資料流

1. 應用啟動 → useDB() 初始化 IndexedDB，seedCardsIfEmpty() 填入初始資料
2. 學習/測驗 → useDueCards() 取得到期卡片隊列
3. 答題後 → useProgress.submitReview(quality) → SM-2 計算 → upsert IndexedDB
4. 進度頁 → 讀取所有 progress records → 依 cardId 對應熟練度顯示

## 熟練度等級

| reps | 顏色 | 說明 |
|------|------|------|
| 0    | 灰色 | 未學習 |
| 1    | 紅色 | 學習中 |
| 2    | 黃色 | 熟悉中 |
| 3    | 淡綠 | 已掌握 |
| 4+   | 深綠 | 精通 |
