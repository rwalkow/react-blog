import shortid from 'shortid';

export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');

export const addPost = payload => ({type: ADD_POST, payload})


const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid()}]
    default:
      return statePart
  };
};

export default postsReducer;
