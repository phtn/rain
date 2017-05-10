import React from 'react'
import Flexbox from 'flexbox-react'
export default props => (
  <Flexbox flexGrow={1} flexDirection={'column'}
    style={{
      border: '1px solid transparent',
      borderRadius: 3,
      margin: '0px 10px 10px',
      backgroundColor: '#333'
    }}>
    <span style={styles.title}>mojs <span style={styles.author}>created by legomushroom</span></span>
    <span style={styles.content}>

      {``}

    </span>
  </Flexbox>
)

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#b84592',
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
