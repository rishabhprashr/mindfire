import axios from "axios";
export default function country(){
var auth_token='';
async function get_auth_token(){
    
    var res=await axios.get("https://www.universal-tutorial.com/api/getaccesstoken",{
        headers:{
            "api-token":"1gwAOiIGHy-nDpmdrmINA8VUFu8HS9KBwY9W5suC4BKioIQV4SEDqN6nXmsfdQdxROA",
            "user-email":"unnmeshmishra@gmail.com"
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
        // option=document.createElement('option');
        // option.text=res.data[i].country_name;
        // option.value=res.data[i].country_short_name;
        // dropdown.add(option);
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
window.onload=(async ()=>{
    
    await get_auth_token();
    await get_country();
    var country=document.querySelector("#country");
    var state=document.querySelector("#state");
    country.addEventListener("change",async ()=>{ 
            await get_state(country.value);
            state.disabled=false;
    });
});
}