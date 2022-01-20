const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/BankApi', ()=>{
    console.log('connec to database');
});


//mongodb+srv://aviya:<password>@cluster0.wuxgk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority