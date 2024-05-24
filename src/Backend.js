import axios from 'axios';
import FormData from 'form-data';


const authorizationToken = process.env.REACT_APP_AUTH;
const apiKey = process.env.REACT_APP_APIKEY;

const apiClientUrl = process.env.REACT_APP_CLIENT_APIURL;
const apiGatewayUrl = process.env.REACT_APP_GATEWAY_APIURL;


//code snippet for get file directly from IPFS gateway

export async function addFile(file) {
    const data = new FormData();
    data.append('file', file);
  
    try {
        console.log("In add file API");
        const url = `${apiClientUrl + apiKey}/api/v0/add?recursive=false`;
        const headers = {
            'Authorization': authorizationToken,
            'Content-Type': 'multipart/form-data',
        };

        const response = await axios.post(url, data, { headers: headers });
        
        if (response.status !== 200) throw new Error(response.status);
        
        const responseData = response.data.Hash;
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.log(error);
        return 'Invalid file';
    }
}
  
  export async function getFile(hash) {
  
      try {
          console.log("In get file API: " + hash);
          const url = `${apiGatewayUrl + apiKey}/ipfs/${hash}`;
          const response = await axios.get(url);
          if (!response.status === 200) throw new Error(response.status);
          
            const responseData = response;
          console.log(responseData);
          return url; // Security Concern, giving apikey in url
          
      }
      catch (error) {
          console.log(error);
          throw new Error('Failed to retrieve file');
      }
  }
  