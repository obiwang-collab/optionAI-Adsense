# Railway 環境變數修正版本

## 📝 修改內容

已將程式碼從 Streamlit Cloud 的 `st.secrets` 改為 Railway 相容的 `os.environ`。

### 主要改動:

**舊版 (Streamlit Cloud):**
```python
try:
    GEMINI_KEY = st.secrets.get("GEMINI_API_KEY", "")
    OPENAI_KEY = st.secrets.get("OPENAI_API_KEY", "")
except FileNotFoundError:
    GEMINI_KEY = ""
    OPENAI_KEY = ""
```

**新版 (Railway 相容):**
```python
import os

GEMINI_KEY = os.environ.get("GEMINI_API_KEY", "")
OPENAI_KEY = os.environ.get("OPENAI_API_KEY", "")
```

---

## 🚀 部署步驟

### 1. 上傳到 GitHub

將 `streamlit_app.py` 上傳到你的 GitHub repo 根目錄，覆蓋原本的主程式檔案。

**重要**: 確認你的主程式檔名是什麼:
- 如果是 `streamlit_app.py` → 直接覆蓋
- 如果是其他名字 → 把這個檔案改名為你的主程式檔名

### 2. Commit & Push

```bash
git add streamlit_app.py  # 或你的主程式檔名
git commit -m "Fix: Use environment variables for Railway"
git push
```

### 3. Railway 自動部署

Railway 會自動偵測到變更並重新部署，大約 2-3 分鐘。

### 4. 確認環境變數

在 Railway → Variables 標籤確認有:
```
GEMINI_API_KEY = 你的金鑰
OPENAI_API_KEY = 你的金鑰
PORT = 8501
```

---

## ✅ 修正後的效果

- ✅ 錯誤訊息消失
- ✅ AI 分析功能正常運作
- ✅ Gemini 和 ChatGPT 都能使用
- ✅ 程式可以正確讀取 API 金鑰

---

## 🔍 檢查清單

部署後請確認:

```
□ 網站可以正常開啟 (https://www.twoption-ai.com)
□ 沒有錯誤訊息
□ 選擇權圖表正常顯示
□ AI 分析按鈕可以點擊
□ Gemini 分析功能正常
□ ChatGPT 分析功能正常
□ 所有頁面都能訪問
```

---

## 💡 說明

這個修改讓程式:
1. 從環境變數讀取 API 金鑰
2. 不再依賴 `st.secrets` 和 `.streamlit/secrets.toml`
3. 完全相容 Railway 部署環境
4. 也可以在本地開發時使用環境變數

---

**立即上傳到 GitHub，讓 Railway 重新部署!**
