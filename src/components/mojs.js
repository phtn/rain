import React from 'react'
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import { Link } from 'react-router-dom'
import Right from '../../public/svg/right.svg'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 20,
    color: '#b84592',
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
    padding: '10px 20px 10px',
    color: '#eee',
  },
  button: {
    fontFamily: 'Inconsolata',
    fontSize: 14,
    color: '#b84592',
    padding: '10px 20px 10px',

  }
}



export default props => (
  <Flexbox flexGrow={1} flexDirection={'row'} className='flex-intro'
    style={{
      border: '1px solid transparent',
      borderRadius: 2,
      margin: `0px 10px 10px`,
      backgroundColor: '#333',
      width: '100%',
      opacity: props.opacity,
    }}>
  <Flexbox flexGrow={3} flexDirection={'column'} >
    <span style={styles.title}>mojs
      <span style={styles.created}>developed by</span><span style={styles.author}>legomushroom</span>
    </span>


      <Motion defaultStyle={{o: 0}} style={{o: spring(100)}}>
        { i =>
          (
            <span style={styles.content}>
              { `default interpolation: ${ i.o }` }
            </span>
          )
        }
      </Motion>


    </Flexbox>


    <Link to={'/'}
    style={{


      backgroundColor: 'transparent',
      borderLeft: 'thin double #444',
      cursor: 'pointer',
      textDecoration: 'none'

    }}
    >

      <Flexbox flexGrow={1}
        style={{
          marginTop: 35
        }}
      >
        <img src={ Right } height={40} width={40} alt=''
          style={{
            padding: '0px 30px 0px'
          }}
        />
      </Flexbox>

    </Link>




  </Flexbox>
)
