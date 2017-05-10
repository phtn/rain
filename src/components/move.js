import React from 'react'
import Flexbox from 'flexbox-react'
import { Animate } from 'react-move'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#ff6c5f',
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
    <span style={styles.title}>react-move <span style={styles.author}>created by tannerlinsley</span></span>

    <Animate default={{n: 0}} data={{n: 10}} duration={200} easing='easeIn'>
      { i =>
        (
          <span style={styles.content}>
            {`with ease-in interpolation: ${ i.n }` }
          </span>
        )
      }
    </Animate>

  </Flexbox>
)
