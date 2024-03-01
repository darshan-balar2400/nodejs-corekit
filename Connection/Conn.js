const mongoose = require("mongoose");

const Connection = (URL) => {
    mongoose.connect(URL).then((data) => {
        console.log("Successfully connected With " + data.connections[0].host);
    }); 
}


