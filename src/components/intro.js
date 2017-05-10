import React from 'react'
import Flexbox from 'flexbox-react'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#fbb034',
    letterSpacing: 1
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
    <span style={styles.title}>intro</span>
    <span style={styles.content}>

      {`hello! welcome to my webpage. i'm phtn458. i built this page to practice and
      further enhance my knowledge on javascript and building web applications using react and awesome packages
      available as open source. i'm currently focused on animating elements and components. this
      page will have tutorials, code-snippets, github links, demos and more! a friend of mine once told
      me that one way to learn something is to teach it. as dan abramov would say -- "happy hacking!".`}

    </span>
  </Flexbox>
)
