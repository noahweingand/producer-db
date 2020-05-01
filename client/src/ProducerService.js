import axios from 'axios'; 

const url = 'http://localhost:8080/api/producers'; 

class ProducerService {
    static getAllProducers(params, jwt){
        return axios.post(url, {
            params 
        }, 
        {
            headers: {
                Authorization: jwt
            }
        }
        ); 
    }

    //need to select...LIKE '%query%' here
    static getAllProducersLike(query, jwt){
        return axios.post(url + '/searchProducers', {
            query : [query]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static getSongsBy(producer, jwt){
        return axios.post(url+'/GetSongs', {
            params : [producer]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }
}

export default ProducerService; 