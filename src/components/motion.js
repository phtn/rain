import React from 'react'
import Flexbox from 'flexbox-react'
import { Motion, spring } from 'react-motion'
import { Link } from 'react-router-dom'
import Right from '../../public/svg/right.svg'
import Toggle from '../../public/svg/motion-toggle.svg'

const styles = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    padding: 20,
    color: '#00a4e4',
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
    fontSize: 14,
    padding: '5px 20px 5px',
    color: '#ccc',
  },
  toggle: {
    padding: '5px 20px 5px',
  },
  button: {
    fontFamily: 'Inconsolata',
    fontSize: 14,
    color: '#00a4e4',
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
  <Flexbox flexGrow={3} flexDirection={'column'} style={{borderRight: '0px solid #444'}}>
    
    <span style={styles.title}>react-motion
      <span style={styles.created}>developed by</span><span style={styles.author}>chenglou</span>
    </span>

      <Flexbox flexDirection={'row'} flexGrow={1}>
        
        <Flexbox flexGrow={1}>
        <Motion defaultStyle={{n: 0}} style={{n: spring(props.springLS)}}>
          { i =>
            (
              <span style={Object.assign({}, styles.content, {letterSpacing: i.n})}>
                { `interpolation  demo` }
              </span>
            )
          }
        </Motion>
        </Flexbox>

        <Flexbox flexGrow={1}>
          <Motion defaultStyle={{n: 0}} style={{n: spring(props.springR)}}>
          { i =>
            (
              <img src={ Toggle } 
              style={Object.assign({}, styles.toggle, {transform: `rotate(${i.n}deg)`})} 
              height={15} width={15} alt='' 
              onClick={props.toggle}/>
            )
          }
        </Motion>
          
        </Flexbox>
      
      </Flexbox>
      


    </Flexbox>

    <Flexbox flexGrow={1}
        style={{alignItems: 'center', justifyContent: 'center', padding: '0px 20px 0px'}} >


      <Link to={'/react-motion'}
        style={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          textDecoration: 'none',

        }}
      >


        <Motion defaultStyle={{n: 0}} style={{n: spring(1)}}>
          { i =>
            (
              <img src={ Right } height={30} width={30} alt=''
                style={{opacity: i.n}}
              />
            )
          }
        </Motion>
        


      

      </Link>

    </Flexbox>



  </Flexbox>
)
