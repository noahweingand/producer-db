import axios from 'axios'

const url = 'http://localhost:8080/api/Users/login'

class LoginService {
    static loginUser(email, password){
        return axios.post(url, {
            email, 
            password
        })
    }
} 

export default LoginService; 