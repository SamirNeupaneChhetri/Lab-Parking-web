import axios from 'axios';

const ApiUrl = 'http://localhost:7777/api';

const signup = async (name, email, password) => {
    try {
        const response = await axios.post(`${ApiUrl}/signup`, {
            name,       // Include name
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Signup failed";  
    }
}

const login = async (email, password) => {
    try {
        const response = await axios.post(`${ApiUrl}/login`, {
            email,
            password
        });
        return response.data; // Return data for further processing
    } catch (error) {
        throw error.response?.data?.message || "Login failed";  
    }
};



export default {
    signup,
    login
}
