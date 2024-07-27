"use client"
// Marked sidedness


import React from 'react'
import { useState } from 'react'


function ContactUs() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Mails to vir's email using mailto

  return (
    <>
    <div>
      <h1 className='text-center font-bold mt-12 text-2xl text-green-900'>Contact Us</h1>
    </div>
    <form className='py-4 mt-4 border-t flex flex-col gap-5'>
      <div>
        <label className='block text-green-900 text-sm font-bold mb-2 ml-2' htmlFor='subject'>Subject</label>
        <input className='shadow appearance-none border rounded py-2 px-3 w-72 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={e => setSubject(e.target.value)} value={subject} type='text' id='fullname'></input>
      </div>

      <div>
        <label className='block text-green-900 text-sm font-bold mb-2 ml-2' htmlFor='email'>Email</label>
        <input className='shadow appearance-none border rounded w-fit ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={e => setEmail(e.target.value)} value={email} type='text' id='email' placeholder='example@example.com'></input>
      </div>
      <div>
        <label className='block text-green-900 text-sm font-bold mb-2 ml-2' htmlFor='message'>Message</label>
        <textarea className='shadow appearance-none border rounded w-11/12 py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={e => setMessage(e.target.value)} value={message} id='message' placeholder='Type your message here.'></textarea>
      </div>


    <div>
      
      <a href={`mailto:vir.menon@outlook.com?subject=${subject}&body=${message}`} target='_blank'>
      <button type='button' className="bg-green-700 p-3 text-white font-bold hover:bg-green-600 rounded ml-2">Send</button>
      </a>
      </div>
      
      
      
    </form>

    </>
  )
}

export default ContactUs