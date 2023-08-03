import {  useState  } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error , setError] = useState (null);
    const [isLoading , setIsloading] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async (email , password) => {
        setIsloading(true);
        setError(null);
        
        const respone = await fetch ('/api/user/login' , {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email , password})
        });

        const json = await respone.json();
        
        if (!respone.ok){
            setIsloading(false);
            setError(json.error);
        }

        if (respone.ok){
            // save current user in local storage
            localStorage.setItem ('user' , JSON.stringify(json));

            // update auth context

            dispatch ({type : 'LOGIN' , payload : json})
            
            setIsloading(false);

        }
    }

    return { login, isLoading, error }

}