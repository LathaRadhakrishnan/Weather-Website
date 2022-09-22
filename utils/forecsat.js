const request=require('request')
const forecast=(lattitude,longitude,callback)=>
{

    const url='http://api.weatherapi.com/v1/current.json?key=b7522da137e54b26a9184919221509 &q=' +lattitude+','+longitude+'&aqi=no'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to internet connection',undefined)
        }
        else
         if(response.body.error)
        {
            callback('Please provide valid parameters',undefined)
        }
    
    else{
        callback(undefined,'It is currently\t'+response.body.current.temp_f+'degress out.But there is a \t'+response.body.current.precip_mm +'% chance of rain')  
    }
          
    })
}
module.exports=forecast

