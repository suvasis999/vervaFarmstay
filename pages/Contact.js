import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from '../component/Navbar';
import { Footer } from '../component/Footer';
const Contact = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        Submit Another Response
      </button>
    </React.Fragment>
  );

  const ContactForm = (

    <form
      className="container"
     
      name="contact-form"
     
    >

      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
      />
      <label htmlFor="company">Company *</label>
      <input id="company" name="company" required type="text" />
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required />
      <button type=" button">Submit</button>
    </form>
  );

  return (
  <>
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0,}}>
     <Navbar bgColor={true}/>
     <div className="row" style={{marginRight:0,marginLeft:0}}>
     <div className="col-md-6"> 
     <main>{formVisible ? ContactForm : ConfirmationMessage}</main>
     </div>
     <div className="col-md-5 ">
     <div className="addressBlock">
        <div className="brd">
        <h1 style={{fontSize: 24+'px',paddingBottom:10+'px'}}>Contact us</h1>
       
        </div>
         <div>
        <b>Registered Address</b><br/>
Verve Consulting Private Limited<br/>
HIG-32, BDA Colony, Jaydev Vihar,<br/> 
Bhubaneshwar – 751013<br/>
<img src='/images/map.png' width='25px' className='Mapimage'/>
<a className="maplink" href='https://www.google.com/maps/place/Verve+Consulting/@20.2979995,85.8222502,17z/data=!3m1!4b1!4m5!3m4!1s0x3a1909c3c16a40e5:0xdfc4f111cd8d0731!8m2!3d20.2980222!4d85.8244254' target='_blank'>Click to Map</a><br/>
                                                                                       
<b>Bangalore Office</b><br/>
Verve Consulting (StartupHaven),<br/>
2nd floor, 128/1,<br/>
Ulsoor Road, Bengaluru, 560042<br/>
<img src='/images/map.png' width='25px' className='Mapimage'/>
<a className="maplink" href='https://www.google.com/maps/search/Verve+Consulting+(StartupHaven),+2nd+floor,+128%2F1,+Ulsoor+Road,+Bengaluru,+560042/@12.9755498,77.6162093,18z/data=!3m1!4b1' target='_blank'>Click to Map</a><br/><br/>

        </div>
        <b>For placing orders and other queries regarding seedlings:</b><br/>
• Manaswini Padhy: 7008525865; manaswini@vervefarmstay.com <br/>
• Pratikshya Rout: 8118004206; pratikshya@vervefarmstay.com <br/>


<b>For financials and investing regarding greenhouse:</b><br/>
• Srividhya – 9591245441; Srividhya@verveconsult.com<br/>

<b>For other queries:</b> <br/>
• Vignesh- Vignesh@vervefarmstay.com <br/>

      </div>
     </div>
    </div>
      <style jsx global>
        {`
          .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            grid-row-gap: 0.5em;
            padding: 100px;
          }
          .addressBlock{
            padding-top: 100px;
            padding-left:40px;
            padding-right: '40px;'
          }
         .brd{
                border-bottom: 1px solid #ddd;
                  }
          label {
            font-size:16px;
          }
          input[type="text"],
          input[type="email"]
         {
            font-size: 12px;
            border:1px solid #ddd;
            border-radius:12px;
            height: 40px;
          }
          textarea {
            font-size: 12px;
            border:1px solid #ddd;
            border-radius:12px;
            height: 100px;
          }
          button {
            width: 100%;
            margin: 0 auto;
            color: #f3f0ee;
            background-color: #022f94de;
            border: none;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            text-transform: uppercase;
            border-radius: 10px;
          }
          button:hover {
            background-color: #051f58de;
          }
        `}
      </style>
       <Footer/>
    </div>
    
     </>
  );
};

export default Contact;
