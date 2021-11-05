import React from 'react';
import Content_page from '../../../component/Content_page';
import Content from '../../../component/Content';
import Navbar from '../../../component/Navbar';
import Text_w_Image from '../../../component/Text_w_Image';
import parse from 'html-react-parser';
import OurTeam from '../../../component/OurTeam';
import Stackholder from '../../../component/Stackholder';
import { Footer } from '../../../component/Footer';
import Link from 'next/link';
import Project from '../../../component/Project';
import { useRouter } from 'next/router';
import {localhost} from '../../../config/localhost';


const Page = () => {
  const [page, setPage] = React.useState([]); 
  const [product, setProduct] = React.useState([]); 
  const [loader,setLoader]=React.useState([]);
  const router = useRouter()
  

   React.useEffect(function effectFunction() {
      const { p1,p2 } = router.query
        async function fetchPage() {
          setLoader(true);
           // const url = 'http://localhost:80/farm/api/web_content/all?X-Api-Key=EB896646B87A410E2F188E7FAD06CDE0&filters[0][co][0][fl]=menuId&filters[0][co][0][op]=equal&filters[0][co][0][vl]='+p2+'';
            const url=''+localhost+'api/web_content/all?X-Api-Key=EB896646B87A410E2F188E7FAD06CDE0&filters[0][co][0][fl]=menuId&filters[0][co][0][op]=equal&filters[0][co][0][vl]='+p2+'';
            const res = await fetch(url, {
            method: 'GET',
           
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0",
                
            }
            }).then(resp => resp.json())
            .then(Response => {
              
               console.log(Response.data.web_content);
                if(Response.status==true){
                    setPage(Response.data.web_content); 
                    setLoader(false);
                }
                else{
                    setLoader(false);
                    console.log("data not found");
                }
                
            })
            }
            fetchPage();
    }, [router]);

   React.useEffect(function effectFunction() {
     
        async function fetchProduct() {
           setLoader(true);
            //const url = 'http://localhost:80/farm/api/product_tbl/all?X-Api-Key=EB896646B87A410E2F188E7FAD06CDE0';
            const url=''+localhost+'api/product_tbl/all?X-Api-Key=EB896646B87A410E2F188E7FAD06CDE0';
            const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0",
                
            }
            }).then(resp => resp.json())
            .then(Response => {
             console.log(Response);
                if(Response.status==true){
                    setProduct(Response.data.product_tbl); 
                     setLoader(false);
                }
                else{
                    console.log("data not found");
                     setLoader(false);
                }
                
            }) 
            }
            fetchProduct();
    }, [router]);
  return (
    <div className="container-fluid " style={{paddingRight:0,paddingLeft:0}}>
      <Navbar bgColor={true}/>
      {loader ? 
         <div style={{minHeight: 450+'px',textAlign: 'center',paddingTop:160+'px'}}>
        <img id="logo"  src="/images/loader.gif" style={{width:50+'px'}} />
        
        </div>
        :
          <div style={{minHeight: 300+'px'}}>

       {page.map((item,index) => 
        <Content_page 
        title={item.menuId.menuName}
        punchline=""
        bg={item.contBg==''?'NO':item.contBg}
        details={item.contDtls}
        thumb={item.thumbImg==''?'NO':item.thumbImg}
        itemId={item.menuId.menuId}
        productDetails={product}
        key={index}
      />
       )}
     </div>
      }
      
      <Footer/>
    </div>
    
  )
}


export default Page;
