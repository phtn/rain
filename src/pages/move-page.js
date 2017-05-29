import React, { Component } from 'react';
import '../App.css'
import Highlight from 'react-highlight.js'
import { Animate } from 'react-move'
import Twitter from '../../public/svg/twitter.svg'
import Github from '../../public/svg/github.svg'

/* components */
import NAV from './nav-page'
//import FOOTER from '../components/footer'
/* eslint-disable */
const styles = {
  container: {
    backgroundColor: 'transparent'
  },
  tab: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: 14,
    padding: '5px 20px 5px',
    color: '#444',
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    margin: '5px 0px 5px',
    textAlign: 'center'
  },
  tabs: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    color: '#444',
    borderBottom: '1px solid #6cc644'
  },
  content: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: 14,
    padding: '5px 20px 5px',
    color: '#444',
    letterSpacing: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  run: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: '18px',
    color: '#444',
    letterSpacing: 1,
    border: '1px solid gray',
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    padding: 10
  },
  button: {
    padding: 15,
    border: 'none',
    backgroundColor: '#222',
    color: '#ccc'
  },
  rotate: {
    width: 50,
    height: 50,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0px auto'
  },
  footer: {
    fontFamily: 'Inconsolata, sans-serif',
    fontWeight: 100,
    fontSize: '18px',
    color: '#444',
    letterSpacing: 1,
    border: '1px solid #eee',
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    padding: 10
  },
  img: {
    margin: 10
  }
}

class MovePage extends Component {

  state = {
    counter: 0,
    space: 0,
    deg: 0,
    radius: 0
  }

  add() {
    this.setState({counter: this.state.counter + 1})
  }

  space() {
    this.state.space === 0 ? this.setState({space: 3}) : this.setState({space: 0})
  }

  rotate() {
    this.state.deg === 0 ? this.setState({deg: 180}) : this.setState({deg: 0}) 
    this.state.radius === 0 ? this.setState({radius: 15}) : this.setState({radius: 0}) 
  }

