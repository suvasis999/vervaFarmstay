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
import Project from '../component/Project';
const index = () => {
  return (
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar/>
      <Banner
        title="About Us"
        punchline="Verve Farmstay is an associate company of"
        url="Verve Consulting"
        details="We, as a division of Verve Consulting, at Farm stay work as a team with a common goal of finding solution for the increasing problems 
            in Indian agriculture through quality farming techniques and cutting-edge technologies to help farmers
             exploit their opportunities through our services."
      />
      <Text_w_Image 
        titile='Our Belief & Vision &#9679;'
        Details='Our team is a diverse mix of people from varied backgrounds sharing a common belief that agriculture in India can be optimized and the value generated can be increased multi-fold by adopting technology to local conditions with innovative and indigenous cost effective mechanisms.
        Our vision is to establish the largest sustainable and scalable hi tech farming business in India.'
        leftImage={true}
        image='images/vision.png'
        hr={true}
      />
      <Text_w_Image 
        titile='&#9679; Mission'
        Details='Strive to grow healthy and tasty vegetables and fruits for the common public using appropriate technology to reduce conventional agricultural risks and maximize resource utilization. '
        leftImage={false}
        image='images/mission.png'
        hr={true}
      />
      <Content
        bgImage='images/agriBack.jpg'
        title='Our Background &#9679;'
        textColor='#ffffff'
        Details={parse(`<p>Verve Farmstay is an associate company of Verve Consulting.</p><p> 
Verve is a leading professional services firm, offering advisory services to a list of Clients ranging
from Top 100 Companies of India to many State Governments in India to bilateral and multilateral funding
organisations like World Bank, DFID and ADB. Verve is founded by three IIM alumni, with >60 years of combined
experience in various business domains. Verve has >50 other business associates with expertise in diverse
sectors.</p><p>
Verve operates in domains of Climate Change and Infrastructure; in each of these service areas, we identify problems, develop solutions and provide implementation support to Clients for achieving sustainable benefit from the Consulting intervention riding on Organization’s knowledge and rich experience gathered across diverse regions and thematic areas across Globe.  Verve has deep insights to respond to likely technological & implementation challenges in the Client engagements. </p><p>
Further, Verve proposes to leverage this deep organizational knowledge to catalyse entrepreneurship development of Odisha by serving start-ups with their incubation service intervention called StartupHaven. We have been selected under the national government program for startups - Atal Incubation Program. </p><p>
Verve recognizes that large-scale outreach is possible through strategic partnerships and alliances; in that direction, we work with diverse range of Partners including Academic Institutions and Business Advisors operating in different parts of the World. For instance, Verve has conducted research over past 5 years with various IITs on developing alternate and efficient materials in construction space. Verve is now executing the idea to establish a new vertical for community farming of
commercial agro-products and horticultural programs on a P&L basis – in the form of Verve Farmstay.</p>`)}
      />
      <OurTeam
        Image='images/team.png'
      />
      <Stackholder/>

     <Project/>
      <Text_w_Image 
        titile='What We Do &#9679;'
        Details={parse(`<p>Indian agriculture faces a lot of known problems such as market instability, weather uncertainty, small landholdings, lack of money & supervision time, low wages, and lack of scientific research. </p><p>
Our concept is to facilitate capital from individuals who have money and interest to invest in agriculture sector (but do not have the time to get involved fully) to develop a large farming operation (multiples of 500 acres) with climate controlled greenhouses to mitigate weather risk, managed by professionals who will drive optimization and value to mitigate market risk, with organized and skilled manpower for round the year operations. Further, farm stay suites will be constructed in the lap of nature so that supervision of farm can happen conveniently for days with leisure and good facilities. The whole venture will be supported by a research and development team with dedicated lab for agriculture, agroecology and soil science. 
 
					</p>`)}
        leftImage={true}
        image='images/whatwedo.png'
        hr={true}
      />
       <Text_w_Image 
        titile='&#9679; Who We Seek'
        Details={parse(`<p>We seek investors who share our belief and like our concept and would like to invest their money in hi tech agricultural endeavour. We provide opportunity whereby one can invest a fixed sum of money in return for land title with climate controlled greenhouse. In the next step, we provide opportunity whereby one can lease out the land with greenhouse for farming activities that will be managed by Verve team. Please refer to financials section for more details. 
</p>`)}
        leftImage={false}
        image='images/whoweseek.png'
        hr={false}
      />
      <Footer/>
    </div>
    
  )
}

export default index
