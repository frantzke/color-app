const initialState = {
  colors: []
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_COLORS': 
      const new_colors = action.colors.map( (color, index) => ({
          id: index, color: "#" + color.hex, 
          name: color.tags[0] ? color.tags[0].name : 'name'
        })
      );
      return {
        ...state,
        colors: new_colors
      };
    case 'CHANGE_COLOR':
      const changed_color = state.colors.map( 
        ( color ) => ( color.id === action.id ? { 
          id: color.id, 
          color: "#" + action.color.hex, 
          name: action.color.tags[0] ? action.color.tags[0].name : 'Whoops!'
        } : color)
      );
      return {
        ...state,
        colors: changed_color
      }
    default:
      return state;
  }
};

export default rootReducer;
