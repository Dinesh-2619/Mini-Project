import { Link } from 'react-router-dom';
import './Home.css';
import './footer.css';
import SliderImages from './slider';

const Home =()=>{
    return(
        <div className="home">
<img src="https://res.cloudinary.com/drnokmrib/image/upload/v1689137657/household-equipment-banner_df6ayr.jpg" height="500" width="100%" style={{borderRadius:0}} />
<button className='ho1'><Link to="/shop"><b>View Deals→</b></Link></button>
<h2 style={{textAlign:'left'}}>APPLIANCES</h2>
<div className="cards-wrapper">
    <div className="card"><img src="https://res.cloudinary.com/drnokmrib/image/upload/v1689137959/Home1_jwz5gn.jpg" height="340" width="320" style={{borderRadius:0}} /> </div>
    <div className="card"><img src="https://res.cloudinary.com/drnokmrib/image/upload/v1689137960/Home3_zyw2bt.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/drnokmrib/image/upload/v1689146169/fan_ogxayq.jpg" height="340" width="320" style={{borderRadius:0}} /></div>
    <div className="card"><img src="https://res.cloudinary.com/drnokmrib/image/upload/v1689137960/Home4_mij7im.png" height="340" width="320"style={{borderRadius:0}} /></div>
</div>
{/* <SliderImages/> */}

<footer className="footer">
        <div className="background">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/privacy">PRIVACY POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="#">PAYMENT OPTIONS</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100088095992292"><i className="fab fa-facebook-f" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136043/1_xriwsb.jpg' width={40} height={40}style={{borderRadius:50}}></img></a>
                <a href="https://twitter.com/OMG__burgers"><i className="fab fa-twitter" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136581/7_m5zlyz.jpg' width={40} height={40} style={{borderRadius:50}}></img></a>
                <a href="https://www.linkedin.com/in/omg-burgers-939437257/"><i className="fab fa-linkedin-in" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136599/5_tf2hye.png' width={40} height={40} style={{borderRadius:50}}></img></a>
              </div>
            </div>
          </div>
        </div>
        <p className='reserve'>Copyright © 2023 D-06 APPLIANCES AND CO. All Rights Reserved.</p>
      </footer>
</div>
)
};
export default Home;