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

    static getProducerInfo(producer, jwt){
        return axios.post(url+'/GetProducerInfo', {
            params : [producer]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static getArtistInfo(artist, jwt){
        return axios.post(url+'/GetArtistInfo', {
            params : [artist]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static getProducerDaws(producer, jwt){
        return axios.post(url+'/GetProducerDaws', {
            params : [producer]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static getProducerVsts(producer, jwt){
        return axios.post(url+'/GetProducerVsts', {
            params : [producer]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static getProducerHardware(producer, jwt){
        return axios.post(url+'/GetProducerHardware', {
            params : [producer]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static getProducerTags(producer, jwt){
        return axios.post(url+'/GetProducerTags', {
            params : [producer]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static addDaw(producer, name, manu, jwt){
        return axios.post(url+'/AddDaw', {
            params : [producer, name, manu]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static addVst(producer, name, manu, jwt){
        return axios.post(url+'/AddVst', {
            params : [producer, name, manu]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static addHardware(producer, name, manu, jwt){
        return axios.post(url+'/AddHardware', {
            params : [producer, name, manu]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static addTag(producer, name, manu, jwt){
        return axios.post(url+'/AddTag', {
            params : [producer, name, manu]
        }, {
            headers: {
                Authorization: jwt
            }
        });
    }

    static deleteProducer(producer, jwt){
        return axios.post(url+'/deleteProducer', {
            params : [producer]
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

    static addSong(obj, jwt){
        return axios.post(url + '/AddSong', {
            params: obj
        }, {
            headers: {
                Authorization: jwt
            }
        })
    }
}

export default ProducerService; 