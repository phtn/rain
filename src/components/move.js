import React from 'react'
import Flexbox from 'flexbox-react'
import { Animate } from 'react-move'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 20,
    color: '#6cc644',
    letterSpacing: 1
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
      borderRadius: 3,
      margin: '0px 10px 10px',
      backgroundColor: '#333',
      width: '100%',
    }}>
    <span style={styles.title}>react-move
      <span style={styles.created}>developed by</span><span style={styles.author}>tannerlinsley</span>
    </span>

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
