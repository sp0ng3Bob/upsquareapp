import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

    var screen = document.getElementById('SCREEN');
    var sizes = screen.getBoundingClientRect();
    console.log(sizes);
      
    // document.getElementById("PUTPAGEHERE").style.top = sizes.y+(sizes.height / 25) + "px";
    // document.getElementById("PUTPAGEHERE").style.left = sizes.x-(sizes.width*0.5) + "px";
    // document.getElementById("PUTPAGEHERE").style.right = sizes.right + "px";
    // document.getElementById("PUTPAGEHERE").style.bottom = sizes.bottom + "px";
    // document.getElementById("PUTPAGEHERE").style.width = sizes.width*0.85 + "px";
    // document.getElementById("PUTPAGEHERE").style.height = sizes.height*0.90 + "px";
    
    //document.getElementById("PUTPAGEHERE").style.margin = sizes.top +" "+ sizes.right +" "+ sizes.bottom +" "+ sizes.left; 
    console.log(sizes.top);
    // document.getElementById("PUTPAGEHERE").style.top = 50 + "vh"; 
    // document.getElementById("PUTPAGEHERE").style.left = 50 + "vw"; 
    // console.log(sizes.left);
    // document.getElementById("PUTPAGEHERE").style.right = sizes.right; 
    // console.log(sizes.right);
    // document.getElementById("PUTPAGEHERE").style.bottom = sizes.bottom; 
    // console.log(sizes.bottom);
    document.getElementById("PUTPAGEHERE").style.width = sizes.width/1.5; 
    console.log(sizes.width);
    document.getElementById("PUTPAGEHERE").style.height = sizes.height; 
    console.log(sizes.height);
    document.getElementById("PUTPAGEHERE").style.maxWidth = sizes.width; 
    console.log(sizes.width);
    document.getElementById("PUTPAGEHERE").style.maxHeight = sizes.height; 
    console.log(sizes.height);

ReactDOM.render(<App />, document.getElementById('PUTPAGEHERE')); //document.getElementById('root')
registerServiceWorker();
