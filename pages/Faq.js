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

export const faq = () => {
    const [faqData, setfaqData] = useState([]);
    const [faqDataB, setfaqDataB] = useState(Sample_data.faqDataB);
    const [isOpen, toggleOpen] = useState(-1);
    React.useEffect(function effectFunction() {
      async function fetchFaq() {
         // const url = `http://192.168.0.106/farm/api/Web_faq/allFaq`;
         const url=`http://vervefarmstay.moodishare.com:80/api/web_faq/allFaq`
         
          const res = await fetch(url, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              "X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0"
          }
          }).then(resp => resp.json())
          .then(Response => {
              if(Response.status==true){
                console.log(Response.data.faq_page);
                setfaqData(Response.data.faq_page); 
              }
              else{
                  console.log("data not found");
              }
              
          })
          }
          fetchFaq();
  }, []);


    const toggleFAQ = index => {
        setfaqData(faqData.map((faq, i) => {
          alert(i);
          if (i === index) {
            faq.open ='true' //!faq.open
          } else {
            faq.open = 'false';
          }
    
          return faq;
        }))
      } 

      const showTab=(val)=>{
        console.log(val);
        //alert(val);
        toggleOpen(isOpen === val ? -1 : val);
       // toggleOpen(val);
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
            {faqData.map((faq, i) => (
              <>
              <h3 className="animated fadeInUp text-secondary " style={{paddingLeft:20+'px'}}>
              
              <section
                className="not-found-controller"
                dangerouslySetInnerHTML={{ __html: faq.catname }}
            />
              </h3>
              {faq.menu.map((faqSub, i)=>(
                <div key={`item-${faqSub.webfaqid}`} className={`faq ${isOpen === faqSub.webfaqid ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => showTab(faqSub.webfaqid)}>{faqSub.faqtitle}</div>
                <div className="faq-answer">{faqSub.faqdtls}</div>
                
               </div>
              ))}
            </>
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

export default faq
