const mongoose = require('mongoose');

const uri = "mongodb+srv://aviya:aviyahazan12@cluster0.wuxgk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
//     console.log('connec to database');
// });


//mongodb+srv://aviya:<password>@cluster0.wuxgk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority