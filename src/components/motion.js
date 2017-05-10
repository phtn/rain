import React from 'react'
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#00a4e4',
    letterSpacing: 1
  },
  author: {
    fontSize: 10,
    fontFamily: 'Inconsolata',
    fontweight: 'bolder',
    color: '#eee',
  },
  content: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12,
    padding: 5,
    color: '#fff',
  }
}

export default props => (
  <Flexbox flexGrow={1} flexDirection={'column'}
    style={{
      border: '1px solid transparent',
      borderRadius: 3,
      margin: '0px 10px 10px',
      backgroundColor: '#333'
    }}>
    <span style={styles.title}>react-motion <span style={styles.author}>created by chenglou</span></span>

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
