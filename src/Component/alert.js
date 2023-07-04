import React from 'react'

export default function Alert(props) {
  return (<>
     {props.iscopid && <div className='alert'>
      <p><span className='alerttext' >Text Copid Successfully !</span></p>
    </div>}
    {props.listening && <div className='alert'>
      <p><i style={{fontSize:'18px'}} className="fa-solid fa-microphone"></i><span className='alerttext'>Listening........</span></p>
    </div>}

    </>
  )
}
