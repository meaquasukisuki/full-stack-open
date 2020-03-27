import axios from 'axios';

const url = "http://localhost:3001/api/persons";
const addPhoneNumber =  (data) => {
	return axios.post(`${url}`,data).then(res => res.data);
};

const update = (data) => {
	return axios.put(`${url}/${data.id}`,data).then((res) => res.data);
};

const getAllPhone =  () => {
	return axios.get("http://localhost:3001/api/persons").then(
		(res) => {
			return res.data;
		}
	).catch(error => {
		return error
	})
};

const deleteOne = (id) => {
	return axios.delete(`http://localhost:3001/api/persons/${id}`).then(res => res.data)
};

export default {addPhoneNumber,getAllPhone,deleteOne,update};