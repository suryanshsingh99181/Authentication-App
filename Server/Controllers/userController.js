const userModel=require("../Models/userModel")
const bcrypt=require("bcrypt")
const validator=require("validator")
const jwt=require("jsonwebtoken")
const { decrypt } = require("dotenv")

const createToken=(_id)=>{
    const jwtkey=process.env.JWT_SECRET_KEY;

    return jwt.sign({_id},jwtkey,{expiresIn: "3d"})
}

const registerUser = async(req,res)=>{
    try{
    const {name, email, password} = req.body

    let user=await userModel.findOne({email});

    if(user) return res.status(400).json("User with given email already exist...");

    if(!name || !email || !password)return res.status(400).json("All fields are required");

    if(!validator.isEmail(email)) return res.status(400).json("Email must be a valid email");

    if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be a strong password");

    user= new userModel({name, email, password})

    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(user.password,salt)

    await user.save()

    const token=createToken(user._id)

    res.status(200).json({_id: user._id, name,email,token})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const loginUser= async(req,res)=>{
    const {email, password}=req.body;

    try{
        let user=await userModel.findOne({email})

        if(!user) return res.status(400).json("Invalid Email or Password");
        
        const isValidPassword=await bcrypt.compare(password, user.password);

        if(!isValidPassword) return res.status(400).json("Invalid Email or Password")

            const token=createToken(user._id)

            res.status(200).json({_id: user._id, name: user.name, email, token})
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

//     const loginUser= async (req, res) => {
//     const {email, password } = req.body;
    
//     try {
//       const userExists = await userModel.findOne({ email });
//       if (userExists) return res.status(400).json({ message: 'User already exists' });
  
//       const hashedPassword = await bcrypt.hash(password, 12);
//       const user = new user({ username, email, password: hashedPassword });
//       await user.save();
  
//       const token = jwt.sign({ id: user._id }, 'supersecretkey9939493', { expiresIn: '1h' });
//       res.status(201).json({ token });
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   };

const findUser=async(req,res)=>{
    const userId=req.params.userId;
    try{
        const user=await userModel.findById(userId)

        res.status(200).json(user);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const getUsers=async(req,res)=>{
    
    try{
        const users=await userModel.find()

        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports={registerUser, loginUser, findUser,getUsers};