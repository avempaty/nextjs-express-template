import SimpleApiClient, { StatusCodeError } from "simple-api-client"

class ApiClient extends SimpleApiClient {
    //Default localhost
    constructor() {
        super("http://localhost:3000/")
    }
}

export default new ApiClient