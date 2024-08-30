const express =require("express")
const {registerUser, loginUser, findUser, getUsers}=require("../Controllers/userController")

const router=express.Router();

router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get('/', async (req, res) => {
    try {
      const allusers = await getUsers.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
module.exports =router; 