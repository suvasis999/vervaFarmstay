import React from 'react';
import Banner from '../component/Banner';
import Content from '../component/Content';
import Navbar from '../component/Navbar';
import Text_w_Image from '../component/Text_w_Image';
import parse from 'html-react-parser';
import OurTeam from '../component/OurTeam';
import Stackholder from '../component/Stackholder';
import { Footer } from '../component/Footer';
import Link from 'next/link';
import Product from '../component/Product';
import Hr from '../component/Hr';
const Seedlings = () => {
  return (
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar/>
      <section className="homesec" id="topBan">
		  <div className="my-auto d-none d-md-block text-center px-5 HeaderImage" style={{height: 24+'vh'}}>
            <p style={{height: '25%'}}></p>
	        
            
	       </div>
     </section>
     <section className="homesec pt-5" id="Belief">
		<div className="container-fluid py-lg-5">
			<div className="row px-xl-5">
      <div className="col-lg-5 col-md-5 col-12 text-center">
					<img src='images/Seeding.png' style={{width: 415+'px'}} className="card-img"/>
				</div>
				<div className="col-lg-7 col-md-7 col-12 my-auto">
					<h3 className="animated fadeInUp display-4 text-secondary ">Seedings</h3>
          <p className="animated fadeIn" style={{fontWeight:400,fontSize:1.4+'rem'}} > ‘Quality seedlings 
   Enriched Farming’
            </p>
					<p>We aim to zero in on our ultimate goal to produce healthy plant materials which will, not only improve the quality of farming but also seek to achieve a healthy relationship between farmers, crops and environment. </p>
<p>But how?  Using seedlings instead of directly sowing onto the main field. Seedlings are baby plants that have been planted from seeds and grown out by someone else (which is us!) And as the old saying goes that those plants which are taken care of from start grow out to be the best. </p>
<p>Through seedlings, the farmers enjoy the freedom to exploit their spare time while we prepare healthy and quality seedlings for them in our protected structures. Savings farmer’s time and resources, experts at our business strive to provide seamless care and service to the seedlings which reduces on-field mortality and ensures healthy, disease-free growth once they are transplanted to the main field.  </p>
<p>With Verve, farmers can avail seedlings of their preferred varieties from trusted seed companies and in addition also have the benefit of getting suggestions and assistance from our experienced team. </p>
<p style={{textAlign:'center',fontWeight:'bold'}}>Visit our <Link href="/faq"><a>FAQs </a></Link>section for more insights </p>

				</div>
      </div>
      </div>
      
      <Hr/>
      
      </section>
      <Product/>
     
     
      
      
      <section className="homesec pt-5" id="Whoweare">
		<div className="container-fluid py-lg-5">
			<div className="row px-lg-5">
				<div className="col-lg-3 col-md-3 col-12 py-lg-5 my-auto ">
                </div>
                </div></div></section>
     
      <Footer/>
    </div>
    
  )
}

export default Seedlings
