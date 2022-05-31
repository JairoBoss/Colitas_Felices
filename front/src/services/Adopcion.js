import http from "./HttpService.js";

const prefix = "api/adopcion";

class AdopcionService {
    getAll() {
        return http.get(prefix+"/");
    }

    get(id) {
        return http.get(prefix+"/" + id);
    }

    create(data) {
        return http.post(prefix+"/", data);
    }

    update(id, data) {
        return http.put(prefix+"/" + id, data);
    }

    delete(id) {
        return http.delete(prefix+"/"+id);
    }

    // deleteAll() {
    //     return http.delete("/apoyos");
    // }

}

export default new AdopcionService();
