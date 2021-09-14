import React , { useState } from 'react';
import Sample_data from '../config/Sample-data'; 

function Product()  {
    const [productData, setproductData] = useState(Sample_data.productRange);
    
    
    return (
      <section class="homesec pt-5 px-xl-5" id="Product" style={{float:'left',width:'100%'}}>
        <div className="col-lg-12 col-md-12 col-12 px-xl-5">
        <h3 className="animated fadeInUp display-4 text-center ">Product Range</h3>
        {productData.map((item,i) => {
          return (
            <div className="maincontainer" key={i}>
            <div className="back">
                <h2>{item.name}</h2>
                <p>{item.Details}</p>
            </div>
            <div className="front">
                <div className="image">
                <img src={item.Image} className="flipimg" width="300px" height="300px"/>
                <h2>{item.name}</h2>
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
