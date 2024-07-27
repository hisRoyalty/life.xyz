import React from 'react'
import { useState } from 'react';
import Header from './Header'
import data from '../data/Dialogs.json'
import Footer from './Footer';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import Select from "react-dropdown-select";





function Translate() {
    const [animalSelected, setAnimalSelected] = useState('');
    const [message, setMessage] = useState('');
    const recorderControls = useAudioRecorder()
    // Audio recorder library: react-audio-voice-recorder
    // List of options
  
    const options = [
      {
        value: 1,
        label: 'Mammal'
      },
      {
        value: 2,
        label: 'Reptile'
      },
      {
        value: 3,
        label: 'Avian'
      }
    ];





    const handleDropdownSelection = (e) => {
      // get the value of the dropdown selection. this doesn't really matter too much, hence we are using 1,2,3 
      setAnimalSelected(e[0].value)

    }
 


    const addAudioElement = () => {
      // ensuring that something is selected
      if (animalSelected !=0) setMessage(data[Math.floor(Math.random() * (30 - 1) + 1)])
        else {
      setMessage("No animal type was selected")
      }
        // Selecting a random element from Dialogs.json (30 length)

      
    };



    return (
      <div className='bg-green-200'>
        <Header />
    
        <h3 className='font-bold text-center text-5xl mt-2'>Translation Tool</h3>
        <h3 className='font-bold text-center text-3xl mt-2 font-serif'>
          Translate Animal Language into English.
        </h3>
        <div className='flex items-center justify-center bg-green-200'>
          <div className=''>
            <AudioRecorder
              onRecordingComplete={addAudioElement}
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
              }}
              recorderControls={recorderControls}
              downloadOnSavePress={false}
            />
      <Select className='bg-emerald-400' options={options} onChange={handleDropdownSelection} />          </div>
          <div className=''>
            <div className='text-center ml-4 mt-4'>
              <h1 className='emerald-900'>{message}</h1>
            </div>
          </div>
        </div>
    
        <Footer />
        <div className='min-h-screen bg'></div>
      </div>
    );
    
  }

export default Translate