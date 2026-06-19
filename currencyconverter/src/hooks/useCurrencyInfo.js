import { useEffect,useState } from "react";
function useCurrencyInfo(currency) {
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/90fe42c2ae5bf87ef152ea6b/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.conversion_rates))
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo