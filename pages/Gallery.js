import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from '../component/Navbar';
import { Footer } from '../component/Footer';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: '../images/gallery/BuildingExternal.jpg',
    thumbnail: '../images/gallery/BuildingExternal.jpg',
  },
  {
    original: '../images/gallery/CoWorking.jpg',
    thumbnail: '../images/gallery/CoWorking.jpg',
  },
  {
    original: '../images/gallery/EntranceInternal2.jpg',
    thumbnail: '../images/gallery/EntranceInternal2.jpg',
  },
  {
    original: '../images/gallery/FourSeater.jpg',
    thumbnail: '../images/gallery/FourSeater.jpg',
  },
  {
    original: '../images/gallery/FreeSeating1.jpg',
    thumbnail: '../images/gallery/FreeSeating1.jpg',
  },
  {
    original: '../images/gallery/FreeSeating2.jpg',
    thumbnail: '../images/gallery/FreeSeating2.jpg',
  },
  {
    original: '../images/gallery/MeetingRoom1.jpg',
    thumbnail: '../images/gallery/MeetingRoom1.jpg',
  },
  {
    original: '../images/gallery/MeetingRoom2.jpg',
    thumbnail: '../images/gallery/MeetingRoom2.jpg',
  },
  {
    original: '../images/gallery/Parking.jpg',
    thumbnail: '../images/gallery/Parking.jpg',
  },
  {
    original: '../images/gallery/Rooms.jpg',
    thumbnail: '../images/gallery/Rooms.jpg',
  },
  {
    original: '../images/gallery/SofaMeeting1.jpg',
    thumbnail: '../images/gallery/SofaMeeting1.jpg',
  },
  {
    original: '../images/gallery/SofaSeating_Lockers.jpg',
    thumbnail: '../images/gallery/SofaSeating_Lockers.jpg',
  },
  {
    original: '../images/gallery/TwoSeater2.jpg',
    thumbnail: '../images/gallery/TwoSeater2.jpg',
  },
  {
    original: '../images/gallery/xxBuildingExternal2.jpg',
    thumbnail: '../images/gallery/xxBuildingExternal2.jpg',
  },
  {
    original: '../images/gallery/xxCoWorking1.jpg',
    thumbnail: '../images/gallery/xxCoWorking1.jpg',
  },
  {
    original: '../images/gallery/xxCoWorking3.jpg',
    thumbnail: '../images/gallery/xxCoWorking3.jpg',
  },
  {
    original: '../images/gallery/xxEntranceInternal.jpg',
    thumbnail: '../images/gallery/xxEntranceInternal.jpg',
  },
  {
    original: '../images/gallery/xxSofaMeeting2.jpg',
    thumbnail: '../images/gallery/xxSofaMeeting2.jpg',
  },
  {
    original: '../images/gallery/xxSofaMeeting3.jpg',
    thumbnail: '../images/xxSofaMeeting3.jpg',
  },
  {
    original: '../images/gallery/xxSofaMeeting4.jpg',
    thumbnail: '../images/gallery/xxSofaMeeting4.jpg',
  },
  {
    original: '../images/gallery/xxTwoSeater1.jpg',
    thumbnail: '../images/gallery/xxTwoSeater1.jpg',
  },

];
const Gallery = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  

  return (
  
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0,}}>
     <Navbar />
     <div className="row" style={{marginRight:0,marginLeft:0,minHeight:300+'px',paddingBottom: 60+'px',paddingTop:100+'px'}}>
     
     <div className='col-md-8 mauto'>
     <ImageGallery items={images}
     thumbnailHeight={100}
     thumbnailWidth={120}
      showNav={false}
      thumbnailPosition={'left'} 
      autoPlay={true}
      />

     </div>
     
     </div>
      <style jsx global>
        {`
         
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
          .mauto{
            margin:0 auto;
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
    
    
  );
};

export default Gallery;
