import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MapImg from './Imgs/Location.png'



function Contact (){


    return(
        <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(19, 19, 22)", margin: 0 }}
      >
        <div className="row justify-content-center" style={{ paddingTop: "8%" }}>
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12"
            style={{ color: "white", textAlign: "center", fontSize: "200%" }}
          >
            Contact Us
          </div>
          <div
            className=" col-2 offset-0 col-sm-2 offset-sm-0 col-md-2 offset-md-0 col-lg-2 offset-lg-0"
            style={{ borderBottom: "2px solid #00e1ff" }}
          ></div>
        </div>
        <div className="row mt-5">
          <div
            className="col-12 col-sm-12 col-md-12"
            style={{
              color: "white",
              textAlign: "center",
              paddingLeft: "15%",
              paddingRight: "15%",
              fontSize: "90%"
            }}
          >
            Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
            mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis
            cu ubique referrentur, sed eu dicant expetendis.
          </div>
        </div>
        <form>
          <div className="formmain">
            <div className="row">
              <div className="col-sm-12 col-md-5 col-lg-5 bord">
                <input
                  className="col-12 col-sm-12 col-md-12 col-lg-12 form1"
                  type="text"
                  title="Name"
                  defaultValue="Your name here"
                />
              </div>
              <div className=" col-12 col-sm-12 col-md-5 col-lg-5 bord mail">
                <input
                  className="col-12 col-sm-12 col-md-12 col-lg-12 form1"
                  type="email"
                  title="email"
                  defaultValue="Your mail here"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="bord1">
                <input
                  className="col-12 col-sm-12 col-md-12 col-lg-12 form1"
                  type="text"
                  title="msg"
                  defaultValue="Your message here"
                />
              </div>
            </div>
            <div className="row">
              <input
                className="col-3 btn1"
                type="button"
                defaultValue="Send Message"
                onClick={()=>{ alert('Your message is sent!'); }}
                />
            </div>
          </div>
        </form>
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 MapLoc">
            <img src={MapImg} width="100%" height="100%" />
            <div className="speech-bubble">
              Awesome Address 432<p>ourmail@sometype.com</p>{" "}
              <p>+321(0)32 123 343 492</p>
            </div>
          </div>
        </div>
        <footer className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <p>
              © 2014 - <a href="#">Kat</a> All Right Reserved
            </p>
          </div>
        </footer>
      </div>
      
    )
}

export default Contact;