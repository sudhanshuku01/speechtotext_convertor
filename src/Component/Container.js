import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Alert from  './alert';
import Speech from 'react-speech';
export default function Container() {
  const [iscopid,setIscopid]=useState(false)
  const {
    transcript,  
    listening,
    resetTranscript, 
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
const handlecopy=()=>{
  let alltext=document.getElementById('alltext');
   navigator.clipboard.writeText(alltext.innerText);
   setIscopid(true);
   setTimeout(() => {
    setIscopid(false);
   }, 1500);
}
  return (
    <>
       <div className='alertcont'style={{height:"40px"}}>
        <Alert iscopid={iscopid} listening={listening}/>
       </div>
      <div className='container'>
           <div >Speech To Text Converter</div>
           <p>This is the react application for converting your speech to the text use it and make your work simple</p>
      </div>
      <div className='main-container'>
            <div id='alltext'>{transcript}
            </div>
            <div className='buttons'>
              <button onClick={handlecopy} >Copy Text</button>
              <button onClick={SpeechRecognition.startListening}>Start Listening</button>
              <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
              <button onClick={resetTranscript}>Reset Text</button>
              <Speech text={transcript} />
              <i style={{marginLeft:"2px"}} className="fa-solid fa-volume-high"></i>
            </div>
      </div>
    </>
  )
}
