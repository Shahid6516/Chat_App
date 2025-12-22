import React from 'react'

const Chat = () => {
    return (
        <div className='mx-auto border w-1/4 h-screen rounded-2xl overflow-auto'>
            <h1 className='text-3xl font-bold text-center p-2 '>Chit Chat</h1>

            <div className='w-40 p-5 bg-red-100 mt-12 ml-5 rounded-xl'>
            </div>


            <div className='w-40 p-5  bg-green-100 mt-5 ml-40 rounded-xl'>
            </div>


            <div className='mt-85 flex flex-col gap-2 items-start justify-center'>
                

                <textarea className='w-[80%] auto text-md px-3  ml-2 relative border-1 rounded-xl'  name="text-area" id="text-area" placeholder='Pleasae type your message...'>

                </textarea>

                <button className='bg-amber-500 rounded-md px-1 py-1 absolute left-200'>Send</button>

              
            </div>

        </div>
    )
}

export default Chat