import React, { Component } from 'react';
import './Recommended.css';

//var $ = require('jquery');

class recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  
  componentDidMount() {
    var auth = {headers: {'Authorization': '1234567890'}};
    window.fetch('https://api.upsquare.io/v1/posts/?type=recommended', auth)
      .then(res => res.json())
      .then(resJson => {
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
          
          OUTPUT[index++] = tmpPost;
          
        });
        
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
      if (listValue.length < 20) return <h3>{listValue.toUpperCase()}</h3>;
      
      var spaceIndex = listValue.indexOf(" ");              
      while(listValue.indexOf(" ", spaceIndex+1) < 20) {spaceIndex = listValue.indexOf(" ", spaceIndex+1);}
      console.log(listValue);
      console.log(spaceIndex);
      
      return <h3>{listValue.substring(0, spaceIndex).toUpperCase() + "..."}</h3>;
      //{(listValue[1].length < 16) ? <h3>{listValue[1].toUpperCase()}</h3> : <h3>{listValue[1].substring(0, 16).toUpperCase() + "..."}</h3>}
    };
    
    const getMinutesFromDate = (date) => {
      var processedDate = date.slice(0, -3).replace('T', ' ').replace(/-/g, '/');
      var diff = Math.abs(new Date() - new Date(processedDate));
      var minutes = Math.floor((diff/1000) / 60);
      if (minutes === 1) return <h5 className="first">1 minute ago</h5>;
      else if (minutes < 60) return <h5 className="first">{minutes + " minutes ago"}</h5>;
      else {
        if (minutes < 120) return <h5 className="first">1 hour ago</h5>;
        else return <h5 className="first">{Math.floor(minutes/60) + " hours ago"}</h5>;
      }
    };
    
    //TO-DO: add mouse scroll to Recommended and Popular divs
    // $(document).ready(function() {
    //   $('.Recommended').on('mousewheel DOMMouseScroll', function(event, delta) {
    //     this.scrollLeft -= (delta * 30);
    //     event.preventDefault();
    //   });
    // });
    
     return ( 
      <div className="Recommended">
        <h2>Recommended</h2>
        {this.state.data.map(function(listValue){
          return (
            <div key={index++} className="SlideShow">
              <img src={listValue[0]} alt="...SLIKA RECOMMENDED..." width={pictureSize/2.5} height={pictureSize/2.5}></img>
              {renderTitle(listValue[1])}
              {getMinutesFromDate(listValue[3])}
            </div>
          );
        })}
      </div>
    );
  }
}

export default recommended;
