
import axios from 'axios';

const URL = process.env.REACT_APP_API;

export const addUser = async (formData, debug) => {
  try {
    
    const response = await axios.post(`${URL}/add`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(response.data.status ==="success"){
    return response.data.data
      }
      else{
        return{}
      }
    // Add any further actions you want to perform after a successful submission.
  } catch (error) {
    console.error('Error adding user:', error);
    return {}
    // Handle error scenarios, e.g., display an error message to the user.
  }
};


export const getUser = async () => {
  try {
    
    const response = await axios.get(`${URL}/list`);
    console.log(response)
      if(response.status ===200){
    return response.data.list
      }
      else{
        return{}
      }
    // Add any further actions you want to perform after a successful submission.
  } catch (error) {
    console.error('Error adding user:', error);
    return {}
    // Handle error scenarios, e.g., display an error message to the user.
  }
};

