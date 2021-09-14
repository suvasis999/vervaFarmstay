import React , { useState } from 'react';
import Sample_data from '../config/Sample-data';
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
import FAQ from '../component/FAQ';
export const Faq = () => {
    const [faqData, setfaqData] = useState(Sample_data.faqDataA);
    const [faqDataB, setfaqDataB] = useState(Sample_data.faqDataB);
    const toggleFAQ = index => {
        setfaqData(faqData.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      } 

      const toggleFAQB = index => {
        setfaqDataB(faqDataB.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      } 

    return (
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar/>
      <section className="homesec" id="topBan">
		  <div className="my-auto d-none d-md-block text-center px-5 HeaderImage" style={{height: 24+'vh'}}>
            <p style={{height: '25%'}}></p>
	        <h3 className="animated fadeInUp display-4 text-secondary text-white">FAQ</h3>
            
	       </div>
     </section>
            
            <div className="faqs">
            <h3 className="animated fadeInUp text-secondary " style={{paddingLeft:20+'px'}}>About the company</h3>
            {faqData.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} /> 
            ))}
            </div>

            <div className="faqs">
            <h3 className="animated fadeInUp text-secondary " style={{paddingLeft:20+'px'}}>Seedlings</h3>
            {faqDataB.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQB} key={i}/>
            ))}
            </div>
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

export default Faq
