import React from 'react'

const ItemLabel = () => {
    return (
        <>
            <div class=" border-4 min-w-fit max-w-fit bg-white rounded-xl shadow-lg">
               
                <ul className="menu bg-base-200  rounded-box max-w-fit ">
                    <li className='flex flex-row min-w-fit max-w-fit my-1'>
                        <p className='mx-5 min-w-fit p-1'>Item name</p>
                        <p className='mx-5 min-w-fit p-1'>Item cost</p>
                    <button class=" text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mx-5 p-1 min-w-fit ">Remove Item!</button></li>
                </ul>

            </div>
        </>
    )
}

export default ItemLabel