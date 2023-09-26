function getAPi(URL)
{
    // const URL=e.target.value
    // console.log(URL);
    const apiUrl = `http://localhost:3000/api/search?query=${URL}`;

    // axios.get(`/api/search?query=${URL}`)
    axios.get(apiUrl)
    .then(response => {
    const responseData=response.data
    // const responseData = JSON.parse(resultData); // 获取响应数据
    // console.log(responseData);
    if (responseData.includes('"Txt"')) {
    // 使用正则表达式来提取 "Txt" 字段的内容
    const txtContents = responseData.match(/"Txt":"([^"]+)"/g)
        .map(match => match.match(/"Txt":"([^"]+)"/)[1]);

    // 打印Txt内容数组
    // console.log('Txt内容数组:', txtContents);
    const sug_list=txtContents.map(item=>{
        return  `
        <li class="sug">${item}</li>
        `
    }).join('')
    document.querySelector('.dropdown-List').innerHTML=sug_list
    } else {
    console.log('未找到 "Txt" 字段');
    }
    })
    .catch(error => {
    console.error('请求失败:', error);
    });
}
getAPi('')
document.querySelector('.search-btn').addEventListener('input',(e)=>{
    const webAddress=document.querySelector('.item')
    webAddress.href=`https://cn.bing.com/search?q=${e.target.value}`
    getAPi(e.target.value)
})
document.querySelector('.search-btn').addEventListener('keyup',(e)=>{
    // console.log(e.keyCode);
    if(e.keyCode===13)
    {
        document.querySelector('.item').click()
        const inputText=document.querySelector('.search-btn')
        // console.log(inputText.value);
        // inputText.value=''
        document.querySelector('.item').href='https://cn.bing.com/'
    }
   
})
document.querySelector('.item').addEventListener('click',()=>{
    const inputText=document.querySelector('.search-btn')
})
function arrowShift(id){
    if(id==='1')
    {
        const arrow=document.querySelector('.arrow')
        arrow.style.backgroundImage="url('./Images/left.png')"
        console.log('left');
    }
    else if(id==='0')
    {
        const arrow=document.querySelector('.arrow')
        arrow.style.backgroundImage="url('./Images/right.png')"
        console.log('rigth');
    }
}
document.querySelector('.toggle-sidebar').addEventListener('click',(e)=>{
    const  smoothList= document.querySelectorAll('.smooth')
    console.log(smoothList);
    console.log(e.target.id);
    if(e.target.id==='1'){
        e.target.id=0
        e.target.classList.toggle('sidebar-hide')
        e.target.style.left='20px'
    }
    else if(e.target.id==='0'){
        e.target.id=1
        e.target.classList.toggle('sidebar-hide')
        e.target.style.left='0px'
    }
    arrowShift(e.target.id)
    document.querySelector('.sidebar').classList.toggle('sidebar-hide')
    document.querySelectorAll('.LT').forEach(box=>{
        if(!box.classList.contains("directHide"))
        {
            box.classList.add('directHide') 
        }
        console.log(box);
        })
})
document.querySelector('.arrow').addEventListener('click',(e)=>{
    // console.log(e.target.parentNode)
    if(e.target.parentNode.id==='1'){
        e.target.parentNode.id=0
        e.target.parentNode.classList.toggle('sidebar-hide')
        e.target.parentNode.style.left='20px'
    }
    else if(e.target.parentNode.id==='0'){
        e.target.parentNode.id=1
        e.target.parentNode.classList.toggle('sidebar-hide')
        e.target.parentNode.style.left='0px'
    }
    arrowShift(e.target.parentNode.id)
    document.querySelectorAll('.LT').forEach(box=>{
        if(!box.classList.contains("directHide"))
        {
            box.classList.add('directHide') 
        }
        console.log(box);
        })
})
window.addEventListener('scroll',()=>{
    const scrollY=window.scrollY;
    console.log(scrollY);
    const scrollThreshold = 1335;
    if(scrollY>scrollThreshold)
    {
        document.querySelector('.toggle-sidebar').style.width=0
        document.querySelector('.sidebar').style.display='none'
    }
    else{
        document.querySelector('.toggle-sidebar').style.width='240px'
        document.querySelector('.sidebar').style.display=''
    }
})
const targetSearch=document.querySelector('.search-btn')
const sidebarLinks=document.querySelectorAll('.smooth')
sidebarLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        // e.preventDefault()
        e.stopPropagation();
        document.querySelectorAll('.LT').forEach(box=>{
            if(!box.classList.contains("directHide"))
            {
                box.classList.add('directHide') 
            }
            console.log(box);
            })
        e.target.classList.remove('directHide')
    })
    
    
})
document.querySelector('.item1').addEventListener('click',()=>{
        // let j=document.querySelector('.wallPaper-toggle').classList.contains("directHide")
            // console.log(j);
        // if(!j)
        // {
        //     document.querySelector('.wallPaper-toggle').classList.add('directHide')
        // }
        document.querySelector('.wallPaper-toggle').classList.toggle('directHide')

})
document.querySelector('.item2').addEventListener('click',()=>{
    // let j=document.querySelector('.wallPaper-toggle').classList.contains("directHide")
        // console.log(j);
    // if(!j)
    // {
    //     document.querySelector('.wallPaper-toggle').classList.add('directHide')
    // }
    document.querySelector('.Chat').classList.toggle('directHide')

})
document.addEventListener('click',(e)=>{
    if(e.target!="LT")
    {
        document.querySelectorAll('.LT').forEach(box=>{
            if(!box.classList.contains("directHide"))
            {
                box.classList.add('directHide') 
            }
            // console.log(box);
            })
    }
    if(e.target===targetSearch)
    {
        // console.log('www');
        targetSearch.parentNode.style.width='550px'
    }
    else{
        targetSearch.parentNode.style.width=''
    }
    // if(e.target.className==='content' || e.target.className==='smooth' || e.target.id==='1' ||e.target.className==='toggle-sidebar' || e.target.className==='toggle-sidebar sidebar-hide' ||e.target.className==='arrow')
    // {
    //     if ( e.target.className==='content' || e.target.className==='toggle-sidebar' || e.target.className==='toggle-sidebar sidebar-hide' ||e.target.className==='arrow') {
    //         let j=document.querySelector('.wallPaper-toggle').classList.contains("directHide")
    //         // console.log(j);
    //         if(!j)
    //         {
    //             document.querySelector('.wallPaper-toggle').classList.add('directHide')
    //         }
    //     }
    //     else
    //     {
    //         document.querySelector('.wallPaper-toggle').classList.toggle('directHide')
    //     }   

    // }
    if(e.target.className==='content' || e.target.className==="search-btn")
    {
        if ( e.target.className==='content') {
            let j=document.querySelector('.dropdown').classList.contains("directHide")
            // console.log(j)
            if(!j)
            {
                document.querySelector('.dropdown').classList.add('directHide')
            }
        }
        else if(e.target.className==='search-btn')
        {
            // document.querySelector('.dropdown').classList.toggle('directHide')
            let j=document.querySelector('.dropdown').classList.contains("directHide")
            // console.log(j)
            if(j)
            {
                document.querySelector('.dropdown').classList.remove('directHide')
            }
        }   

    }
    if (e.target.className==='wallPaperBox') {
        const id=e.target.id.match(/\d+/g)
        console.log(id);
        document.body.style.backgroundImage = `url(../Images/wallPaper${id-1}.png)`;
        const newBackgroundImage = `../Images/wallPaper${id-1}.png`;
        localStorage.setItem("backgroundImage", newBackgroundImage);
        document.body.style.backgroundImage=`url(${newBackgroundImage})`
    }
    if (e.target.className==='sug')
    {
        window.open(`https://cn.bing.com/search?q=${e.target.innerHTML}`);
    }
    // console.log(e.target);
})
const savedBackgroundImage = localStorage.getItem("backgroundImage");
if (savedBackgroundImage) {
    document.body.style.backgroundImage = `url(${savedBackgroundImage})`;
}
// document.querySelector('.smooth').addEventListener('click',(e)=>{
//     // if(e.target.id==='1')
//     // {
//     //     const newBackgroundImage = "./Images/bg2.png";
//     //     document.body.style.backgroundImage=`url(${newBackgroundImage})`
//     //     document.body.style.backgroundRepeat='no-repeat'
//     //     document.body.style.backgroundSize='cover'
//     //     localStorage.setItem("backgroundImage", newBackgroundImage);
//     // }
    
// })
// const savedBackgroundImage = localStorage.getItem("backgroundImage");
// document.querySelector('.smooth').addEventListener('click',(e)=>{
//     // document.body.style.backgroundImage="url('./Images/bg2.png')"
// })
// document.querySelectorAll('.wallPaperBox').style.backgroundColor="red"
const pic=document.querySelectorAll('.wallPaperBox')
const picNum=document.querySelector('.wallPaperUl').getElementsByTagName("li").length
console.log(picNum);
for (let i=0; i<picNum; i++)
{
    pic[i].style.backgroundImage=`url(../Images/wallPaper${i}.png)`
}