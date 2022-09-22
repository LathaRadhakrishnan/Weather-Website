const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecsat')

const address=process.argv[2]
if(!address)
{
    console.log('please provide an address')
}
else{
    geocode(address,(error,data)=>
    {
        if(error){
            return  console.log(error)
        }
    forecast(data.latt,data.lon,(error,forecastData)=>
    {
        if(error){
            console.log(error)
        }
        console.log(forecastData)
    }
    )
    })  
}


