import React , { useState } from 'react';
import {localhost} from '../config/localhost';


function Product(props)  {
   
    
    
    return (
      <section class="homesec " id="Product" style={{ minHeight: '450px',width:'100%',backgroundColor: 'white',padding:'40px 0px'}}>
        <div className="col-lg-12 col-md-12 col-12 px-xl-5">
        <h3 className="animated fadeInUp display-4 text-center ">Product Range</h3>
        {props.dtls.map((item,i) => {
          return (
            <div className="maincontainer" key={i}>
            <div className="back">
            <div style={{width:'100%',height:80+'px'}}>
                <h2>{item.prdName}</h2>
            </div>
                <div style={{padding:10+'px'}} dangerouslySetInnerHTML={{ __html: item.prodDtls }}></div>
            </div>
            <div className="front">
                <div className="image">
                
                <img src={''+localhost+'uploads/product_tbl/'+ item.prodImg } width="300px" height="300px" className="flipimg"/>
                <h2>{item.prdName}</h2>
                </div>
            </div>
        </div>
          );
        })}
        
      </div>
      </section>
     
    )
}

export default Product