  render() {

    return (
      <div style={styles.container}>
        <NAV color={'444'} first={'react'} second={'move'} />
        
        <div className='code-container'>

        <div style={styles.tab}>
          <span style={styles.tabs}>Animate</span>
        </div>

        <div style={styles.content}>This tutorial assumes that you already have <strong>create-react-app</strong> installed.</div>

        <div style={styles.content}>Ok, let's get started by creating a simple <i>stateless component</i>.</div>  
        
        <Highlight language='js'>
          <pre>
          {`
  import React from 'react'

  export default props => (
    <div> react-move <div>
  )
          `}
          </pre>
        </Highlight>

        <div style={styles.content}>Now let's add <strong>react-move</strong> package.</div>
        <div style={styles.content}>On your <i>terminal</i>, you can type..</div>

        <Highlight language='bash'>
          <pre>
          {`
 #!/bin/bash
 ~> yarn add react-move 
          `}
          </pre>
        </Highlight>

        <div style={styles.content}>or if you prefer <strong>npm</strong> ...</div>

        <Highlight language='bash'>
          <pre>
          {`
 #!/bin/bash
 ~> npm i -S react-move
          `}
          </pre>
        </Highlight>

        <div style={styles.content}>Let's go back to our component and import <strong>Animate</strong> like so</div>

        <Highlight language='js'>
          <pre>
          {`
  import React from 'react'
  import { Animate } from 'react-move'

  export default props => (
    <div> react-move <div>
  )
          `}
          </pre>
        </Highlight>

        <div style={styles.content}><strong>Animate</strong> is a <i>higher-order-component (HOC)</i>. it simply means
          it's a wrapper. it can also be defined as a <i>function</i> that takes a component and outputs a new enhanced component.
        </div>

        <div style={styles.content}>Let me show you</div>

        <Highlight language='js'>
          <pre>
          {`
  import React from 'react'
  import { Animate } from 'react-move'

  export default props => (
    
    <Animate> 

      {// component here... }
    
    </Animate>
  
  )
          `}
          </pre>
        </Highlight>

        <div style={styles.content}><strong>Animate</strong> requires two properties: </div>
        <div style={styles.content}><i>default</i> & <i>data</i> | type: Object</div>
        <Highlight language='js'>
          <pre>
          {`
  import React from 'react'
  import { Animate } from 'react-move'

  export default props => (
    
    <Animate
      default={{ n: 0 }}
      data={{ n: 1 }}
    > 

      {// component here... }
    
    </Animate>
  
  )
          `}
          </pre>
        </Highlight>

        <div style={styles.content}> here we've added <strong>n</strong> with a default value of <strong>0</strong>. </div>
        <div style={styles.content}> and on <i>data</i> with <strong>n</strong> to interpolate from <i>default</i> value <strong>0</strong> to <strong>1</strong>. </div>
        
        
        
        


        <Highlight language='js'>
          <pre>
          {`
  import React from 'react'
  import { Animate } from 'react-move'

  export default props => (
    
    <Animate
      default={{ n: 0 }}
      data={{ n: 1 }}
      duration={1000}
      easing={'easeIn'}
    > 

      { i=>
        (
          <p> { i.n } </p>
        )
      }
    
    </Animate>
  
  )
          `}
          </pre>
        </Highlight>
        
        
        <div style={styles.content}>i've added:</div>
        <div style={styles.content}><i>duration</i> | milliseconds | type: number </div>
        <div style={styles.content}><i>easing</i> | d3-interpolate | type: String</div>
        <br/>
        <div style={styles.content}>Being an <strong>HOC</strong>, inside the <strong>Animate </strong>
          we have a <i>function</i> that takes an argument <strong><i>i</i></strong> and returns a single element 
          <i> {`<p> { i.n } </p>`}</i>
        </div>
        <br/>
        <div style={styles.content}>Let's see it in action!</div>


        <div style={styles.run}>
        <Animate
          default={{ n: 0 }}
          data={{ n: this.state.counter }}
          duration={ 1000 }
          easing={ 'easeIn' }
        >

          {i=> 
            (
              <div style={styles.content}> { Number(i.n).toFixed(2) } </div>
            )
          }

        </Animate>
        <button style={styles.button} onClick={this.add.bind(this)}> + </button>
        </div>

        <div style={styles.content}>in this counter demo we can see how the number interpolates from <strong>n</strong> to <strong>n + 1 </strong>. </div>
        <div style={styles.content}>pretty neat right? </div>

        <br/>
        <div style={styles.content}>here's more! </div>
        <br/>

        <div style={styles.run}>
        <Animate
          default={{ n: 0 }}
          data={{ n: this.state.space }}
          duration={ 1000 }
          easing={ 'easeIn' }
        >

          {i=> 
            (
              <div style={Object.assign( {}, styles.content, {letterSpacing: i.n })}> letter spacing </div>
            )
          }

        </Animate>
        <br/>
        <button style={styles.button} onClick={this.space.bind(this)}> toggle </button>
        </div>

        <div style={styles.content}> in this demo, interpolation happens in <i> letterSpacing </i> <strong>in-line style</strong>. </div>

        <Highlight language='js'>
          <pre>
          {`
  import React from 'react'
  import { Animate } from 'react-move'

  export default props => (
    
    <Animate
      default={{ l: 0 }}
      data={{ l: 3 }}
      duration={1000}
      easing={'easeIn'}
    > 

      { i=>
        (
          <p style={{ letterSpacing: i.l }}> letter spacing </p> 
        )
      }
    
    </Animate>
  
  )
          `}
          </pre>
        </Highlight>

        <div style={styles.content}>here's a rotate example! </div>


        <div style={styles.run}>
        <Animate
          default={{ n: 0, r: 0 }}
          data={{ n: this.state.deg, r: this.state.radius }}
          duration={ 1000 }
          easing={ 'easeIn' }
        >

          {i=> 
            (
              <div style={Object.assign( {}, styles.rotate, {transform: `rotate(${i.n}deg)`, borderRadius: i.r})}> </div>
            )
          }

        </Animate>
        <br/>
        <button style={styles.button} onClick={this.rotate.bind(this)}> rotate </button>
        </div>

              

        <Highlight language='js'>
          <pre>
          {' transform: `rotate( ${ i.n }deg)`'}
          </pre>
        </Highlight>

        <div style={styles.content}>i've added animation on <i>borderRadius</i> as well </div>

        <Highlight language='js'>
          <pre>
          {` borderRadius: i.r`}
          </pre>
        </Highlight>

        <div style={styles.content}>if you notice I'm only putting single letters to object keys for simplicity. </div>
        <div style={styles.content}><strong>l</strong> letterSpacing, <strong>r</strong> radius, <strong>o</strong> opacity and so forth.. </div>
        <div style={styles.content}>but ofcourse you can name them to whatever is convenient and easier for you. </div>

        <div style={styles.content}>you can add animations to just about everything that you can style in <i>css</i> like the element's <strong>opacity</strong>, 
        <strong> width & height</strong>, <strong>borderWidth</strong>, <strong>padding</strong> and more! </div>

        <div style={styles.content}>for updates, follow me on twitter & github! </div>
        <br/>
        <div style={styles.footer}>
          <a href='http://twitter.com/phtn458'>
          <img style={styles.img} src={ Twitter } width={25} height={25} alt='' />  
          </a>
          <a href='http://github.com/phtn'>
          <img style={styles.img} src={ Github } width={25} height={25} alt='' />  
          </a>
        </div>
        <br/>


        </div>

              















      </div>
    );
  }
}
export default MovePage;
