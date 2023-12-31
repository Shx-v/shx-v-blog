import {useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]= useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const abortCont= new AbortController();

        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Something went wrong')
                }
                return res.json();
            })
            .then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if(err.name==='AbortError'){
                    console.log('Fetch Aborted')
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
        },750)
        return () => abortCont.abort();
    },[]);

    return {data,isPending,error}
    
}
 
export default useFetch;