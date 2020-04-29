import axios from 'axios'; 

const url = 'http://localhost:8080/api/producers'; 

class ProducerService {
    static getAllProducers(params){
        return axios.post(url, {
            params
        }); 
    }
}

export default ProducerService; 