import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import Brain from './brain.png'
const Logo = () =>{
    return(
        <div className='ma4 mt0' style={{display:'block'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 175, width: 175 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop:'25px'}} src={Brain} alt='brain'></img>  </div>
            </Tilt>
        </div>
    )
}

export default Logo