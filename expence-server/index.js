const express = require('express')
const mongoose = require('mongoose');
const itemModel = require('./models/item.modal.js')
const totalModel = require('./models/total.modal.js')
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

const app = express()

// REQ Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URI;




// DB connection
mongoose.connect(MONGOURL).then(() => {
    console.log("Connection established with DB!");
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}).catch((err) => { console.log(err) })

// CORS POLICY
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const totalDocumentId = '66621c6ae5824d88f0c8369f';


app.get('/', (req, res) => {
    res.send('Hello World!, yyyyyyyyyyyyyyyyyyy ttttttttttttttttttttt uuuuuuuuuuuuuu fffffffff')
})



app.post('/saveItem', async (req, res) => {
    try {

        const { item_cost } = req.body;
        // const {totalCost }= req.body;
        const savedItem = await itemModel.create(req.body)
        console.log("items saved", savedItem);
        // {
        //     item_name: item_name,
        //     item_cost: item_cost
        // });

        const totalDoc = await totalModel.findById(totalDocumentId);
        console.log(totalDoc)
        if (totalDoc) {
            totalDoc.total_cost += item_cost;
            await totalDoc.save();
        } else {
            return res.status(404).json({ message: 'Total document not found' });
        }
        res.status(201).json(savedItem)
        console.log("item saved successfully..")

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

// Fetching total Amount from DB !
app.get('/getTotal', async (req, res) => {
    try {
        const totalFromDb = await totalModel.findById(totalDocumentId);
        if (!totalFromDb) {
            return res.status(404).json({ message: "the Document does not exist" })
        }
        res.status(200).json({ totalAmount: totalFromDb.total_cost })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

app.delete('/deleteItem', async (req, res) => {
    try {
        // const { id } = req.params;
        const { id, item_cost } = req.body;
        const result = await itemModel.findByIdAndDelete({ _id: id })
        if (!result) { res.status(500).json({ message: error.message }) }
        const totalDoc = await totalModel.findById(totalDocumentId);
        console.log(totalDoc)
        if (totalDoc) {
            totalDoc.total_cost -= item_cost;
            await totalDoc.save();
        }
        res.status(200).json({ message: "the Document deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// Fetching all items from Db
app.get('/getAllItems', async (req, res) => {
    try {
        const allItem = await itemModel.find();
        res.status(200).json(allItem)
        // console.log("item showed...")
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

