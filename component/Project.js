import React from 'react';
import Link from 'next/link';
const Project = () => {
    return (
        <section className="homesec pt-5" id="Belief">
		<div className="container-fluid py-lg-5">
			<div className="row px-xl-5">
            <div className="col-lg-7 col-md-7 col-12 my-auto text-end">
					<h3 className="animated fadeInUp display-4 text-secondary ">Our Project &#9679;</h3>
					<p>Indian agriculture faces a lot of known problems such as market instability, weather uncertainty, small landholdings, lack of money & supervision time, low wages, and lack of scientific research.	</p>
        <p>Hence through our seedlings and greenhouse venture, our two major target customers are farmers and investors respectively. </p>
        <p>The farmers can enjoy our service of delivering the best seedling in the market produced in special Hi-Tech Polyhouses stretched at an area of around 3 acres located near Bhubaneshwar, Odisha, marking our first project in this venture. </p>
        <p><Link href="/Seedlings"><a><b>Click here</b></a></Link> to Know More.</p>
        <p>Under greenhouse, our concept is to facilitate capital from individuals who have money and interest to invest in agriculture sector (but do not have the time to get involved fully) to develop a large farming operation (multiples of 500 acres) with climate-controlled greenhouses to mitigate weather risk, managed by professionals who will drive to optimization and valuation to mitigate market risk with organized and skilled manpower for round the year operations. Further, farmstay suites will be constructed in the lap of nature so that supervision of farm can happen conveniently for days with leisure and good facilities. The whole venture will be supported by a research and development team with dedicated lab for agriculture, agroecology and soil science.</p>
        <Link href="/Greenhouse"><a ><b>Click here</b></a></Link> to Know More.
				
					
				</div>
				<div className="col-lg-5 col-md-5 col-12 text-center">
					<img src='images/whatwedo.png' style={{width: 320+'px'}} className="card-img"/>
				</div>
            </div>
        </div>
        </section>
    )
}

export default Project
