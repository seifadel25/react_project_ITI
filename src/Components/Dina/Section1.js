import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import imgD from './download.jpg'
import img1 from './images.jpg'
import img2 from './images (2).jpg'
import img3 from './smartphone-photography-1.webp'

function Section1(){
    return(
        <div>
  <div className="container">
    <div className="row">
      <div className="col-12 intro text-center">
        <h6 className="pt-5  fs-1 fw-normal">Our Portfolio</h6>
        <hr
          style={{
            width: 172,
            height: 5,
            backgroundColor: "#00e1ff",
            marginTop: 15,
            marginLeft: "35rem"
          }}
        />
        <p>
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis
        </p>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active border border-info text-dark" href="#">
          ALL
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">
          WEB
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">
          PHOTOGRAPHY
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">
          GRAPHIC DESIGN
        </a>
      </li>
    </ul>
  </div>
  <div className="col-md-3 mt-5 ">
    <div className="card shadow p-3 mb-5 ">
      <div className="img overflow-hidden">
        <img
          style={{ transition: "all 1.3s ease" }}
          className="w-100 "
          src={img3}
          alt=""
        />
      </div>
      <div className="main-text">
        <h6 className="text-center mt-3">AWESOME PHOTO</h6>
        <hr
          style={{
            width: 60,
            marginLeft: 100,
            backgroundColor: "#00e1ff",
            height: 3,
            marginTop: 10
          }}
        />
        <p>Eum cu tantas legere complectitur, hinc utamur</p>
      </div>
    </div>
  </div>
  <div className="col-md-3 mt-5">
    <div className="card shadow p-3 mb-5 ">
      <div className="img overflow-hidden">
        <img
          style={{ transition: "all 1.3s ease" }}
          className="w-100 "
          src={img1}
          alt=""
        />
      </div>
      <div className="main-text">
        <h6 className="text-center mt-3">AWESOME PHOTO</h6>
        <hr
          style={{
            width: 60,
            marginLeft: 100,
            backgroundColor: "#00e1ff",
            height: 3,
            marginTop: 10
          }}
        />
        <p>Eum cu tantas legere complectitur, hinc utamur</p>
      </div>
    </div>
  </div>
  <div className="col-md-3 mt-5">
    <div className="card shadow p-3 mb-5 ">
      <div className="img overflow-hidden">
        <img
          style={{ transition: "all 1.3s ease" }}
          className="w-100"
          src={imgD}
          alt=""
        />
      </div>
      <div className="main-text">
        <h6 className="text-center mt-3">AWESOME PHOTO</h6>
        <hr
          style={{
            width: 60,
            marginLeft: 100,
            backgroundColor: "#00e1ff",
            height: 3,
            marginTop: 10
          }}
        />
        <p> Eum cu tantas legere complectitur, hinc utamur</p>
      </div>
    </div>
  </div>
  <div className="col-md-3 mt-5">
    <div className="card shadow p-3 mb-5 ">
      <div className="img overflow-hidden ">
        <img
          style={{ transition: "all 1.3s ease" }}
          className="w-100 mask"
          src={img2}
          alt=""
        />
      </div>
      <div className="main-text">
        <h6 className="text-center mt-3">AWESOME PHOTO</h6>
        <hr
          style={{
            width: 60,
            marginLeft: 100,
            backgroundColor: "#00e1ff",
            height: 3,
            marginTop: 10
          }}
        />
        <p> Eum cu tantas legere complectitur, hinc utamur</p>{" "}
      </div>
    </div>
  </div>
</div>

    

        

    )
}
export default Section1;
