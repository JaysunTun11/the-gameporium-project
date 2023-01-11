const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator")
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")
//ROUTES//

//create a user


router.post("/Register",validInfo, async(req,res) => {
    try{

        const {name,email,password} = req.body;
        
        
        //check if user exists

        const user = await pool.query("SELECT * FROM users WHERE user_email =$1", [email]);

      
        
        if(user.rows.length!== 0){
            return res.status(401).send("User already exists")//user exists
        }
        //EXIT

        //bcrypt password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt)
        
        // add user to database
        const newUser = await pool.query ("INSERT INTO users (user_name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *", [name, email, bcryptPassword]);

        
        //Generating JWT TOKEN

        const token = jwtGenerator(newUser.rows[0].user_id);
        
        res.json({ token })



    } catch (err){
        console.error(err.message)
    }
})

//login route

router.post("/login", validInfo, async (req, res) => {
    try{
        //1. destructure
        const {email,password} = req.body;

        //2. check if user exists
            const user = await pool.query("SELECT * FROM users WHERE user_email = $1",
            [email
            ]);

            if(user.rows.length === 0){
                return res.status(401).json("Email or Password is Incorrect")
            }
        //3. check if pass matches
            const validPassword =  await bcrypt.compare(password, user.rows[0].user_password)

            if(!validPassword){
                return res.status(401).json("Email or Password is Incorrect");
            }
        

        //4. give JWT Token
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({token});
    } catch (err) {
        console.error(err.message)
    }
});

router.get("/is-verify", authorization, async (req,res) =>{
    try{    
        res.json(true);

    } catch (err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router