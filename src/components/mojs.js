import React from 'react'
import Flexbox from 'flexbox-react'
import { Animate } from 'react-move'
import { Link } from 'react-router-dom'
import Right from '../../public/svg/right.svg'
import Wind from '../../public/svg/burst.svg'
import mojs from 'mo-js'

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
    fontSize: 14,
    padding: '5px 20px 5px',
    color: '#ccc',
    letterSpacing: 3,
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



const burst = new mojs.Burst({
  radius: {0:20},
  top: 600,
  left: 120,
})




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
    
    <span style={styles.title}>mo &middot; js
      <span style={styles.created}>developed by</span><span style={styles.author}>legomushroom</span>
    </span>

      <Flexbox flexDirection={'row'} flexGrow={1}>
        
        <Flexbox flexGrow={1}>

        
              <span style={styles.content} >
                { `burst _ _ _ _  demo!` }
              </span>
        
        
        </Flexbox>


        <Flexbox flexGrow={1}>


          
                <img src={ Wind }
                id='burst-demo' 
                style={styles.toggle} 
                height={15} width={15} alt='' 
                onClick={(e)=> burst.replay()}/>
              

          
        </Flexbox>



      
      </Flexbox>
      


    </Flexbox>

    <Flexbox flexGrow={1}
        style={{alignItems: 'center', justifyContent: 'center', padding: '0px 20px 0px'}} >


      <Link to={'/mo-js'}
        style={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          textDecoration: 'none',

        }}
      >


        <Animate default={{n: 0}} data={{n: 1}} duration={500} easing={'easeIn'} >
          { i =>
            (
              <img src={ Right } height={30} width={30} alt=''
                style={{opacity: i.n}}
              />
            )
          }
        </Animate>
        


      

      </Link>

    </Flexbox>



  </Flexbox>
)
