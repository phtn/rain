import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import Flexbox from 'flexbox-react'

import Icosahedron from '../../public/svg/icosahedron.svg'

import Burst from './burst.js'

const styles = {
  brand: {
    color: '#333',
    letterSpacing: 3,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    marginLeft: 3,
  },
  hr: {
    height: 1,
    borderTop: 'none',
    borderBottom: '1px solid #555',
    transform: 'scaleY(0.25)'
  }
}


class Nav extends Component {
  render(){
    return(
      <div>
      <Motion defaultStyle={{a: -10, b: -20, c: -30}} style={{a: spring(1), b: spring(1), c: spring(1)}}>
      {i=>
         <Flexbox flexDirection={'row'} flexGrow={1} style={{margin: 10}}>

           <Flexbox flexDirection={'row'} flexGrow={1} style={{
             opacity: i.a,
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: 'transparent'}}>

           </Flexbox>



           <Flexbox flexDirection={'row'} flexGrow={5} style={{
             opacity: 1,
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: 'transparent'}}>

             <Burst play={true} />
             
             <span style={styles.brand}>MU</span>
             <img src={Icosahedron} height={20} width={20} className='App-logo' id={'logo'} alt=''/>
             <span style={styles.brand}> NS</span>
           </Flexbox>




           <Flexbox flexDirection={'row'} flexGrow={1} style={{
             opacity: i.c,
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: 'transparent'}}>

           </Flexbox>

         </Flexbox>
       }
       </Motion>

       <hr style={styles.hr}/>

       </div>

    )
  }
}

export default Nav
