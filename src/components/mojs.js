import React from 'react'
import Flexbox from 'flexbox-react'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 20,
    color: '#b84592',
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
    color: '#fff',
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
    <span style={styles.title}>mojs
      <span style={styles.created}>developed by</span><span style={styles.author}>legomushroom</span>
    </span>
    <span style={styles.content}>

      {``}

    </span>
  </Flexbox>
)
