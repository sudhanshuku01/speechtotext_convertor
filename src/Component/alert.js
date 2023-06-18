import React from 'react'

export default function Alert(props) {
  return (
   props.listening && <div className='alert'>
      <p><i className="fa-solid fa-microphone"></i><span style={{
        fontSize: "18px",
        fontFamily: "monospace",
        margin:"0px 16px"  
      }}>Listening........</span></p>
    </div>
  )
}
