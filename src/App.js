import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import { Motion, spring, presets } from 'react-motion'
import './App.css'

/* svg */
import Triangle from '../public/svg/triangle.svg'
import Icosahedron from '../public/svg/icosahedron.svg'
import Logo from '../public/svg/logo.svg'
import Open from '../public/svg/open.svg'
import Source from '../public/svg/source.svg'

/* components */
import Intro from './components/intro'
import Content from './components/content'
import Burst from './components/burst'

class App extends Component {
  state = {
    points: 0,
    offsetTop: 0
  }
  componentDidMount(){
    this.setState({offsetTop: document.getElementById('logo').offsetTop})
    setInterval(i=> this.setState({points: this.state.points + .01}),100)

  }
  render() {
    const styl = {
      flexbrand: {
        backgroundColor: 'red'
      }
    }
    return (
      <div style={styles.container}>
        <Burst offset={this.state.offsetTop}/>
        <Flexbox flexDirection={'column'} flexGrow={1} minHeight={'100vh'}>

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
                  opacity: i.b,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'transparent'}}>
                  <img src={Icosahedron} height={20} width={20} className='App-logo' id={'logo'}/>
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

            <Motion defaultStyle={{a: -20, b: -30, c: -40, d: -200, e: -350, f: -400}} style={{a: spring(1), b: spring(1), c: spring(1), d: spring(1), e: spring(1), f: spring(1)}}>
            {i=> // TAB
               <Flexbox flexDirection={'row'} flexGrow={1} style={{padding: 5}}>

                 <Flexbox flexDirection={'row'} flexGrow={1} style={{
                   padding: 10,
                   opacity: i.a,
                   borderRadius: '3px 0px 0px 3px',
                   justifyContent: 'center',
                   alignItems: 'center',
                   backgroundColor: '#111111'}}>
                   <img src={Open} height={20} width={20} style={{opacity: i.f}}/>
                 </Flexbox>

                 <Flexbox flexDirection={'row'} flexGrow={1} style={{
                   opacity: i.b,
                   justifyContent: 'center',
                   alignItems: 'center',
                   backgroundColor: '#111111'}}>
                   <span style={{fontSize: 10, fontFamily: 'Inconsolata', color: '#eee', letterSpacing: 1, opacity: i.e}}>welcome</span>
                 </Flexbox>

                 <Flexbox flexDirection={'row'} flexGrow={1} style={{
                   opacity: i.c,
                   borderRadius: '0px 0px 5px 0px',
                   justifyContent: 'center',
                   alignItems: 'center',
                   backgroundColor: '#111111'}}>
                   <img src={Source} height={20} width={20} style={{opacity: i.d}}/>
                 </Flexbox>

               </Flexbox>
             }
             </Motion>

        <Motion defaultStyle={{a: -1000, b: 0, c: 0}} style={{a: spring(1), b: spring(1), c: spring(1)}}>
        {i=> // BODY
        <Flexbox flexDirection={'row'} flexGrow={5}>



          <Flexbox flexDirection={'column'} flexGrow={1} minHeight={100}  style={{
            opacity: i.a,
            overflowY: 'auto',
            backgroundColor: 'transparent',
            margin: 10,

          }}>
          <Content offset={this.state.offsetTop}/>
          </Flexbox>



        </Flexbox>
        }
        </Motion>

        {/**/}

      </Flexbox>
      </div>
    );
  }
}
const styles = {
  container: {
    backgroundColor: '#222'
  },
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    backgroundColor: 'gray'
  },
  flexBrand: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',
    backgroundColor: '#999',
    borderBottomRightRadius: '100px'
  },
  flexOption: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',
    backgroundColor: '#2dde98'
  },
  flexBody: {
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid transparent',
    backgroundColor: 'gray'
  }
}

export default App;
