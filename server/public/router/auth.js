const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

// using promises
//router.post('/register', (req, res) => {

// const { name, email, phone, password, cpassword} = req.body;

//  if (!name || !email || !phone || !password || !cpassword) {
//  return res.status(422).json({error:"Please fill the field properly"}); 
//  }

//   User.findOne({email: email})
//   .then((userExist) => {
//       if(userExist) {
//       return res.status(422).json({error:"Email already Exist"})
//       }

//      const user = new User({name, email, phone, password, cpassword});

//      user.save().then(() => {
//           res.status(201).json({message:"User registered successfully"});
//       }).catch((err) => res.status(500).json({error: "Failed to register"}));
//   }).catch(err => { console.log(err);});
// });

// Async-Await
router.post('/register', async(req, res) => {

 const { name, email, phone, password, cpassword} = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
      return res.status(422).json({error:"Please fill the field properly"}); 
  }

  try{
    const response = await User.findOne({email: email});

    if(userExist) {
        return res.status(422).json({error:"Email already Exist"}); 
    }

    const user = new User({name, email, phone, password, cpassword});

    await user.save();

    res.status(201).json({message:"User registered successfully"});
    } 


   catch (err) { 
      console.log(err);
  }   

});

// login route

router.post('/signin' , async(req, res) => {
    try{
        const { email, password} = req.body;

        if(!email || !password ) {
            return res.status(400).json({error:"Please fill the required data"})
        }
        
        const userLogin = await User.findOne({ email: email });

        console.log(userLogin);

        if(!userLogin) {
            res.status(400).json({error:"User error"});
        } else {
            res.json({message:"User signed in successfully"});

        }
        

    } catch (err) {
        console.log(err);

    }

});

module.exports = router;