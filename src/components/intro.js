import React from 'react'
import Flexbox from 'flexbox-react'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#333',
    letterSpacing: 1
  },
  content: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    //fontSize: 12,
    padding: 5,
    color: '#333',
    lineHeight: 1.5,
  }
}

export default props => (
  <Flexbox flexGrow={1} flexDirection={'column'} className='flex-intro'
    style={{
      border: '1px solid transparent',
      borderRadius: 3,
      margin: '0px 10px 10px',
      backgroundColor: 'none',
      opacity: props.opacity,
    }}>
    <span style={styles.title}>introduction</span>
    <span style={styles.content} className='intro-text'>

      {`hello and welcome to muons. i'm phtn458. i built this page to share and
      further enhance my knowledge on javascript and web application development using react and awesome packages
      available as open source. i'm currently focused on animating elements and components. this
      page will have tutorials, code-snippets, github links, demos and more! a friend of mine once told
      me that one way to master something is to teach it.. are you ready? let's do this!`}

    </span>
  </Flexbox>
)
