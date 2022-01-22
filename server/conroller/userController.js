const Users = require('../model/users')

const createUser = async(req,res)=>{
    const user = new Users(req.body) 

    try{
        console.log('hi');
        const result = await user.save()
        console.log(result);
        return res.status(201).send(result)
    }
    catch(e){
        return res.status(500).send( e)
    }
}

const getUsers = async(req, res)=>{
    try{
        const users = await Users.find({})
        return res.status(201).send(users)
    }
    catch(e){
        return res.status(500).send(e)
    }
}

const getUser = async (req, res) => {
    const passportId = req.params.passportId;
    try {
        const findUser = await Users.findOne({ passportId });
        if (!findUser) {
            return res.status(404).send();
        }

        res.status(200).send(findUser);
    } catch (err) {
        res.status(404).send(err);
    }
}

const deposit = async(req, res)=>{
    const passportId = req.params.passportId;
    const cash = req.body.cash
    console.log(req.body);
    try {
        if (!cash || cash < 0) {
            throw new Error('Invalid input data')
        }
        const findUser = await Users.findOneAndUpdate({ passportId: passportId },
             {$inc:{cash:cash }}, 
             { new: true })
        if(!findUser){
            return res.status(404).send("user not found");
        }
        res.status(200).send(findUser);
    }
    catch(e){
        res.status(500).send(e);
    }
}

const credit = async(req, res)=>{
    const passportId = req.params.passportId;
    const amount = req.body.amount
    try {
        if (!amount || amount < 0) {
            throw new Error('Invalid input data')
        }
        const findUser = await Users.findOneAndUpdate(
            { passportId: passportId }, 
            {credit:amount },
             { new: true })
        if(!findUser){
            return res.status(404).send("user not found");
        }
        res.status(200).send(findUser);
    }
    catch(e){
        res.status(500).send(e);
    }
}
const Withdraw= async(req, res)=>{
    const passportId = req.params.passportId;
    const amount = req.body.amount
        try {
          if (amount < 0) {
            throw Error("amount should be positive");
          }
          let findUser = await Users.findOne({ passportId: passportId });
          if (!findUser) {
            res.status(404).send("user not found");
          }
      
          if (findUser.cash + findUser.credit < amount) {
           res.send(400).send("no enough money to withdraw.");
          }

          findUser = await Users.findOneAndUpdate({ passportId: passportId }, { $inc: { cash: -amount } }, { new: true });
          res.send(findUser);
        } catch (e) {
          res.status(500).send(e);
        }   
}

 const transfer = async(req, res)=>{
    const passportId = req.params.passportId;
    const amount = req.body.amount
    const reciver = req.body.reciver
    try{
        if(amount < 0){
            throw Error("amount should be positive");
        }
        let findUser = await Users.findOne({ passportId: passportId })
        if (!findUser) {
            res.status(404).send("user not found");
          }

          let findReciver = await Users.findOne({ passportId: reciver })
          if (!findReciver) {
              res.status(404).send("user not found");
            }

            if (findUser.cash + findUser.credit < amount) {
                res.send(400).send("no enough money to transfer.");
               }
     
               findUser = await Users.findOneAndUpdate(
                   { passportId: passportId },
                    { $inc: { cash: -amount } }, 
                    { new: true });
            

               findReciver = await Users.findOneAndUpdate(
                   { passportId: passportId },
                    { $inc: { cash: amount } }, 
                    { new: true });

      res.send({findReciver, findUser})

    }
    catch(e){
        res.status(500).send(e);

    }

}

module.exports = {
 createUser,
 getUsers , 
 getUser, 
 deposit, 
 credit, 
 Withdraw, 
 transfer

}