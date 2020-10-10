import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai'
import Particles from 'react-particles-js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation'
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/Facerecognition/FaceRecognition'

const particles = {
  "particles": {
      "number": {
          "value": 175
      },
      "size": {
          "value": 4
      },
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": false,
              "mode": "repulse"
          }
      }
  },
}

const app = new Clarifai.App({
  apiKey: '6be080a4b9734361b96d90b8911c03ec'
 });

class App extends Component{
  constructor(){
      super();
      this.state = {
        'input' : '',
        'imgUrl':'',
        'box': {}
      }
    }

    calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
      const image = document.getElementById('inputimage')
      const width = Number(image.width);
      const height = Number(image.height)
      return{
        leftCol: clarifaiFace.left_col *width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottoRow: height - (clarifaiFace.bottom_row*height)
      }
    }
    displayFaceBox = (box) =>{
      console.log(box)
      this.setState({box: box})
    }
    onInputChange = (event) =>{
      this.setState({input:(event.target.value)});
    }

    onButtonSubmit = () =>{
      this.setState({imgUrl: this.state.input})
      app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    // URL
    this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
    }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
                  params={particles}/>
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}  />
          <FaceRecognition imgUrl={this.state.imgUrl} box={this.state.box} />
      </div>
    );
  }
}


export default App;
