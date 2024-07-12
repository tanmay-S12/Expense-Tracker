// import React from 'react'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const OutputComponent = () => {

  

  // const fetchAllItems = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/getAllItems');
  //     setItemsArray(response.data)
  //     // console.log(response)
  //     // console.log("this is all items ", response.data)

  //   } catch (error) {
  //     alert("error in fetching all items !")
  //     console.error('Error in fetching all items ', error);
  //   }
  // // }
  // useEffect(() => {
  //   fetchAllItems();
  // }, [])


  // const fetchAllItems = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/getAllItems');
  //     setItemsArray(response.data)

  //   } catch (error) {
  //     alert("error in fetching all items !")
  //     console.error('Error in fetching all items ', error);
  //   }
  // }
  // await fetchAllItems();


//   return (
//     <>
//       <div className='flex flex-col w-full border-4 border-blue-200 mt-10 p-5  justify-center align-middle'>
//         <h1 className="text-3xl font-bold underline mx-3 ">
//           List of Items </h1>

//         <div >
//           {itemsArray.length == 0 ? (<p>There are no items added !</p>) : (
//             <div> {itemsArray.map((item) => (
//               <div key={item._id} className='grid grid-cols-3 gap-28 outline-2 outline-black outline p-5 m-3'>
//                 <div className='text-center'>{item.item_name}</div>
//                 <div className='text-center'>{item.item_cost}</div>
//                 <button className='text-center bg-red-600 rounded-md text-white py-1 font-bold'>Remove Item!</button>
//               </div>
//             ))} </div>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

//  const fetchAllItems = async () => {
//   try {
//     const response = await axios.get('http://localhost:3000/getAllItems');
//     setItemsArray(response.data)
//     // console.log(response)
//     // console.log("this is all items ", response.data)

//   } catch (error) {
//     alert("error in fetching all items !")
//     console.error('Error in fetching all items ', error);
//   }
// }

// export {OutputComponent, fetchAllItems };