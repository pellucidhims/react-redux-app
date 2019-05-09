import {ADD_ARTICLE} from '../constants/action-type';

const initialState = {
  articles: []
};

function rootReducer(state=initialState,action){
  switch (action.type) {
    case ADD_ARTICLE:
      let retState = Object.assign({},state,{articles:state.articles.concat(action.payload)});
      return retState;
      break;
    default:
      return state
  }
}

export default rootReducer;
