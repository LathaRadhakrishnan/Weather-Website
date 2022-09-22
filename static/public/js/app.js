// const { response } = require("express")
console.log('The client side javascript file is loaded')
fetch('http://puzzle.mead.io/puzzle').then((response)=>
{
    response.json().then((data)=>{
        console.log(data)

    })
})
fetch('http://localhost:3000/weather?address=boston').then((response)=>
{
    response.json().then((data)=> {
        if(data.error){
            console.log(data.error)
        }
            else {
            console.log(data.forecast)
            }
        })
    })
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageone.textContent="Loading..."
    messagetwo.textContent=''
    console.log(location)   
    fetch('/weather?address='+location).then((response)=>
    {
        response.json().then((data)=> {
            if(data.error){
                messageone.textContent=data.error
            }
                else {
                    messageone.textContent=data.error
                    messagetwo.textContent=data.forecast 
                
                }
            })
        })

})