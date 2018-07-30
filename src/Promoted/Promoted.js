import React, { Component } from 'react';
import './Promoted.css';

class promoted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  
  // const obj = {
  //   method: 'GET',
  //   //auth: {'Authorization': '1234567890'},
  //   headers: {
  //     //'Accept': 'application/json',
  //     'Authorization': '1234567890', 
  //     //'Content-Type': 'application/json',
  //   }
  // };
  
  // window.fetch('https://api.upsquare.io/v1/posts/', obj)  
  // .then(res => res.json())
  // .then(resJson => {console.log(resJson)})
  // .catch(err => {console.log(err)});
  
  
  
  componentDidMount() {
    // var coreapi = window.coreapi;  // Loaded by `coreapi.js`
    // var schema = window.schema;    // Loaded by `schema.js`
    
    // console.log(coreapi);
    // console.log(schema);
     
    // // Initialize a client
    // var auth = {headers: {'Authorization': '1234567890'}};
    // var client = new coreapi.Client(auth);
    
    // // Interact with the API endpoint
    // var act = ["posts", "list"];
    
    // client.action(schema, act).then((result) => {
    //     console.log(result);
        
    //     // window.fetch('https://api.upsquare.io/v1/posts/?type=promoted', auth)  
    //     //   .then(res => res.json())
    //     //   .then(resJson => {console.log(resJson)})
    //     //   .catch(err => {console.log(err)});
        
    //     // let OUTPUT = '<h2>POSTS:</h2>';
    //     // result.forEach((post) => {
    //     //   OUTPUT += `
    //     //     <ul>
    //     //       <li>${post.id}</li>
    //     //     </ul>
    //     //   `;
    //     // });
    //     // document.getElementById('root').innerHTML = OUTPUT;
    //     // var screen = document.getElementById('svg').getSVGDocument().getElementById('SCREEN');
    //     // screen.parentElement.replaceChild(screen.getSVGDocument().documentElement.cloneNode(true), screen);
    //     // console.log(screen.availLeft + " haha");
    //   })
    //   //.then (resJSON => {console.log(resJSON)})
    //   .catch((err) => {console.log(err)})
    // ;
    
    var auth = {headers: {'Authorization': '1234567890'}};
    window.fetch('https://api.upsquare.io/v1/posts/?type=promoted', auth)
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        
        let OUTPUT = [];
        var index = 0;
        resJson.forEach((post) => {
          var picture = post.content.indexOf("data-orig-file");
          var url = post.content.substring(picture+16, post.content.indexOf('"', picture+16));
          if (picture === -1) {url = post.featured_thumbnail_image;}
 
          var tmpPost = [
            url,
            post.title,
            post.subtitle,
            (post.modified) ? post.modified : post.date,
            post.comments,
          ];
          
          //console.log(tmpPost);
          OUTPUT[index++] = tmpPost;
          
        });
        
        //console.log(OUTPUT);
        this.setState({data: OUTPUT});
  
      }).catch(err => {console.log(err)});
    
  }
  
  render() {
    if (!this.state.data) {return <p>PROMOTED se ni se nalozil.</p>}
    
    var index = 0;
    var container = document.getElementById("PUTPAGEHERE");
    var sizes = container.getBoundingClientRect();
    var pictureSize = (sizes.width < sizes.height) ? sizes.width : sizes.height;
    
    const renderTitle = (listValue) => {
      if (listValue.length < 45) return <h3>{listValue.toUpperCase()}</h3>;
      
      var spaceIndex = listValue.indexOf(" ");              
      while(listValue.indexOf(" ", spaceIndex+1) < 45) {spaceIndex = listValue.indexOf(" ", spaceIndex+1);}
      console.log(listValue);
      console.log(spaceIndex);
      
      return <h4>{listValue.substring(0, spaceIndex).toUpperCase() + "..."}</h4>;
    };
    
    const getMinutesFromDate = (date) => {
      var processedDate = date.slice(0, -3).replace('T', ' ').replace(/-/g, '/');
      //console.log(processedDate);
      var diff = Math.abs(new Date() - new Date(processedDate));
      var minutes = Math.floor((diff/1000) / 60);
      //console.log(minutes);
      if (minutes === 1) return <h5 className="first">1 minute ago</h5>;
      else if (minutes < 60) return <h5 className="first">{minutes + " minutes ago"}</h5>;
      else {
        if (minutes < 120) return <h5 className="first">1 hour ago</h5>;
        else return <h5 className="first">{Math.floor(minutes/60) + " hours ago"}</h5>;
      }
    };
    
    const getComments = (number) => {
      if (number === 1) return <h5 className="second">1 comment</h5>;
      else return <h5 className="second">{number.toString() + " comments"}</h5>;
    };
    
    return ( 
      <div className="Promoted">
        {this.state.data.map(function(listValue){
            return (
              <div key={index++}>
                <img src={listValue[0]} alt="...SLIKA PROMOTED..." width={pictureSize/1.4} height="auto"></img>
                <h3>{listValue[1].toUpperCase()}</h3>
                {renderTitle(listValue[2])}
                <div id="lastLine">
                  {getMinutesFromDate(listValue[3])}
                  {getComments(listValue[4])}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default promoted;
