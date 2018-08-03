import React, { Component } from 'react';
import './Promoted.css';


class promoted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  
  componentDidMount() {
    var auth = {headers: {'Authorization': '1234567890'}};
    window.fetch('https://api.upsquare.io/v1/posts/?type=promoted', auth)
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
      if (listValue.length < 52) return <h3>{listValue.substring(0, 1).toUpperCase() + listValue.substring(1, listValue.length).toLowerCase()}</h3>;
      
      var spaceIndex = listValue.indexOf(" ");              
      while(listValue.indexOf(" ", spaceIndex+1) < 52) {spaceIndex = listValue.indexOf(" ", spaceIndex+1);}

      return <h4>{listValue.substring(0, 1).toUpperCase() + listValue.substring(1, spaceIndex).toLowerCase() + "..."}</h4>;
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
    
    const getComments = (number) => {
      if (number === 1) return <h5 className="second">1 comment</h5>;
      else return <h5 className="second">{number.toString() + " comments"}</h5>;
    };
    
    return ( 
      <div className="Promoted">
        {this.state.data.map(function(listValue){
            return (
              <div key={index++}>
                <center><img src={listValue[0]} alt="...SLIKA..." width={pictureSize/1.25} height="auto"></img></center>
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
