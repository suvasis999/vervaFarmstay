import {localhost} from './localhost';
const API_URL = localhost

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json',"X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0" }
  const res = await fetch(API_URL, {
    method: 'GET',
    headers,
    
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export const applicationSetting = async() => { 
	
  	const getData=await api.get('settings/all').then((resp)=>{
  		return resp;
	 })
  	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.message = getData.status === true 
	        ?  'SUCCESS'
	        : getData.message;
	      result.data = getData.status === true? getData.data: [];
	    }
	 	return result; 
 };  



export async function fetchApiProduct() {
    const url = `${localhost}Web_page/allPage`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "X-Api-Key":"EB896646B87A410E2F188E7FAD06CDE0"
      }
    }).then(resp => resp.json())
    .then(imgResponse => {
        //console.log(imgResponse)
        return imgResponse;
    })
  }

 export const webNavbar = async() => { 
	 const getData= await fetchAPI+'Web_page/allPage'.then((resp)=>{
        console.log(resp);
        return resp;
   })
    let result = {};

      if (!getData || ( getData && getData.length === 0)) {
        result.message = 'Unable to fetch Data...';
        result.success = false;
      } else {
        result.message = getData.status === true 
          ?  'SUCCESS'
          : getData.message;
        result.data = getData.status === true? getData.data: [];
      }
       return result; 
};

 export const loginAuth = async(values) => {
	const getData=await api.post('registered_user/login',JSON.stringify(values)).then((resp)=>{
  		return resp;
	 })
	
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...'; 
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	    }
	   return result; 
 };

 export const addUser = async(values) => {
	const getData=await api.post('registered_user/add',JSON.stringify(values)).then((resp)=>{
  		return resp;
	 })
	//console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };

 export const getServiceDetails = async() => { 
	
  	const getData=await api.get('service_details/all').then((resp)=>{
  		return resp;
	 })
  	console.log(getData)
  	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.message = getData.status === true 
	        ?  'SUCCESS'
	        : getData.message;
	      result.data = getData.status === true? getData.data: [];
	    }
	 	return result; 
 };

 export const getVehicleType = async() => { 
	
  	const getData=await api.get('vehicle/all').then((resp)=>{
  		return resp;
	 })
  	console.log(getData)
  	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.message = getData.status === true 
	        ?  'SUCCESS'
	        : getData.message;
	      result.data = getData.status === true? getData.data: [];
	    }
	 	return result; 
 };

export const getVehicle = async(values) => {
	const getData=await api.get('user_vehicle/detailUser?userId='+values).then((resp)=>{
  		return resp;
	 }) 
	console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };
 export const addVehicle = async(values) => {
	const getData=await api.post('user_vehicle/add',JSON.stringify(values)).then((resp)=>{
  		return resp;
	 })
	//console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };
export const delVehicle = async(values) => {
	const getData=await api.post('user_vehicle/delete',JSON.stringify(values)).then((resp)=>{
  		return resp;
	 })
	console.log(getData);
	let result = {};

		if (!getData || ( getData && getData.length === 0)) {
	      result.message = 'Unable to fetch Data...';
	      result.success = false;
	    } else {
	      result.status = getData.status === true
	        ?  getData.status
	        : getData.status;
	      result.data = getData.status === true? getData.data: [];
	      result.message=getData.status===true?getData.message:getData.message;
	    }
	   return result; 
 };

