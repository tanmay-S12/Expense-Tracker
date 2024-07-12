import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputComponent from './InputComponent'
// import ListComp from './ListComp'
// import ItemLabel from './ItemLabel'
// import { SignOutButton } from '@clerk/clerk-react'

const ExpenseTracker = () => {

  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [total, setTotal] = useState(0);
  // const [itemsArray, setItemsArray] = useState([]);



  // useEffect(() => {

  //   const fetchTotal = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/getTotal');
  //       setTotal(response.data.totalAmount)
  //       console.log("this is total cost", response.data.totalAmount)
  //     }
  //     catch (error) {
  //       alert("error in fetching total !")
  //       console.error('Error in fetching total', error);
  //     }
  //   }


// its for items array
  //   const fetchAllItems = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/getAllItems');
  //       setItemsArray(response.data)
  //       // console.log(response)
  //       // console.log("this is all items ", response.data)

  //     } catch (error) {
  //       alert("error in fetching all items !")
  //       console.error('Error in fetching all items ', error);
  //     }
  //   }
  //   fetchTotal();
  //   fetchAllItems();
  // }, [])

  // const handleInputChange = (e) => {
  //   const currAmt = Number(e.target.value);
  //   setAmount(currAmt);
  // }

  // const handleNameChange = (e) => {
  //   const currName = e.target.value;
  //   setName(currName);
  // }
  // copied above


  // const handleTotal = async (e) => {
  //   e.preventDefault();
  //   if ((name == '') || (amount == '')) {
  //     return alert("Please Enter Values...");
  //   }
  //   if (!isNaN(amount)) {
  //     const updatedTotal = total + Number(amount)
  //     setTotal(updatedTotal);
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:3000/saveItem', {
  //       item_name: name,
  //       item_cost: amount
  //     })


  //     console.log("data sent :", response.data)
  //     alert('Data saved successfully!');

  //     const fetchAllItems = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:3000/getAllItems');
  //         setItemsArray(response.data)

  //       } catch (error) {
  //         alert("error in fetching all items !")
  //         console.error('Error in fetching all items ', error);
  //       }
  //     }
  //     await fetchAllItems();

  //   } catch (error) {
  //     alert("error in sending data!")
  //     console.error('Error sending data:', error);
  //   }

  //   setAmount('');
  //   setName('');


  // }

  return (
    <>
      <InputComponent />

      {/* <div className="flex flex-col w-full border-8 border-black   justify-center align-middle px-8"> */}

      {/* <h1 className="text-3xl font-bold underline my-3 mx-auto ">
          Expense Tracker  </h1>
        <InputComponent />
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Item Name:
          </span>
          <input onChange={handleNameChange} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1 mb-2" placeholder="Name of Item." /> */}

      {/* <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Item Amount :
          </span>
          <input value={amount} onChange={handleInputChange} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1 mb-2" placeholder="Amount in Rs." />

          <button onClick={handleTotal} class=" text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mx-5 my-2 px-2 py-1 min-w-fit max-w-fit">Add Item!</button> */}


      {/* <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Total Expenses :
          </span>

          <input value={total} class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-50 rounded-md sm:text-sm focus:ring-1 mb-2" placeholder="0.00" />
        </label> */}




      <div className='flex flex-col w-full border-4 border-blue-200 mt-10 p-5  justify-center align-middle'>
        <h1 className="text-3xl font-bold underline mx-3 ">
          List of Items </h1>

        <div >
          {itemsArray.length == 0 ? (<p>There are no items added !</p>) : (
            <div> {itemsArray.map((item) => (
              <div key={item._id} className='grid grid-cols-3 gap-28 outline-2 outline-black outline p-5 m-3'>
                <div className='text-center'>{item.item_name}</div>
                <div className='text-center'>{item.item_cost}</div>
                <button className='text-center bg-red-600 rounded-md text-white py-1 font-bold'>Remove Item!</button>
              </div>
            ))} </div>
          )}
        </div>
      </div>

      {/* </div> */}
    </>
  )
}

export default ExpenseTracker
