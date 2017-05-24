import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
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

class MotionPage extends Component {

  

  render() {

    return (
      <div style={styles.container}>
        <Flexbox flexDirection={'column'} flexGrow={1} minHeight={'100vh'}>

           <NAV color={'00a4e4'} first={'react'} second={'motion'} />

        <Motion
          defaultStyle={{a: 0}}
          style={{
            a: spring(1),
            
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
export default MotionPage;
