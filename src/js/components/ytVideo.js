import React, { Component } from 'react';

class YtVideo extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      vidId: props.video
    }
  }

  render() {
    const url = "https://www.youtube.com/embed/" + this.state.vidId +"?rel=0&amp;showinfo=0";

    return (
      <div className="responsive-ytv">
        <iframe id="ytplayer" frameBorder="0" allowFullScreen="1" allow="autoplay; encrypted-media" title="YouTube video player" width="640" height="390" src={url}></iframe>
      </div>
    )
  }
}

export default YtVideo;