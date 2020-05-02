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

    static getAllArtists(params, jwt){
        return axios.post(url + '/getAllArtists', {
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

    static getAllArtistsLike(query, jwt){
        return axios.post(url + '/searchArtists', {
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

    static insertProducer(obj, jwt){
        return axios.post(url + '/addProducer', {
            params: obj
        }, {
            headers: {
                Authorization: jwt
            }
        }); 
    }

    static insertArtist(obj, jwt){
        return axios.post(url +'/addArtist', {
            params: obj
        }, 
        {
            headers:{
                Authorization: jwt
            } 
        })
    }
}

export default ProducerService; 