
console.log
const path=require('path')
const express=require('express')
const app=express()
const hbs = require('hbs');
const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecsat')

console.log(__dirname)
console.log(path.join(__dirname,'/template'))
const publicDitrec=path.join(__dirname,'/static/public')

app.use(express.static(publicDitrec))

const viewpath=path.join(__dirname,'/template/views')
const partialpath=path.join(__dirname,'/template/partials')
hbs.registerPartials(partialpath)

app.set('view engine',"hbs")
app.set('views',viewpath)

app.get('',(req,res)=>{
    res.render('index',{
       title:'index page',
       name:'Latha' 
    });
})
app.get('/about',(req,res)=>{
    res.render('about',{
       title:'About page',
       name:'Latha' 
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
       helptext:'Help page'   
    });
})

// app.get('/*',(req,res)=>{
//     res.render('404',{
//         errormessage:'404 Page Not found'   
//      });
    
// })



// app.get('/help',(req,res)=>
// {
//     res.send([
//         {
//             name:'Latha',
//             age:27
//         },
//         {
//             name:'Radha',
//             age:23
//         }
//     ])
// })

// app.get('/about',(req,res)=>
// {
//     res.send('<h1> About Page</h1>')
// })

app.get('/weather',(req,res)=>{
    const address=req.query.address
    if(!address)
    {
        return res.send('please provide an address')
    }
    else{
        geocode(address,(error,data)=>
        {
            if(error){
                return  res.send({error})
            }
        forecast(data.latt,data.lon,(error,forecastData)=>
        {
            if(error){
                return  res.send({error})
            }
            console.log(forecastData)
            res.send({
                            forecast:forecastData,
                            address:req.query.address
                        })        }
        )
        })  
    }
    








// if(address){   
//         return res.send({
//             error:'You must provide an address'
//         })
// }
//   geocode(address,(error,{data})=>{
   
//     if(error){
//         return res.send({error})
//     }
   
//     forecast(data.latt,data.lon,(error,forecastData)=>
//     {
//         if(error){
//             return res.send({error})
//         }
//         res.send({
//             forecast:forecastData,
//             address:req.query.address
//         })   
//     })
//  })   
  
})
















app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send('Pleae provide an valid address')
    }
    else{
        res.send({
            products:[]
        })
    }
}
)



app.listen(3000,()=>
{
    console.log('Your sever is starting up')
})
