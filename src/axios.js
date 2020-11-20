import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/clone-using-reactjs/us-central1/api", //The api url (cloud function)
});

export default instance;
