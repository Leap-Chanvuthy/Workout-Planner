import {useContext } from 'react';
import { AuthContex } from '../context/AuthContext';

export const useAuthContext = () =>{
    const context = useContext (AuthContex);
    if (!context){
        throw Error ('useAuthContext must be used inside AuthContextProvider');
    }

    return context;
}