import React, { useState, Fragment,useEffect  } from 'react';
import {localhost} from '../config/localhost';
import Link from 'next/link';
export const Footer = () => {
	 const [menu, updateMenu] = React.useState([]); 
 
    React.useEffect(function effectFunction() {
        async function fetchMenu() {
            const url = `${localhost}api/web_menu/all?X-Api-Key=EB896646B87A410E2F188E7FAD06CDE0&sort_order=ASC`;
            
            const res = await fetch(url, {
            method: 'GET',
           
            headers: {
                'Accept': 'application/json',
                "X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0",
                
            }
            }).then(resp => resp.json())
            .then(Response => {
                console.log('###########################')
                console.log(Response.data.web_menu);
                if(Response.status==true){
                    updateMenu(Response.data.web_menu); 
                }
                else{
                    console.log("data not found");
                }
                
            })
            }
            
            fetchMenu();
    }, []);
    return (
        <>
           	<footer className="bg-dark text-white ">
		<div className="container-fluid px-lg-5 footerLink" style={{display: 'none'}}>
			<div className="p-5" >
				<div className="row" style={{lineHeight:20+'px',fontSize: .8+'rem', fontWeight: 300}}>
					
					<div className="col-12 text-center" >
                    {menu.map((item,index) =>
                       <Link href={"/pages/" + item.parentPageId.pageSlug}> 
                        <a className="text-white px-3" >{item.menuName}</a>
                      </Link>
                    )}
                     

					</div>
				</div>
				
				
		</div>
        </div>
		<div className="my-auto" style={{backgroundColor: 'black'}}>
			<p className="text-light text-center py-5">Copyright protected by Verve Farmstay, 2021</p>
		</div>
	</footer>

 
        </>
    )
}
