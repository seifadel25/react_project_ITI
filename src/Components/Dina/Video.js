import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Video(){
    return(
        <div>
        <video
          controls=""
          loop=""
          autoPlay=""
          muted=""
          style={{ marginLeft: 220, marginTop: 150 }}
          width="900px"
        >
          <source src="4_5971812005412079948.mp4" type="video/mp4" />
        </video>
      </div>
      
    )}
    export default Video;
