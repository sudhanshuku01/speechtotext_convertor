import React from 'react'
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Alert from  './Component/alert.js';
import Speech from 'react-speech';
export default function App() {
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
}
  return (
    <>
       <div className='alertcont'style={{height:"40px"}}>
        <Alert listening={listening}/>
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
              <i style={{marginLeft:"2px"}} class="fa-solid fa-volume-high"></i>
            </div>
      </div>
    </>
  )
}

