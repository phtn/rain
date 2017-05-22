import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import '../App.css'

/* components */
import NAV from './nav-page'
import FOOTER from '../components/footer'

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
  },
  content: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: 14,
    padding: '5px 20px 5px',
    color: '#444',
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

class App extends Component {

  render() {

    return (
      <div style={styles.container}>
        <Flexbox flexDirection={'column'} flexGrow={1} minHeight={'100vh'}>

           <NAV color={'00a4e4'} first={'react'} second={'motion'} />

        <Motion
          defaultStyle={{a: 0, b: -50, c: -100, d: -150, e: -200, m: -70}}
          style={{
            a: spring(1),
            b: spring(1),
            c: spring(1),
            d: spring(1),
            e: spring(1),
            m: spring(10)
          }}>
          {i=> // BODY
            <Flexbox flexDirection={'column'} flexGrow={10}>


            <Flexbox flexGrow={4} style={styles.content} >
              coming very soon! sorry...
            </Flexbox>


            <Flexbox flexDirection={'column'} flexGrow={1} style={{
              overflowY: 'auto',
              backgroundColor: 'transparent',
              alignItems: 'center'
            }}>

            <FOOTER/>

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
