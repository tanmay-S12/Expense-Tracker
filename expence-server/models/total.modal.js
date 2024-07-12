const mongoose = require('mongoose')

const totalSchema = new mongoose.Schema(
    {
        total_cost:{
            type: Number,
            default : 0
        }
    }
)

const total = mongoose.model("total",totalSchema);
module.exports = total