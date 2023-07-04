import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Speech from 'speak-tts'
import Alert from  './alert';
export default function Container() {
const [iscopid,setIscopid]=useState(false)
const speech = new Speech()
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
            <div id='alltext'>{transcript}</div>
            <div className='buttons'>
              <button onClick={handlecopy} >Copy Text</button>
              <button onClick={() => SpeechRecognition.startListening({ continuous: true }) }>Start Listening</button>
              <button onClick={()=>{
                SpeechRecognition.stopListening()
              }}>Stop Listening</button>
              <button onClick={resetTranscript}>Reset Text</button>
              <button onClick={()=>speech.speak({text:`${transcript}`})} >Listen Text</button>
            </div>
      </div>
    </>
  )
}
