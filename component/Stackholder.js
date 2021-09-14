import React , { useState } from 'react';
import Sample_data from '../config/Sample-data'; 

function Stackholder()  {
    const [stackData, setstackData] = useState(Sample_data.stackHolder);
    
    
    return (
        <>
        <div className="container-fluid py-lg-5">
        <div class="row p-xl-5">
        {stackData.length > 0 && (
    Array.from({ length: Math.ceil(stackData.length / 7) }, (_, i) => (
      <div className="col-md-4" key={`row${i}`}>
      <h4 className="mdot  text-center text-secondary"><i className='fas fa-users'></i>&nbsp;&nbsp;Stakeholders</h4>
      <ul className="list-group people">
      {
        stackData.slice(i * 7, (i + 1) * 7)
          .map((item,i) => (
            
            <li className="list-group-item" key={i}>&#9679;&nbsp;&nbsp;{item.name} <span className="desn">–{item.desg}</span></li>
          ))
      }
      </ul>
      </div>
    ))
  )}
      </div>
      </div>
        </>
    )
}

export default Stackholder
