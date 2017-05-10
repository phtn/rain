import React from 'react'
import Flexbox from 'flexbox-react'
export default props => (
  <Flexbox flexGrow={1}
    style={{
      border: '1px solid transparent',
      borderRadius: 3,
      margin: '0px 10px 10px',
      backgroundColor: '#333'
    }}>
    <span style={styles.title}>intro</span>
  </Flexbox>
)

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#fff',
    letterSpacing: 1
  }
}
