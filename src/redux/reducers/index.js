const initialState = {
  posts: { list: [], loading: false, error: "" },
  users: { list: [], loading: false, error: "" },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POSTS_LOADING":
      return { ...state, posts: { ...state.posts, loading: true } };
    case "USERS_LOADING":
      return { ...state, users: { ...state.users, loading: true } };
    case "CREATE_POST":
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          list: [action.payload, ...state.posts.loading],
          error: "",
        },
      };
    case "GET_ALL_POSTS":
      return {
        ...state,
        posts: {
          ...state.posts,
          list: action.payload,
          loading: false,
          error: "",
        },
      };
    case "GET_ALL_USERS":
      return {
        ...state,
        users: {
          ...state.users,
          list: action.payload,
          loading: false,
          error: "",
        },
      };
    case "GET_POSTS_ERRORS":
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          error: action.payload,
        },
      };
    case "GET_USERS_ERRORS":
      return {
        ...state,
        errors: {
          ...state.errors,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
