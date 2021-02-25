import axios from "axios";
const loc_api = () => {
    return (  );
}
 
export default loc_api;



export default class CountryList extends React.Component {
    state = {
      persons: []
    }
    var auth_token='';
    async function get_auth_token(){
    
        var res=await axios.get("https://www.universal-tutorial.com/api/getaccesstoken",{
            headers:{
                "api-token":"uILUP-BR9kPhMpoOfE-JVeSDBX7qcR7ly51oeDotYI9hrrsd3rvJKCCuH2iox2Ee8pQ",
                "user-email":"rishabhprashr@gmail.com"
            }
        });
        auth_token = res.data.auth_token;
    }
    let dropdown=document.getElementById('country');
    async function get_country(){
        var res=await axios.get("https://www.universal-tutorial.com/api/countries/",{
            headers:{
                "Authorization":`Bearer ${auth_token}`
            }
        });
        var country=document.querySelector("#country");
        var html=''; 
        for(let i=0;i<res.data.length;i++){
            console.log(res.data);
            html+=`<option name=${res.data[i].country_name}>${res.data[i].country_name}</option>`;
            
        }
        country.innerHTML+=html;    
    }
    async function get_state(country)
    {
        var res=await axios.get(`https://www.universal-tutorial.com/api/states/${country}`,{
            headers:{
                "Authorization":`Bearer ${auth_token}`
            }
        });
        var state=document.querySelector("#state");
        var html='<option value="">Select State</option>';
        for(let i=0;i<res.data.length;i++){
            html+=`<option name=${res.data[i].state_name}>${res.data[i].state_name}</option>`;
        }
        state.innerHTML=html;
    }


  
    
  }


