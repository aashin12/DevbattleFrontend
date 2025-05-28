import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//register
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/users/register`,reqBody)
}

//login api
export const LoginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/users/login`,reqBody)
}

//Google login api
export const googleLoginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/users/google-login`,reqBody)
}

//To get questions list
export const getQuestionsByCategory = async(category) => {
    return await commonApi('GET', `${serverUrl}/questions/category/${category}`);
  }
  
 // for code editor to get selected question
  export const getQuestionById = async(id) => {
    return await commonApi('GET',`${serverUrl}/get-question/${id}`)
  }

  //get all questions for adminside
  export const getAllQuestions = async () => {
    return await commonApi('GET', `${serverUrl}/questions/all`);
  };
  
  // Update a question
export const updateQuestionApi = async (id, updatedData) => {
    return await commonApi("PUT", `${serverUrl}/questions/update/${id}`, updatedData);
  };
  
 //delete a question
  export const deleteQuestion = async (questionId) => {
    return await commonApi('DELETE',`${serverUrl}/questions/delete/${questionId}`);
  };

  // Add Question API
export const addQuestionApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/questions/add`, reqBody);
  };

  //save submissions
  export const saveSubmissionApi = async (payload) => {
    return await commonApi("POST", `${serverUrl}/submissions/save`, payload);
  };
  
  //get submissions
  export const getUserSubmissionsApi = async (userId) => {
    return await commonApi("GET", `${serverUrl}/submissions/user/${userId}`);
  };
  
  // delete user submission
export const deleteSubmissionApi = async (submissionId) => {
    return await commonApi("DELETE", `${serverUrl}/submissions/delete/${submissionId}`);
  };
  
  //to get all users
  export const getallusersApi = async()=>{
    return await commonApi('GET',`${serverUrl}/users/getuser`);
  }

  // Delete user by ID
export const deleteUserApi = async(userId) => {
    return await commonApi('DELETE',`${serverUrl}/users/delete/${userId}`);
  };
  