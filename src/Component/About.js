import React, { Component } from 'react'
import image2 from './sudhanshuimage.jpg'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div className='aboutcontainer'>

        <div className='developerinfo'>
          <div>Hi There,<br /> I'm Sudhanshu Kushwaha</div>
        <div>I'm a Full Stack MERN Developer and Data Scientist</div>
        <div><span>About Me</span></div>
        <div>
        <Link to="https://facebook.com" target='_blank'><i style={{marginLeft:"0"}} className="sociallink fa-brands fa-square-facebook"></i></Link>
        <Link to="https://facebook.com" target='_blank' ><i  className="sociallink fa-brands fa-github"></i></Link>
        <Link to="https://facebook.com" target='_blank'><i className="sociallink fa-brands fa-square-instagram"></i></Link>
        <Link to="https://facebook.com" target='_blank'><i className="sociallink fa-brands fa-linkedin"></i></Link>
        </div>
        </div>
        <div className='developerinfo2'>
             <div style={{textAlign:"center"}}><img src={image2} alt="" /></div>
             <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In et aliquam unde dolorum itaque veritatis at quibusdam id ab, tempore perferendis autem saepe sed architecto provident ea incidunt modi! Ipsum.</div>
        </div>

      </div>
    )
  }
}
