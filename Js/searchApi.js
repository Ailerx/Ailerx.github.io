// axios({
//     url:'https://api.bing.com/qsonhs.aspx?type=cb&q=你好',
//     // params:{

//     // }
//     headers: {
//     'Access-Control-Allow-Origin'
//     }
// }).then(result=>{
//     console.log(result);
// })
// let xhr=new XMLHttpRequest();
// xhr.open("GET","https://api.bing.com/qsonhs.aspx?type=cb&q=你好",true);
// xhr.onreadystatechange=function(){
//     if (xhr.readyState===4) {
//         if((xhr.status>=200 && xhr.status<300) || xhr.status===304)
//         {
//             console.log(xhr.response);
//         }
//     }
// }
// xhr.send();
// 导入 Axios 库（如果尚未导入）
// import axios from 'axios';

// 请求 URL
// const apiUrl = 'https://api.bing.com/qsonhs.aspx?type=cb&q=你好';
// const apiUrl = 'http://localhost:3000/api/proxy';
// const URL=document.querySelector('.item').href
// console.log(URL);
// axios.get(apiUrl)
//   .then(response => {
//     const responseData=response.data
//     // const responseData = JSON.parse(resultData); // 获取响应数据
//     console.log(responseData);
//   if (responseData.includes('"Txt"')) {
//     // 使用正则表达式来提取 "Txt" 字段的内容
//     const txtContents = responseData.match(/"Txt":"([^"]+)"/g)
//       .map(match => match.match(/"Txt":"([^"]+)"/)[1]);

//     // 打印Txt内容数组
//     console.log('Txt内容数组:', txtContents);
//     const sug_list=txtContents.map(item=>{
//       return  `
//       <li class="sug">${item}</li>
//       `
//     }).join('')
//     document.querySelector('.dropdown-List').innerHTML=sug_list
//   } else {
//     console.log('未找到 "Txt" 字段');
//   }
//   })
//   .catch(error => {
//     console.error('请求失败:', error);
//   });

