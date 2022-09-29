import axios from "axios";

const getAllPosts = (payload) => ({ type: "GET_ALL_POSTS", payload });
const getAllUsers = (payload) => ({ type: "GET_ALL_USERS", payload });
const loadPost = () => ({ type: "POSTS_LOADING" });
const loadUser = () => ({ type: "USERS_LOADING" });
const getPostsError = (payload) => ({ type: "GET_POSTS_ERRORS", payload });
const getUsersError = (payload) => ({ type: "GET_USERS_ERRORS", payload });
const createNewPost = (payload) => ({ type: "CREATE_POST", payload });

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(loadPost());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(getAllPosts(data));
    } catch (error) {
      dispatch(getPostsError(error.response.data));
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(loadUser());
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getAllUsers(data));
    } catch (error) {
      dispatch(getUsersError(error.response.data));
    }
  };
};

export const getPostsByUser = (userId) => {
  if (userId === 0)
    return (dispatch) => {
      dispatch(getPosts());
    };
  return async (dispatch) => {
    dispatch(loadPost());
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      dispatch(getAllPosts(data));
    } catch (error) {
      dispatch(getPostsError(error.response.data));
    }
  };
};

export const createPost = (body) => {
  return async (dispatch) => {
    dispatch(loadPost());
    try {
      const { data } = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        body
      );
      dispatch(createNewPost(data));
    } catch (error) {
      dispatch(getPostsError(error.response.data));
    }
  };
};
