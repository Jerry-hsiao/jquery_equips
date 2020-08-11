## 自學動態網頁增刪改查

愛玩遊戲的我試著模擬遊戲裝備設定，使用 jQuery + Node.js 完成前後端分離的動態網頁


## 使用技術
- [HTML]
- [CSS]
- [ES6]
- [jQuery](https://code.jquery.com/jquery-3.4.1.min.js)
- [Node.js](https://nodejs.org/en/)
- [Node.js Express](http://expressjs.com/)
- [Node.js CORS](https://expressjs.com/en/resources/middleware/cors.html)


## 軟體說明-Frontend
透過 ES6 Class 將功能組件化，善用 ES6 集合資料處理如：forEach、filter，透過 ES6 destructor 讓程式宣告俐落提升維護性，使用 ES6 arrow function ，能讓 this 向外尋找避免多餘的定義使其向外取得 this，在 Class 與非同步處理有不錯的效果


## 軟體說明-Backend
使用 Node.js 搭配 express 提供 API 給前端呼叫，並引入 cors 使前端能跨網域呼叫，讓 API 使用更加靈活

## 執行程式

1. 拉取程式
```bash
git clone https://github.com/Jerry-hsiao/jquery_equips.git
```

2. 安裝 Node Package
```bash
npm install
```

3. 啟動應用程式
```bash
npm run start
```

4. 瀏覽器執行
```bash
http://localhost:8802
```

因為使用框網域，也可以在啟動後直接點擊 pratice-equips.html 瀏覽


