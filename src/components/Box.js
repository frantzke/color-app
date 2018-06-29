import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Header } from 'semantic-ui-react';
import { loadColor } from '../actions';

const mapDispatchToProps = ( dispatch ) => ({
  loadColor: (id) => dispatch(loadColor(id))
})

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
    this.onColorClick = this.onColorClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.color !== prevProps.color){
      this.setState({
        isLoading: false
      })
    }
  }

  onColorClick(event) {
    this.props.loadColor(this.props.id);
    this.setState({
      isLoading: true
    })
  }

  render() {
    return (
      <div>
      	<Segment raised inverted size="big" padded='very'
      		style={{
      			backgroundColor: this.props.color
      		}}
          loading={this.state.isLoading}>
          <Header as='h3'>
            {this.props.name}
          </Header>
      		<Header as='h3'>
            {this.props.color}
          </Header>
          <Button id={this.props.id} onClick={this.onColorClick} circular inverted icon='sync alternate'/>
      	</Segment>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Box);
