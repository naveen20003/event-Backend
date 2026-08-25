
const mongoose = require('mongoose')

async function connectDB (url) {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
}

module.exports = {connectDB};