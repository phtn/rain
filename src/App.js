import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import './App.css'

/* components */
import NAV from './components/nav'
import INTRO from './components/intro'
import MOTION from './components/motion'
import MOVE from './components/move'
import MOJS from './components/mojs'
import FOOTER from './components/footer'

/* audio */


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

class App extends Component {

  state = {
    motionSpringLS: 3,
    motionSpringR: 180,
    moveLS: 3,
    moveR: 180,
    burstTop: 0
  }

  toggleMotion(){
    this.state.motionSpringLS === 3 ? this.setState({motionSpringLS: 0 }) : this.setState({motionSpringLS: 3 })
    this.state.motionSpringR === 180 ? this.setState({motionSpringR: 0 }) : this.setState({motionSpringR: 180 })
  }

  toggleMove(){
    this.state.moveLS === 3 ? this.setState({moveLS: 0 }) : this.setState({moveLS: 3 })
    this.state.moveR === 180 ? this.setState({moveR: 0 }) : this.setState({moveR: 180 })
  }

  componentDidMount(){
    this.setState({burstTop: document.getElementById('burst-demo').offsetTop})
  }

  render() {

    return (
      <div style={styles.container}>
        <Flexbox flexDirection={'column'} flexGrow={1} minHeight={'100vh'}>

           <NAV />

        <Motion
          defaultStyle={{a: 0, b: -50, c: -100, d: -150, e: -200}}
          style={{
            a: spring(1),
            b: spring(1),
            c: spring(1),
            d: spring(1),
            e: spring(1),
          }}>
          {i=> // BODY
            <Flexbox flexDirection={'row'} flexGrow={10}>

            <Flexbox flexDirection={'column'} flexGrow={1} style={{
              overflowY: 'auto',
              backgroundColor: 'transparent',
              alignItems: 'center'
            }}>

            <INTRO opacity={i.a}/>
            <MOTION springR={this.state.motionSpringR} springLS={this.state.motionSpringLS} toggle={this.toggleMotion.bind(this)}/>
            <MOVE moveR={this.state.moveR} moveLS={this.state.moveLS} toggle={this.toggleMove.bind(this)}/>
            <MOJS top={this.state.burstTop}/>
            <FOOTER opacity={i.e}/>

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
export default App;
