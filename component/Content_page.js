import React from 'react'
import Product from './Product'; 
import {localhost} from '../config/localhost';
function Content_page(props) {
    return (
        <>
        <section className="homesec" id="topBan">  
        {props.bg!=='NO'?

		  <div className="my-auto d-none d-md-block text-center px-5 pd-100 "
          style={{  
          background: "linear-gradient(to bottom, rgba(21,112,67, .80) 30%, rgba(0,0,0, .80) 80%),  url(" +localhost+"uploads/web_content/" + props.bg +")",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          color:'white',
          minHeight:450+'px'
        }}
          >
            <p style={{height: '25%'}}></p>
	        <p className="animated fadeInDown delay-4s carousel-header">{props.title}</p> 
	        <p className="animated fadeIn delay-4s px-5 " style={{fontWeight:400,fontSize:1.4+'rem'}} > {props.punchline}
            <a   style={{color:'white',textDecoration:'none'}}>  {props.url}</a></p>
            {props.thumb!=='NO'?
            <div className="row px-xl-5">
                <div className="col-lg-5 col-md-5 col-12 text-center">
                    <img src={''+localhost+'uploads/web_content/'+ props.thumb } style={{width: 320+'px'}} className="card-img"/>
                </div>
                <div className="col-lg-7 col-md-7 col-12 my-auto">
                {props.thumb}dddd
                    <h3 className="animated fadeInUp display-4 text-secondary ">{props.titile}</h3>
                     <div className="product-des" 
                    dangerouslySetInnerHTML={{ __html: props.details }}>
                 </div>
                    
                </div>
               </div>
                :
                 <div className="row px-xl-5">
                <div className="product-des col-md-12" 
                    dangerouslySetInnerHTML={{ __html: props.details }}>
                </div>
                </div>
            }
             
            </div>
           :
           <div className="my-auto d-none d-md-block text-center px-5 pd-100"
           style={{  
           color:'black',
           minHeight:450+'px'
        }}
           >
            <p style={{height: '25%'}}></p>
            <p className="animated fadeInDown delay-4s carousel-header">{props.title}</p> 
            <p className="animated fadeIn delay-4s px-5 " style={{fontWeight:400,fontSize:1.4+'rem'}} > {props.punchline}
            <a   style={{color:'white',textDecoration:'none'}}>  {props.url}</a></p>
            
             {props.thumb!=='NO'?
            <div className="row px-xl-5">
                <div className="col-lg-5 col-md-5 col-12 text-center">
                    <img src={''+localhost+'uploads/web_content/'+ props.thumb } style={{width: 320+'px'}} className="card-img"/>
                </div>
                <div className="col-lg-7 col-md-7 col-12 my-auto">
                    <h3 className="animated fadeInUp display-4 text-secondary ">{props.titile}</h3>
                     <div className="product-des" 
                        dangerouslySetInnerHTML={{ __html: props.details }}>
                    </div>
                    
                </div>
                </div>
                :
                <div className="row px-xl-5">
                <div className="product-des" 
                    dangerouslySetInnerHTML={{ __html: props.details }}>
                </div>
                </div>
            }

           </div>
       }
     </section>
     {props.itemId==19? 
        <Product dtls={props.productDetails}/>:<></>
     }
        </>
    )
}

export default Content_page
