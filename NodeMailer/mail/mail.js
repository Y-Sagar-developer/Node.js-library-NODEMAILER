const mailer =require("nodemailer")


const transport=mailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"sagaryarra767@gmail.com",
        pass:"uhwr sbzf wnqu jldx"
    }
})

// let mailoptions={
//     from:"sagaryarra767@gmail.com",
//     to:"sagaryarra987@gmail.com",
//     subject:"nodejs task",
//     text:"hello this is sagar",
//     attachments:[{
//         filename:"text",
//         path:"./text"
//     }]

// }
// transport.sendMail(mailoptions,(err,info)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(info)
//     }
// })

module.exports=transport
// console.log(transport)
