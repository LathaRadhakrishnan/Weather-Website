
const request=require('request')
const geocode=(address,callback)=>
{
    const geocodeurl='http://api.weatherapi.com/v1/current.json?key=b7522da137e54b26a9184919221509 &q='+address+'&aqi=no'
    request({url:geocodeurl,json:true},(error,response)=>{
    // console.log(response.body)
    if(error){
        callback('Unable to connect to internet connection',undefined)
    }
    else if(response.body.error)
    {
        callback('Please provide valid parameters',undefined)
    }
    else{
        callback(undefined,{
        latt:response.body.location.lat,
        lon:response.body.location.lon,
       
        })
    
    }
        
    })
   
}
module.exports=geocode