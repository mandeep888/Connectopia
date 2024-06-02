import * as api from '../api/index'
import { AUTH} from '../constants/actionTypes';

export const signIn = (fromData , navigate)=> async(dispatch)=>{
    try {
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}
export const signUp = (fromData , navigate)=> async(dispatch)=>{
    try {
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}