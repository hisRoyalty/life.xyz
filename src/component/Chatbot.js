import React from 'react'
import { useState } from 'react'
import Header from './Header'
import data from '../data/Dialogs.json'
import Footer from './Footer';
import Chatbots from "react-chatbot-kit";
import config from "./Chatbot/Config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css'






function Chatbot() {






    return (
        <div className='bg-green-400'>
          <Header/>

          <h3 className='font-bold text-center text-5xl mt-2'>Chatbot</h3>
          <h3 className='font-bold text-center text-3xl mt-2 font-serif'>Advanced Mental Health Artificial Intelligence</h3>
          <h5 className='text-center mt-2 font-serif'>Mental help chatbot, powered by</h5>
          <div className='flex items-center justify-center'>
          <img className='w-20 justify-center items-center' src='https://media.discordapp.net/attachments/744120656278454274/1266600345346248734/xxxx-removebg-preview.png?ex=66a5bcfe&is=66a46b7e&hm=4827886ae7beba111a7eb8198c7370c3f9eb091f672db2191a3565df7a5eda00&=&format=webp&quality=lossless&width=662&height=662'></img>
          </div>
          <div className='min-h-screen flex items-start justify-center bg-green-200 h-60'>
            
          

          <Chatbots
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}          
          ></Chatbots>

            

            

          </div>
          <Footer></Footer>
    
          
        </div>
      );
}

export default Chatbot