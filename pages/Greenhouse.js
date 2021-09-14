import React from 'react';
import Banner from '../component/Banner';
import Content from '../component/Content';
import Content_red_gd from '../component/Content_red_gd';
import Navbar from '../component/Navbar';
import Text_w_Image from '../component/Text_w_Image';
import parse from 'html-react-parser';
import OurTeam from '../component/OurTeam';
import Stackholder from '../component/Stackholder';
import { Footer } from '../component/Footer';
import Link from 'next/link';
import Product from '../component/Product';
import Hr from '../component/Hr';
const Greenhouse = () => {
  return (
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar/>
      <section className="homesec" id="topBan">
		  <div className="my-auto d-none d-md-block text-center px-5 HeaderImage" style={{height: 24+'vh'}}>
            <p style={{height: '25%'}}></p>
            
            
	       </div>
     </section>
     <Content
        bgImage='images/greenhouse.jpg'
        title='Green House &#9679;'
        textColor='#ffffff'
        Details={parse(`<p>Passionate about farming, we at Verve strive to grow healthy and tasty vegetables and fruits for the common public using appropriate technology to reduce conventional agricultural risks and maximize resource utilization.</p>
<p>We seek investors who share our belief and like our concept and would like to invest their money in hi tech agricultural endeavour. We provide opportunity whereby one can invest a fixed sum of money in return for land title with climate-controlled greenhouse. In the next step, we provide opportunity whereby one can lease out the land with greenhouse for farming activities that will be managed by Verve team. </p>
<p>Large scale farm clusters will be climate-controlled greenhouses featuring the latest technologies for structure, climate control methodologies, irrigation and control systems.
Each cluster location is selected with good access to water, electricity, labour and road.
Farm lands are planned to have capability to grow multiple varieties of crops using different technologies such as hydroponics and open farm. </p>
<div><b>Key Success Factors:</b></div>
<ul>
  <li>1.	Low-cost structures optimized for hot, humid, coastal region</li>
  <li>2.	Climate control to be achieved by using saw tooth top ventilated greenhouse with side vents, augmented by fan & pad evaporative cooling, external sprinkler based evaporative cooling and internal geothermal cooling</li>
  <li>3.	Data driven crop mix decision to optimize profitability</li>
  <li>4.  In-house experienced engineers and agronomists to develop indigenous low-cost control systems and adopt contemporary technologies for climate control and nutrition dosing</li>
  <li>5.	Solar power panels to serve for power requirement</li>
</ul>
`)}
      />


<Content_red_gd
        bgImage='images/farmstay.jpg'
        title='Farmstay &#9679;'
        textColor='#ffffff'
        Details={parse(`<p>Each farm cluster has a dedicated farm stay facilities within it. It has 40+ suites in the lap of nature built with environmental friendly architecture methods. These dedicated stay facilities allow owners/supervisors of farms to stay for leisure and/or supervise farms.  

</p>
`)}
      />

<Content
        bgImage='images/laboratory.jpg'
        title='Laboratory &#9679;'
        textColor='#ffffff'
        Details={parse(`<p>We have a dedicated laboratory with equipment to measure the key parameters of temperature, humidity, light spectrum & intensity, water temperature, pH, EC, CO2 concentration, plant characteristics etc. This enables us to continuous inhouse research and improvement.  

</p>
`)}
      />
    
     
     
      
      
      <section className="homesec pt-5" id="Whoweare">
		<div className="container-fluid py-lg-5">
			<div className="row px-lg-5">
			</div></div></section>
     
      <Footer/>
    </div>
    
  )
}

export default Greenhouse
