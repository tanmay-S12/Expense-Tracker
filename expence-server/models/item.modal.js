const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        item_name: {
            type: String,
            required: true,
            default: ''
        },
        item_cost: {
            type: String,
            required: true,
            default: 0
        }
        // total_cost: {
        //     type: Number,
        // }
    }
)




const item = mongoose.model("item", itemSchema);
module.exports = item