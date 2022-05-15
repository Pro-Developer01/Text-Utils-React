import React from "react";

export default function Footer(props) {
  
    
  return (
      <footer>

    <div className="Footer">
      <hr style={{color: props.mode==='light'?'grey':'#c3bebe'}} ></hr>
      <div className="container" >
        <center>
          
          <h5 style={{color: props.mode==='light'?'black':'white'}}>Contact The Developer</h5>
        </center>
        <div className="icons">
          <a
            href="https://api.whatsapp.com/send?phone=918948492799&text=Hello,%20I%20visited%20your%20text%20Utils%20website."
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp fa-lg mx-3"></i>
          </a>
          <a
            href="http://www.linkedin.com/in/shashank-yadav-93b35b163/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <i className="fa-brands fa-linkedin fa-lg mx-3"></i>
          </a>
          <a
            href="mailto:yadavshashank70@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-envelope fa-lg mx-3"></i>
          </a>
          <a
            href="https://github.com/Pro-Developer01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fa-lg mx-3"></i>
          </a>
        </div>
        <center>
        <p className="copyright" style={{color: props.mode==='light'?'rgb(88, 87, 87)':'#c3bebe'}}>Copyright &copy; 2022 - shashank Yadav </p>
        </center>
      </div>
    </div>
            </footer>
  );
}
