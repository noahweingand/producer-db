import axios from 'axios'; 

const url = 'http://localhost:8080/api/producers'; 

class ProducerService {
    static getAllProducers(params){
        return axios.post(url, {
            params
        }); 
    }

    //need to select...LIKE '%query%' here
    static getAllProducersLike(query){
        console.log(query)
        return axios.post(url + '/searchProducers', {
            query : [query]
        });
    }

    static getSongsBy(producer){
        return axios.post(url+'/GetSongs', {
            params : [producer]
        });
    }
}

export default ProducerService; 