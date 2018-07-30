import React, { Component } from 'react';
//import iphone_mockup from './iphone_mockup.svg';
import './App.css';

import UpperBar from './Tools/UpperBar';
import Promoted from './Promoted/Promoted';
import Recommended from './Recommended/Recommended';
import Popular from './Popular/Popular';

class App extends Component {
  render() {
    //var svg = document.getElementById('Layer_1');
    // var svgDoc = svg.contentDocument;
    // var svgDoc = svg.getSVGDocument();
    // var screen = document.getElementById('SCREEN');
    // var sizes = screen.getBoundingClientRect();
    // console.log(sizes);
      
    // // document.getElementById("PUTPAGEHERE").style.top = sizes.y+(sizes.height / 25) + "px";
    // // document.getElementById("PUTPAGEHERE").style.left = sizes.x-(sizes.width*0.5) + "px";
    // // document.getElementById("PUTPAGEHERE").style.right = sizes.right + "px";
    // // document.getElementById("PUTPAGEHERE").style.bottom = sizes.bottom + "px";
    // // document.getElementById("PUTPAGEHERE").style.width = sizes.width*0.85 + "px";
    // // document.getElementById("PUTPAGEHERE").style.height = sizes.height*0.90 + "px";
    
    // //document.getElementById("PUTPAGEHERE").style.margin = sizes.top +" "+ sizes.right +" "+ sizes.bottom +" "+ sizes.left; 
    // console.log(sizes.top);
    // // document.getElementById("PUTPAGEHERE").style.top = 50 + "%"; 
    // // document.getElementById("PUTPAGEHERE").style.left = 50 + "%"; 
    // // console.log(sizes.left);
    // // document.getElementById("PUTPAGEHERE").style.right = sizes.right; 
    // // console.log(sizes.right);
    // // document.getElementById("PUTPAGEHERE").style.bottom = sizes.bottom; 
    // // console.log(sizes.bottom);
    // document.getElementById("PUTPAGEHERE").style.width = sizes.width; 
    // console.log(sizes.width);
    // document.getElementById("PUTPAGEHERE").style.height = sizes.height; 
    // console.log(sizes.height);
    // document.getElementById("PUTPAGEHERE").style.maxWidth = sizes.width; 
    // console.log(sizes.width);
    // document.getElementById("PUTPAGEHERE").style.maxHeight = sizes.height; 
    // console.log(sizes.height);
    
    var PUTPAGEHERE = document.getElementById('PUTPAGEHERE');
    var sizesPUTPAGEHERE = PUTPAGEHERE.getBoundingClientRect();
    console.log(sizesPUTPAGEHERE);
    
    return ( 
      <div className="App">
        <UpperBar />
        <Promoted />
        <Recommended />
        <Popular />
      </div>
    );
  }
}

export default App;
