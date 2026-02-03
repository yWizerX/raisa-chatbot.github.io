// API Manager for Raisa Chatbot

class ApiManager {
    constructor() {
        this.apis = [];
    }

    // Create a new API
    createApi(name, endpoint) {
        const newApi = { name, endpoint };
        this.apis.push(newApi);
        console.log(`API Created: ${name}`);
    }

    // Get an API by name
    getApi(name) {
        return this.apis.find(api => api.name === name);
    }

    // List all APIs
    listApis() {
        return this.apis;
    }

    // Delete an API by name
    deleteApi(name) {
        const index = this.apis.findIndex(api => api.name === name);
        if (index != -1) {
            this.apis.splice(index, 1);
            console.log(`API Deleted: ${name}`);
        } else {
            console.log(`API not found: ${name}`);
        }
    }

    // Update an existing API
    updateApi(name, newEndpoint) {
        const api = this.getApi(name);
        if (api) {
            api.endpoint = newEndpoint;
            console.log(`API Updated: ${name}`);
        } else {
            console.log(`API not found: ${name}`);
        }
    }
}

// Example usage:
const apiManager = new ApiManager();
apiManager.createApi("ChatbotAPI", "/api/chatbot");

export default apiManager;