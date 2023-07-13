import './about.css';
const About =()=>{
    return(
<div className="About">
        <div className id="about">
          <div className="content">
            <center><h1 className="z" style={{marginBottom: '64px',alignContent:'center'}}>ABOUT US</h1>
            <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669015111/logo_2_vqa5nf.png" alt="logo" width="15%"/></center>
            <p className="keer">Every day, more than 11 million guests visit OMG Burger restaurants around the world.
              And they do so because our restaurants are known for serving high-quality, great-tasting,
              and affordable food. Founded in 1954, OMG Burger is the second largest fast food hamburger
              chain in the world. The original Home of the Whopper, our commitment to premium ingredients,
              signature recipes, and family-friendly dining experiences is what has defined our brand for 
              more than 50 successful years</p>
            <center><img src="https://nijuuichi.com/wp-content/uploads/2022/07/round-chef.png" style={{width: '150px'}} className="circle right" alt="Chef" /></center>
            <img src="https://res.cloudinary.com/drnokmrib/image/upload/v1689243283/download_1_ebcrlh.jpg" style={{width: '100%'}} alt="Restaurant" />
            <center><h2><b>Opening Hours</b></h2></center><br></br>
            <div className>
              <div className>
                <center><p>Mon &amp; Tue CLOSED</p><br></br>
                  <p>Wednesday 10.00 - 24.00</p><br></br>
                  <p>Thursday 10:00 - 24:00</p></center><br></br>
              </div>
              <center><div className>
                  <p>Friday 10:00 - 12:00</p><br></br>
                  <p>Saturday 10:00 - 23:00</p><br></br>
                  <p>Sunday Closed</p></div></center><br></br>
              <center><h2 className="pillai">CONTACT</h2><br></br>
                <h3>D06 Corporation</h3><br></br>
                <h4>Phone Number: 1-866-394-2493</h4></center><br></br>   
            </div>
          </div>
        </div>
        <div className="contact-info">
          <div className="card">
            <i className="card-icon far fa-envelope" />
            <p>D06@emailcom</p>
          </div>
          <div className="card">
            <i className="card-icon fas fa-phone" />
            <p>+91 9025317201</p>
          </div>
          <div className="card">
            <i className="card-icon fas fa-map-marker-alt" />
            <p>SKCET, Coimbatore</p>
          </div>
        </div>
      </div>
    )
};
export default About;