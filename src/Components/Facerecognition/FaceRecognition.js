import React from 'react'
import './Facereg.css'

const FaceRecognition = ({imgUrl, box}) =>{
    return (
        <div className='center'>
            <div className='absolute mt2'>
            <img id='inputimage' alt='img' src={imgUrl} width='500ox' height='auto'></img>
            <div class='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottoRow, left:box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition