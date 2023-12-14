const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require('path')
const connectDb = require('./config/connectDb');  // Adjust the filename here

// config dot env file
dotenv.config();

// database call
async function startServer() {
    try {
        await connectDb();
        console.log('Connected to the database'.bgCyan.white);

        // rest obj
        const app = express();

        // middlewares
        app.use(morgan("combined"));
        app.use(express.json());
        app.use(cors());

        // routes
        // user routes 
        app.use("/api/v1/users", require('./routes/userRoute'))

        // transaction routes
        app.use("/api/v1/transactions",require('./routes/transactionRoutes'))

        // static files
        app.use(express.static(path.join(__dirname,'./client/build')))
        app.get('*',function(req,res){
            res.sendFile(path.join(__dirname,'./client/build/index.html'))
        });

        // Port
        const PORT = process.env.PORT || 8081;

        // listen server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(`${error}`.bgRed);
    }
}

// Start the server
startServer();
