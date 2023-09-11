const begin=document.querySelector('.begin')
const content=document.querySelector('.content')
const game=document.querySelector('.game')
let words=[
    '爱',
    '乐',
    '每天笑哈哈',
    'T-Rex',
    '大哥',
    '哈哈,敲完这个你就输了,信不信？'
]
const btn_set=document.querySelector('.btn-set')
btn_set.addEventListener('click',()=>document.querySelector('.setting').classList.toggle('hide'))
function Modal(score)
{
    this.score=score
    this.modalBox=document.createElement('div')
    this.modalBox.className='modal'
    this.modalBox.innerHTML=`
    <div class="reword">恭喜你，最终得分为${score}分！</div>
    <button class="back">返回</button>`
}
Modal.prototype.open=function()
{
    if(!document.querySelector('.modal'))
    {
        document.body.appendChild(this.modalBox)
        this.modalBox.querySelector('button').addEventListener('click',()=>{
            this.close()
            game.style.display='none '  
            content.style.display='block'
        })
    }
}
Modal.prototype.close=function(){
    document.body.removeChild(this.modalBox)
}
let i=10
function timed()
{
    i--  
    // console.log(11);
    time.innerHTML=`${i}秒`
    if(i===0)
    {
        clearInterval(timeId)
        // alert('game over!')
        // console.log('a'); 
        // alert('游戏结束')
        const m=new Modal(`${score}`)
        m.open()
        score=0
        S.innerHTML=0
    }
    
}
let timeId=0
let words_1=[]
console.log(words_1 )
begin.addEventListener("click",function(){
    content.style.display='none'
    game.style.display='block'
    i=10
    time.innerHTML=`${i}秒`
    timeId=setInterval(timed,1000)
})
const answer=document.querySelector('.answer')
const text=document.querySelector('.text')
let score=0
const S=document.querySelector('.message .score span')
const time=document.querySelector('.message .time span')


answer.addEventListener('input',function(e)
{   
    let random=0
    const ipt=answer.value
    const ans=text.innerHTML
    if(ipt===ans)
    {
        score++
        i=i+3
        S.innerHTML= `${score}`
        if(words.length===0)
        {
            words=words_1
            console.log(words_1)
        }
        random=Math.floor(Math.random()*words.length)
        text.innerHTML=words[random]
        words_1.push(words[random])
        words.splice(random,1)
        answer.value=''
    }

})
