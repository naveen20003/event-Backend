const express = require("express");
const cors = require("cors");

const { connectDB } = require("./src/config/db");

const userRoutes = require("./src/routes/user.routes");
const eventRoutes = require("./src/routes/event.routes");
const guestRoutes = require("./src/routes/guest.routes");
const taskRoutes = require("./src/routes/task.routes");
const budgetRoutes = require("./src/routes/budget.routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API working");
});

app.use((req, res, next) => {
    console.log("➡️ Request:", req.method, req.url);
    next();
});

let dbPromise;

function connectToDatabase() {
    if (!dbPromise) {
        dbPromise = connectDB(process.env.mongodbUrl);
    }

    return dbPromise;
}

app.use(async (req, res, next) => {
    try {
        await connectToDatabase();
        next();
    } catch (error) {
        console.error("MongoDB connection failed:", error);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/guests", guestRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/budgets", budgetRoutes);

module.exports = app;

// const express = require('express')
// const { connectDB } = require('./src/config/db')
// const cors = require('cors')
// const userRoutes = require('./src/routes/user.routes')
// const eventRoutes = require('./src/routes/event.routes')
// const guestRoutes = require('./src/routes/guest.routes')
// const taskRoutes = require('./src/routes/task.routes')
// const budgetRoutes = require('./src/routes/budget.routes')
// const app = express()
// app.use(cors())
// app.use(express.json())
// require("dotenv").config();

// // connectDB('mongodb://localhost:27017/event-planner')
// // .then(()=> console.log('connected succesfully'))
// // .catch(err => console.log('error', err))

// // let isConnected = false;

// // async function connectToMongoDb() {
// //   try{
// //     await connectDB(process.env.mongodbUrl, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// //   });
// //    isConnected = true;
// //     console.log('connected succesfully')
// //   } catch(error){
// //     console.log('error connecting to mongodb',error)
// //   }
// // };

// // app.use((req, res, next) => {
// //   if(!isConnected) {
// //     connectToMongoDb();
// //   }
// //   next();
// // })

// async function startServer() {
//     try {
//         await connectDB(process.env.mongodbUrl);

//         console.log("connected successfully");

//         app.listen(5000, () => {
//             console.log("server started on port 5000");
//         });
//     } catch (error) {
//         console.error("MongoDB connection failed:", error);
//         process.exit(1);
//     }
// }

// startServer();
// app.get('/', (req, res) => {
//   res.send("API working");
// });
// app.use((req, res, next) => {
//   console.log("➡️ Request:", req.method, req.url);
//   next();
// });
// app.use("/api/users", userRoutes)
// app.use("/api/events", eventRoutes)
// app.use("/api/guests", guestRoutes)
// app.use("/api/tasks", taskRoutes)
// app.use("/api/budgets", budgetRoutes)

// app.listen(5000, () => 
//   console.log('server strarted on port 5000'))

// module.exports = app;