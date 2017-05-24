import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import '../App.css'
import Highlight from 'react-highlight.js'

/* components */
import NAV from './nav-page'
import FOOTER from '../components/footer'

const styles = {
  container: {
    backgroundColor: 'transparent'
  },
  content: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: 14,
    padding: '5px 20px 5px',
    color: '#444',
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid red'
  }
}

class App extends Component {

  render() {

    return (
      <div style={styles.container}>
              <NAV color={'green'} first={'react'} second={'move'} />
              <Highlight language='js'>
                <pre>
                {`
  var x = 42;
  let bees = 'will eventually all die.'
  const PI = 3.141592
  justAnExample = true
                `}
                </pre>
              </Highlight>
           
      </div>
    );
  }
}
export default App;
