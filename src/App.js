import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import './App.css'

/* svg */
import Source from '../public/svg/source.svg'

/* components */
import NAV from './components/nav'
import INTRO from './components/intro'
import MOTION from './components/motion'
import MOVE from './components/move'
import MOJS from './components/mojs'
import Burst from './components/burst'

class App extends Component {
  state = {
    points: 0,
    offsetTop: 0
  }
  componentDidMount(){
    this.setState({offsetTop: document.getElementById('logo').offsetTop})
    setInterval(i=> this.setState({points: this.state.points + .01}),100)

  }
  render() {

    return (
      <div style={styles.container}>
        <Flexbox flexDirection={'column'} flexGrow={1} minHeight={'100vh'}>

           <NAV />

        <Motion
          defaultStyle={{a: -1000, b: 0, c: 0}} style={{a: spring(1), b: spring(1), c: spring(1)}}>
          {i=> // BODY
            <Flexbox flexDirection={'row'} flexGrow={10}>

            <Flexbox flexDirection={'column'} flexGrow={1} style={{
              overflowY: 'auto',
              backgroundColor: 'transparent',

            }}>

            <INTRO />
            <MOTION />
            <MOVE />
            <MOJS />
            </Flexbox>



            </Flexbox>
          }
        </Motion>

        {/**/}

      </Flexbox>
      </div>
    );
  }
}
const styles = {
  container: {
    backgroundColor: '#dedede'
  },
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    backgroundColor: 'gray'
  },
  flexBrand: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',
    backgroundColor: '#999',
    borderBottomRightRadius: '100px'
  },
  flexOption: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',
    backgroundColor: '#2dde98'
  },
  flexBody: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    backgroundColor: 'gray'
  }
}

export default App;
