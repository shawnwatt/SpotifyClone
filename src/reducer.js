export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove after finished developing
  // token:
  //   "BQAvA7VCjgJOztV90Jqtbnd2tmt-lcjP1qQmo11JrKTMhK1sIgLkB6UxWkRu7v313TndcCGojwidjTcdNd2_prhw1SW1ZtYfs-RgpCTpeqfQ6U30hH6K0_l1UCBSbABqbvyD75sJd0ZkTEORui7TBfCtDwCoSlw",
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
