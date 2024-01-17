const express = require('express');
const sendEmail = require('./utils/sendEmail');

const app = express();
const port = process.env.PORT || 3000;

//set view engine
app.set('view engine', 'ejs');

//serve static files
app.use(express.static('public'));

//pass data from form
app.use(express.urlencoded({ extended: false }));

//route render
app.get('/', (req, res) => {
  res.render('emailform');
});

//route to send email

app.post('/send-email',async (req, res) => {
    const {email,message}=req.body;
    try{

        sendEmail(email,message)
        res.render('emailform',{status:"success",message:"Email has been sent"})
    }catch(err){
        console.log(err);
        res.render('emailform',{status:"faild",message:"error in email sending"})


}})

//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});