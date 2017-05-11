import React from 'react'
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 20,
    color: '#00a4e4',
    letterSpacing: 1,
    marginRight: 10,
  },
  author: {
    fontSize: 12,
    fontFamily: 'Inconsolata',
    fontweight: 'bolder',
    color: '#eee',
  },
  created: {
    fontSize: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    color: '#ccc',
    margin: '0px 5px 0px',
  },
  content: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: 12,
    padding: 20,
    color: '#eee',
  }
}

export default props => (
  <Flexbox flexGrow={1} flexDirection={'column'} className='flex-intro'
    style={{
      border: '1px solid transparent',
      borderRadius: 0,
      margin: '0px 10px 10px',
      backgroundColor: '#333',
      width: '100%',
    }}>
    <span style={styles.title}>react-motion
      <span style={styles.created}>developed by</span><span style={styles.author}>chenglou</span>
    </span>

    <Motion defaultStyle={{n: 0}} style={{n: spring(10)}}>
      { i =>
        (
          <span style={styles.content}>
            { `default spring interpolation: ${ i.n }` }
          </span>
        )
      }
    </Motion>

  </Flexbox>
)
