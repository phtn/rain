import React from 'react'
import Flexbox from 'flexbox-react'
import Twitter from '../../public/svg/twitter.svg'
import Github from '../../public/svg/github.svg'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 5,
    color: '#b84592',
    letterSpacing: 1,
    textAlign: 'center',
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
  <Flexbox flexGrow={1} flexDirection={'row'}
    style={{
      border: '1px solid transparent',
      borderRadius: 3,
      margin: '0px 10px 10px',
      backgroundColor: 'none',
      alignItems: 'center',
      width: '100%',
    }}>
    <Flexbox flexGrow={1} style={{justifyContent: 'center'}}>
      <img src={ Github } height={20} width={20} alt='' style={styles.social}/>
    </Flexbox>
    <Flexbox flexGrow={1} style={{justifyContent: 'center'}}>
      <img src={ Twitter } height={20} width={20} alt='' style={styles.social}/>
    </Flexbox>

  </Flexbox>
)
