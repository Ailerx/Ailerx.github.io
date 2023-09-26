// import axios from 'axios';
// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 3000;

// // 设置代理路由
// app.get('/api/proxy', async (req, res) => {
//   try {
//     // 发送请求到目标服务器
//     const response = await axios.get('https://api.bing.com/qsonhs.aspx?type=cb&q=你好');

//     // 将目标服务器的响应返回给前端
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: '代理请求失败' });
//   }
// });

// app.listen(port, () => {
//   console.log(`代理服务器运行在端口 ${port}`);
// });
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // 引入 cors 模块
const app = express();
const port = 3000;

// 使用 CORS 中间件
app.use(cors());

// 设置代理路由

app.get('/api/search', async (req, res) => {
  try {
    const searchTerm=req.query.query
    // 发送请求到目标服务器
    // console.log(sea);
    const response = await axios.get(`https://api.bing.com/qsonhs.aspx?type=cb&q=${searchTerm}`);

    // 将目标服务器的响应返回给前端
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: '代理请求失败' });
  }
});

app.listen(port, () => {
  console.log(`代理服务器运行在端口 ${port}`);
});
