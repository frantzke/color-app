import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Box from '../components/Box';

// const colors = [
//   { id: 0, color: "red"},
//   { id: 1, color: "blue"},
//   { id: 2, color: "green"},
//   { id: 3, color: "purple"},
//   { id: 4, color: "orange"},
//   { id: 5, color: "pink"}
// ];

const mapStateToProps = ( state ) => ({
  colors: state.colors
})

class BoxContainer extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={5}>
            {
              this.props.colors.map( ( color ) => (
                <Grid.Column key={color.id}>
                  <Box  {...color} />
                </Grid.Column>
                )
              )
            }
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BoxContainer);
