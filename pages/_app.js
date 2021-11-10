import Head from "next/head";
import Router from "next/router";
import NextNProgress from 'nextjs-progressbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCoffee)

function MyApp({ Component, pageProps }) {

return ( 
<>
<Head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" type="text/css" href="css/style.css"/>
 	
 	<link rel="stylesheet" type="text/css" href="css/modal.css"/>
 	<link rel="stylesheet" type="text/css" href="css/_nprogress.css"/>
 	<link rel="stylesheet" href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.css"/>

 	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
 	<link rel="stylesheet" href="css/bootnavbar.css"></link>
<link
href="css/bootstrap.min.css" rel="stylesheet" />


</Head>
      <NextNProgress color="#000000" height="10"/>
      <Component {...pageProps} />
</>
);
}
export default MyApp;