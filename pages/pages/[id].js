import React from 'react';
import Banner from '../../component/Banner';
import Content from '../../component/Content';
import Navbar from '../../component/Navbar';
import Text_w_Image from '../../component/Text_w_Image';
import parse from 'html-react-parser';
import OurTeam from '../../component/OurTeam';
import Stackholder from '../../component/Stackholder';
import { Footer } from '../../component/Footer';
import Link from 'next/link';
import Product from '../../component/Product'; 
import Hr from '../../component/Hr';
import { useRouter } from 'next/router';
import Router from "next/router";
const BlogsbyId = () => { 
   const router = useRouter()
   const [pageID, setPageID] = React.useState([]); 
    React.useEffect(function effectFunction() {
      const { id } = router.query
       setPageID(id); 
       if(id=='Faq'){
        Router.push("/Faq");
       }
       else if(id=='Contact'){
        Router.push("/Contact");
       }
       else if(id=='Gallery'){
        Router.push("/Gallery");
       }
    }, [router]);
  return (
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar bgColor={true}/> 
      <section className="homesec" id="topBan">
		  <div className="my-auto d-none d-md-block text-center px-5 " 
      style={{minHeight:450+'px',paddingTop: 100+'px'}}>
            <p style={{height: '25%'}}>{pageID} not found!!!</p>
	      </div>
     </section>
    
     
     
      <Footer/>
    </div>
    
  )
}

export default BlogsbyId;
