const express = require("express");
const app = express();
const cors = require("cors");




//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a user



app.use("/auth", require("./routes/jwtAuth"))


//dashboard route
app.use("/dashboard", require("./routes/dashboard"))



app.listen(5000, () =>{
    console.log("server has started on port 5000");
});