import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import '../App.css'

/* components */
import NAV from './motion-nav'
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
  }
}

class App extends Component {

  render() {

    return (
      <div style={styles.container}>
        <Flexbox flexDirection={'column'} flexGrow={1} minHeight={'100vh'}>

           <NAV />

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
            <Flexbox flexDirection={'row'} flexGrow={10}>

            <Flexbox flexDirection={'column'} flexGrow={1} style={{
              overflowY: 'auto',
              backgroundColor: 'transparent',
              alignItems: 'center'
            }}>

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
