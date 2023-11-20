import axios from "axios";

const rootAPI = "http://localhost:8000/api/v1";
const userApi = rootAPI + "/user"
const transApi = rootAPI + "/transaction"

const getUserId = () => {
    const userJson = sessionStorage.getItem("user");
    const userObj = JSON.parse(userJson);
    return userObj?._id || null
}

export const postUser = async(userObj) => {
    try {
        const {data} =await axios.post(userApi, userObj);
     
        return data;
    } catch (error) {
        console.log(error);
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const loginUser = async(userObj) => {
    try {
        const {data} =await axios.post(userApi + '/login', userObj);
     
        return data;
    } catch (error) {
        console.log(error);
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const postTrans = async(userObj) => {
    try {
        const userId = getUserId();
        if(!userId){
            return {status: "error", message: "UserID not found, log out and log in again"}
        }
        const {data} =await axios.post(transApi, userObj, {
            headers: {
                Authorization: userId,
            },
        });
     
        return data;

    } catch (error) {
        console.log(error);
        return{
            status: 'error',
            message: error.message,
        }
    }
}

export const getTrans = async() => {
    try {
        const userId = getUserId();
        if(!userId){
            return {status: "error", message: "UserID not found, log out and log in again"}
        }
        const {data} =await axios.get(transApi, {
            headers: {
                Authorization: userId,
            },
        });
     
        return data;
        
    } catch (error) {
        console.log(error);
        return{
            status: 'error',
            message: error.message,
        }
    }
}