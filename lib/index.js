const axios = require("axios");
const API_ENDPOINT = "https://api.backpulse.io/";

class Backpulse {
    constructor(siteName) {
        this.siteName = siteName;
    }

    fetchAbout(cb) {
        this._request("/about", cb);
    }

    fetchContact(cb) {
        this._request("/contact", cb);
    }

    fetchGalleries(cb) {
        this._request("/galleries", cb);
    }

    
    fetchGallery(id, cb) {
        this._request("/gallery/" + id, cb);
    }
    
    fetchDefaultGallery(cb) {
        this._request("/galleries/default", cb);
    }

    fetchProjects(cb) {
        this._request("/projects", cb);
    }

    fetchProject(id, cb) {
        this._request("/project/" + id, cb);
    }
    
    fetchSiteInformations(cb) {
        this._request("/", cb);
    }

    _request(route, cb) {
        const url = API_ENDPOINT + this.siteName + route;
        axios.get(url).then(response => {
            const {payload} = response.data;
            cb(payload, null);
        }).catch(err => {
            if(err) cb(null, err.response.data.message)
        });
    }
}

module.exports = Backpulse;