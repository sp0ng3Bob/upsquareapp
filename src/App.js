import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import './App.css';

import UpperBar from './Tools/UpperBar';
import Promoted from './Promoted/Promoted';
import Recommended from './Recommended/Recommended';
import Popular from './Popular/Popular';


class App extends Component {
  // getData (type) {
  //   var auth = {headers: {'Authorization': '1234567890'}};
  //   window.fetch('https://api.upsquare.io/v1/posts/?type='+type, auth)
  //   .then(res => res.json())
  //   .then(resJson => {
  //     let OUTPUT = [];
  //     var index = 0;
  //     resJson.forEach((post) => {
  //       var picture = post.content.indexOf("data-orig-file");
  //       var url = post.content.substring(picture+16, post.content.indexOf('"', picture+16));
  //       if (picture === -1) {url = post.featured_thumbnail_image;}
  //       var tmpPost = [url, post.title, post.subtitle, (post.modified) ? post.modified : post.date, post.comments,];
  //       OUTPUT[index++] = tmpPost;
  //     });
  //     console.log("APP "+OUTPUT);
  //     return OUTPUT;
  //   }).catch(err => {console.log(err)});
  // }
  
  // renderTitle = (props) => {
  //   if (props.type === 'promoted') {
  //     if (props.listValue.length < 45) return <h3>{props.listValue.toUpperCase()}</h3>;
  //     var spaceIndex = props.listValue.indexOf(" ");              
  //     while(props.listValue.indexOf(" ", spaceIndex+1) < 45) {spaceIndex = props.listValue.indexOf(" ", spaceIndex+1);}
  //     return <h4>{props.listValue.substring(0, spaceIndex).toUpperCase() + "..."}</h4>;
      
  //   } else {
  //     if (props.listValue.length < 20) return <h3>{props.listValue.toUpperCase()}</h3>;
  //     var spaceIndex = props.listValue.indexOf(" ");              
  //     while(props.listValue.indexOf(" ", spaceIndex+1) < 20) {spaceIndex = props.listValue.indexOf(" ", spaceIndex+1);}
  //     return <h4>{props.listValue.substring(0, spaceIndex).toUpperCase() + "..."}</h4>;
  //   }
  // }
      
  // getMinutesFromDate = (props) => {
  //   var processedDate = props.date.slice(0, -3).replace('T', ' ').replace(/-/g, '/');
  //   var diff = Math.abs(new Date() - new Date(processedDate));
  //   var minutes = Math.floor((diff/1000) / 60);
    
  //   if (minutes === 1) return <h5 className="first">1 minute ago</h5>;
  //   else if (minutes < 60) return <h5 className="first">{minutes + " minutes ago"}</h5>;
  //   else {
  //     if (minutes < 120) return <h5 className="first">1 hour ago</h5>;
  //     else return <h5 className="first">{Math.floor(minutes/60) + " hours ago"}</h5>;
  //   }
  // }
      
  // getComments = (props) => {
  //   if (props.number === 1) return <h5 className="second">1 comment</h5>;
  //   else return <h5 className="second">{props.number.toString() + " comments"}</h5>;
  // }
  
  render() {
    var screenn = document.getElementById('SCREEN');
    var sizes = screenn.getBoundingClientRect();

    document.getElementById("PUTPAGEHERE").style.margin = (document.documentElement.clientHeight/9.5) +" "+ "auto" +" "+ "auto" +" "+ (document.documentElement.clientWidth/2 - sizes.width*1.335);
    document.getElementById("PUTPAGEHERE").style.width = sizes.width*0.78; 
    document.getElementById("PUTPAGEHERE").style.height = sizes.height*0.65; 
    document.getElementById("PUTPAGEHERE").style.maxWidth = sizes.width*0.78; 
    document.getElementById("PUTPAGEHERE").style.maxHeight = sizes.height*0.65; 

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