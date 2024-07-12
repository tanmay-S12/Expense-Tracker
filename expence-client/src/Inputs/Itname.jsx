// import * as React from 'react';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Category from './Category';
// import { fetchAllItems } from '../Output/OutputComponent';

export default function Itname() {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState(0);
    const [itemsArray, setItemsArray] = useState([]);
    // const [button, setButton] = useState(false);




    // useeffect
    useEffect(() => {

        const fetchTotal = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getTotal');
                setTotal(response.data.totalAmount)
                console.log("this is total cost", response.data.totalAmount)
            }
            catch (error) {
                alert("error in fetching total !")
                console.error('Error in fetching total', error);
            }
        }
        const fetchAllItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getAllItems');
                setItemsArray(response.data)

            } catch (error) {
                alert("error in fetching all items !")
                console.error('Error in fetching all items ', error);
            }
        }
        // await fetchAllItems();
        // const fetchAllItems = async () => {
        //     try {
        //         const response = await axios.get('http://localhost:3000/getAllItems');
        //         setItemsArray(response.data)

        //     } catch (error) {
        //         alert("error in fetching all items !")
        //         console.error('Error in fetching all items ', error);
        //     }
        // }
        fetchTotal();
        fetchAllItems();
    }, [total])

    const handleInputChange = (e) => {
        const currAmt = Number(e.target.value);
        setAmount(currAmt);
    }

    const handleNameChange = (e) => {
        const currName = e.target.value;
        setName(currName);
    }

    const removeItem = async (id, item_cost) => {
        console.log(id)
        console.log(item_cost)
        try {
            const response = await axios.delete('http://localhost:3000/deleteItem' + { id, item_cost })
            console.log("data deleted :", response.data)

            alert('Data deleted successfully!');
        } catch (error) {
            alert("error in deleting data!")
            console.error('Error deleting data:', error);
        }
    }

    //   total 
    const handleTotal = async (e) => {
        e.preventDefault();
        if ((name == '') || (amount == '')) {
            return alert("Please Enter Values...");
        }
        if (!isNaN(amount)) {
            const updatedTotal = total + Number(amount)
            setTotal(updatedTotal);
        }
        try {
            const response = await axios.post('http://localhost:3000/saveItem', {
                item_name: name,
                item_cost: amount
            })
            console.log("data sent :", response.data)
            alert('Data saved successfully!');
        } catch (error) {
            alert("error in sending data!")
            console.error('Error sending data:', error);
        }
        setAmount('');
        setName('');
    }


    return (
        <div className='flex flex-col border-black border-2 p-5'>

            <TextField sx={{ width: '25%', m: 1 }}
                onChange={handleNameChange}
                id="outlined-helperText"
                label="Item Name"
                value={name}
                required
            />


            {/* getting amount  */}
            <FormControl sx={{ width: '25%', m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    label="Amount"
                    value={amount}
                />
            </FormControl>

            {/* selecting category */}

            <Category />

            {/*Submit Button */}
            <Button
                id='addbut'
                sx={{ width: '15%', m: 1 }}
                onClick={handleTotal}
                variant="contained">Add Expenses!</Button>
            {/* total expenses */}

            <div className='font-bold text-lg flex flex-col mt-8'>
                <label htmlFor="">Total Expenses :</label>
                {/* <TextField sx={{ width: '15%', m: 1, }} /> */}

                <OutlinedInput
                    sx={{ width: '15%', m: 1, backgroundColor: '' }}
                    id="outlined-adornment-weight"
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    value={total}
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
            </div>

            <div className='flex flex-col w-full border-4 border-blue-200 mt-10 p-5  justify-center align-middle'>
                <h1 className="text-3xl font-bold underline mx-3 ">
                    List of Items </h1>

                <div >
                    {itemsArray.length == 0 ? (<p>There are no items added !</p>) : (
                        <div> {itemsArray.map((item) => (
                            <div key={item._id} className='grid grid-cols-3 gap-28 outline-2 outline-black outline p-5 m-3'>
                                <div className='text-center'>{item.item_name}</div>
                                <div className='text-center'>{item.item_cost}</div>
                                <button onClick={() => { removeItem(item._id, item.item_cost) }} className='text-center bg-red-600 rounded-md text-white py-1 font-bold'>Remove Item!</button>
                            </div>
                        ))} </div>
                    )}
                </div>
            </div>
        </div>
    )
}



