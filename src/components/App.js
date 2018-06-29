import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Container, Icon } from 'semantic-ui-react';
import BoxContainer from '../container/BoxContainer';
import { loadColors } from '../actions';

const mapDispatchToProps = ( dispatch ) => ({
  loadColors: () => dispatch(loadColors())
})

const mapStateToProps = ( state ) => ({
  colors: state.colors
})

class App extends Component {
  constructor(props){
    super(props);

    this.buttonRef = React.createRef();
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.colors !== prevProps.colors){
      this.buttonRef.current.ref.classList.remove('loading');
    }
  }

  handlePress(event) {
    this.buttonRef.current.ref.classList.add('loading');
    this.props.loadColors();
  }

  render() {
    let boxContainer;
    if (this.props.colors.length === 0) {
      boxContainer = '';
    } else {
      boxContainer = <BoxContainer/>;
    }

    return (
      <div className="App">
        <Container textAlign="center" style={{ marginTop: '2em' }}>
          <Header textAlign="center" as="h1">Random Color App</Header>
        </Container>
        <Container textAlign="center" style={{ marginTop: '2em' }}>
          <Button 
            size='big' 
            color='blue' 
            onClick={this.handlePress}
            ref={this.buttonRef}>
            <Icon name='paint brush'/>
            Randomize
          </Button>
        </Container>
        <Container textAlign="center" style={{ marginTop: '2em' }}>
          {boxContainer}
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
