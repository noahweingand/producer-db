import axios from 'axios'; 

const url = 'http://localhost:8080/api/producers'; 

class ProducerService {
    static getAllProducers(params){
        return axios.post(url, {
            params
        }); 
    }

    //need to select...LIKE '%query%' here
    static getAllProducersLike(params){
        return axios.post(url, {
            params
        });
    }

    static getSongsBy(producer){
        return axios.post(url+'/GetSongs', {
            params : [producer]
        });
    }
}

export default ProducerService; 