const nodeMailer = require('nodemailer');

const sendEmail=async (to,messageContent)=>{
    try{
        //create transorter 
        const transporter = nodeMailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            auth:{
                user:'muhammedshamil470@gmail.com',
                pass:'vknz ojmb mcrv jeza'
            }
        })
        // message obj
        const message = {
            to,
            subject:'Test Email',
            html:`
            <h3>Test Email you have recived</h3>
            <p>${messageContent}</p>
            
            `
        }
        // send ther email
        const info=await transporter.sendMail(message)
        console.log("msg sent",info.messageId);
    }catch(err){
        console.log(err);
        throw new Error("Email could not be sent")
    }
}
module.exports=sendEmail;