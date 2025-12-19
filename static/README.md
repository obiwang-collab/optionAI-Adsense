# PWA 靜態檔案說明

本資料夾包含 Progressive Web App (PWA) 所需的核心檔案

## 📁 檔案清單

### manifest.json
- **用途**：PWA 應用程式配置檔
- **功能**：定義應用名稱、圖標、顯示模式、主題顏色等
- **必要性**：✅ 必須（PWA 核心檔案）

### sw.js
- **用途**：Service Worker 腳本
- **功能**：提供離線緩存、背景同步、推送通知
- **必要性**：✅ 必須（實現離線功能）

### icon-192.png
- **尺寸**：192 x 192 像素
- **用途**：應用圖標（小）
- **使用場景**：Android 桌面快捷方式、通知圖示

### icon-512.png
- **尺寸**：512 x 512 像素
- **用途**：應用圖標（大）
- **使用場景**：啟動畫面、高解析度螢幕

## 📱 如何安裝到手機

### Android (Chrome)
1. 使用 Chrome 瀏覽器開啟網站
2. 點擊右上角選單「⋮」
3. 選擇「**安裝應用程式**」或「**加到主畫面**」

### iOS (Safari)
1. 使用 Safari 開啟網站
2. 點擊底部分享按鈕「📤」
3. 選擇「**加入主畫面螢幕**」

## ✨ PWA 功能特色

- 📱 可安裝到手機桌面，像原生 App 一樣使用
- ⚡ 快速載入（使用緩存技術）
- 📴 部分離線功能（可查看已緩存的數據）
- 🎨 自訂主題色彩（#FF4B4B）
- 🔔 支援推送通知（可選功能）

## 🔗 相關文件

- [Web.dev PWA 指南](https://web.dev/progressive-web-apps/)
- [MDN Manifest 文件](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## 📝 更新日期

2025年12月19日 - 初次建立 PWA 支援
