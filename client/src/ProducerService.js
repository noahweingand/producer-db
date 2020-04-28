import axios from 'axios'; 

const url = 'http://localhost:8080/api/producers'; 

class ProducerService {
    static getAllProducers(){
        return axios.get(url); 
    }
}

export default ProducerService; 