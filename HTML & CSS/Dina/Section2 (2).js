import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Section2(){
    return(
        <div>
        <div className="bg-imges">
          <div className="cont">
            <h1>Nothing say better,then a video</h1>
            <hr
              style={{
                width: 172,
                height: 2,
                backgroundColor: "#00e1ff",
                marginTop: "-10px"
              }}
            />
            <p>
              Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
              mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis
              cu ubique referrentur, sed eu dicant expetendis
            </p>
          </div>
          <div className="video" style={{ marginTop: "-80px" }}>
            <h6>See Video</h6>
            <a
              style={{ textDecoration: "none" }}
              href="http://127.0.0.1:5500/video.html"
            >
              <span className="material-icons-outlined">play_circle</span>
            </a>
          </div>
        </div>
      </div>
      
    )}
    export default Section2;
