import axios from 'axios';

export function loadColors() {
	return (dispatch) => {
		return axios.get("http://www.colr.org/json/colors/random/5")
			.then(
				(response) => {
          // Check if all colors are valid
          let complete = true;
          response.data.matching_colors.forEach( (color, index) => {
            complete = color === "" ? false : complete;
          })
          if (complete) {
            return dispatch(changeColors(response.data.colors));
          } else {
            //reload colors
            dispatch(loadColors());
          }
          
        }
      )
      .catch(
        ( error ) => {
          console.log(error);
        }
      )
	}
};

export function changeColors( colors ) {
  return {
    type: "CHANGE_COLORS",
    colors
  }
};

export function loadColor( id ) {
  return (dispatch) => {
    return axios.get("http://www.colr.org/json/color/random")
      .then(
        (response) => {
          if (response.data.colors[0].id === -1) {
            dispatch(loadColor( id ));
          } else {
            return dispatch(changeColor( id, response.data.colors[0]));
          }
        }
      )
      .catch(
        ( error ) => {
          console.log(error);
        }
      )
  }
};

export const changeColor = ( id, color ) => ({ type: "CHANGE_COLOR", id, color});
