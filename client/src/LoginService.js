import axios from 'axios'

const url = 'http://3.234.246.29:8087/api/Users/'

class LoginService {
    static loginUser(email, password){
        return axios.post(url + 'login', {
            email, 
            password
        })
    }

    static registerUser(first_name, last_name, email, password, c_password){
        if(password !== c_password) return alert('Passwords must match!'); 
        return axios.post(url + 'register', {
            first_name, 
            last_name, 
            email, 
            password
        })
    }
} 

export default LoginService; 