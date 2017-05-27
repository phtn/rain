import React, { Component } from 'react';
import '../App.css'
import Highlight from 'react-highlight.js'
import { Motion, spring, presets } from 'react-motion'
import Twitter from '../../public/svg/twitter.svg'
import Github from '../../public/svg/github.svg'

/* components */
import NAV from './nav-page'
//import FOOTER from '../components/footer'

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
    borderBottom: '1px solid #00a4e4'
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
    backgroundColor: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0px auto',
    border: '1px solid #00a4e4'
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

class MotionPage extends Component {

  state = {
    counter: 0,
    slide: -250,
    deg: 0,
    radius: 0
  }

  add() {
    this.setState({counter: this.state.counter + 1})
  }

  slide() {
    this.state.slide === -250 ? this.setState({slide: window.innerWidth / 2 -85}) : this.setState({slide: -250})
  }

  rotate() {
    this.state.deg === 0 ? this.setState({deg: 180}) : this.setState({deg: 0}) 
    this.state.radius === 0 ? this.setState({radius: 50}) : this.setState({radius: 0}) 
  }

  render() {

    return (
      <div style={styles.container}>
              <NAV color={'444'} first={'react'} second={'motion'} />
              
              <div className='code-container'>

              <div style={styles.tab}>
                <span style={styles.tabs}>Motion</span>
                <span style={styles.content}>&</span>
                <span style={styles.tabs}>spring</span>
              </div>

              <div style={styles.content}>This tutorial assumes that you already have <strong>create-react-app</strong> installed.</div>

              <div style={styles.content}>Ok, let's get started by creating a simple <i>stateless component</i>.</div>  
              
              <Highlight language='js'>
                <pre>
                {`
  import React from 'react'

  export default props => (
    <div> react-motion <div>
  )
                `}
                </pre>
              </Highlight>

              <div style={styles.content}>Now let's add <strong>react-motion</strong> package.</div>
              <div style={styles.content}>On your <i>terminal</i>, you can type..</div>

              <Highlight language='bash'>
                <pre>
                {`
 #!/bin/bash
 ~> yarn add react-motion 
                `}
                </pre>
              </Highlight>

              <div style={styles.content}>or if you prefer <strong>npm</strong> ...</div>

              <Highlight language='bash'>
                <pre>
                {`
 #!/bin/bash
 ~> npm i -S react-motion
                `}
                </pre>
              </Highlight>

              <div style={styles.content}>Let's go back to our component and import <strong>Motion & spring</strong> like so</div>

              <Highlight language='js'>
                <pre>
                {`
  import React from 'react'
  import { Motion, spring } from 'react-motion'

  export default props => (
    <div> react-motion <div>
  )
                `}
                </pre>
              </Highlight>

              <div style={styles.content}><strong>Motion</strong> is a <i>higher-order-component (HOC)</i> & 
              <strong> spring</strong> is a method that specifies how to animate to the destination value.
              </div>

              <div style={styles.content}>Let me show you</div>

              <Highlight language='js'>
                <pre>
                {`
  import React from 'react'
  import { Motion, spring } from 'react-motion'

  export default props => (
    
    <Motion
      defaultStyle={{ n: 0 }}
      style={{ n: spring(1) }}
    > 

      {// component here... }
    
    </Motion>
  
  )
                `}
                </pre>
              </Highlight>

              <div style={styles.content}><strong>Motion</strong> requires two properties: </div>
              <div style={styles.content}><i>defaultStyle</i> & <i>style</i> | type: Object</div>

              <Highlight language='js'>
                <pre>
                {`
  import React from 'react'
  import { Motion, spring } from 'react-motion'

  export default props => (
    
    <Motion
      defaultStyle={{ n: 0 }}
      style={{ n: spring(1) }}
    > 

      { i=>
        (
          <p> { i.n } </p>
        )
      }
    
    </Motion>
  
  )
                `}
                </pre>
              </Highlight>
              

              <div style={styles.content}> here we have <i>defaultStyle</i> <strong>n</strong> with a value of <strong>0</strong>. </div>
              <div style={styles.content}> and <i>style</i> <strong>n</strong> with a destination value of <strong>1</strong>. </div>
              
              
              
              
              <br/>
              <div style={styles.content}>Let's check it out!</div>


              <div style={styles.run}>

                <Motion
                  defaultStyle={{ n: 0 }}
                  style={{ n: spring(this.state.counter) }}
                >

                  {i=> 
                    (
                      <div style={styles.content}> { Number(i.n).toFixed(2) } </div>
                    )
                  }

                </Motion>
                <button style={styles.button} onClick={this.add.bind(this)}> + </button>
                
              </div>

              <div style={styles.content}>in this counter demo we can see how the number interpolates from <strong>n</strong> to <strong>n + 1 </strong>. </div>
              <div style={styles.content}>by default, </div>
              <div style={styles.content}><strong>spring</strong> <i>stiffness</i> is set to <strong>170</strong> </div>
              <div style={styles.content}><strong>spring</strong> <i>damping</i> is set to <strong>26</strong> </div>

              <br/>
              <div style={styles.content}>here's how to override defaults: </div>
              <br/>

              <Highlight language='js'>
                <pre>
                {`
  <Motion
    defaultStyle={{ n: 0 }}
    style={{ n: spring(1, { stiffness: 150, damping: 20 } ) }}
  > 
  
  </Motion>
                `}
                </pre>
              </Highlight>

              <div style={styles.content}><strong>react-motion</strong> doesn't offer specific configuration for the duration of the animation. 
               but a rule of thumb is the higher the <i>stiffness</i>, the faster it animates.
              </div>

              <br/>
              <div style={styles.content}><strong>presets</strong></div>
              <div style={styles.content}>there are 4 <i>spring</i> presets ready to use.   </div>
              <div style={styles.content}><i>noWobble</i>, <i>gentle</i>, <i>wobbly</i> & <i>stiff</i>. </div>
              <br/>
              <div style={styles.content}>add presets to imports </div>
              
              <Highlight language='js'>
                <pre>
                {`
  import { Motion, spring, presets } from 'react-motion'
                `}
                </pre>
              </Highlight>

              <div style={styles.content}>and use them like so </div>

              <Highlight language='js'>
                <pre>
                {`
  style={{ n: spring(1, presets.gentle) }}
                `}
                </pre>
              </Highlight>


              <div style={styles.content}>here's another example: </div>


              <div style={styles.run}>
              <Motion
                defaultStyle={{ n: -250 }}
                style={{ n: spring(this.state.slide, presets.wobbly) }}
              >

                {i=> 
                  (
                    <div style={Object.assign( {}, styles.content, {left: i.n, position: 'absolute' })}> motion in action! </div>
                  )
                }

              </Motion>
              <br/><br/>
              <button style={styles.button} onClick={this.slide.bind(this)}> slide </button>
              </div>

              <div style={styles.content}>this is what the code looks like without the toggle</div>

              <Highlight language='js'>
                <pre>
                {`
  import React from 'react'
  import { Motion, spring, presets } from 'react-motion'

  export default props => (
    
    <Motion
      defaultStyle={{ l: -250 }}
      style={{ l: spring(0, presets.wobbly) }}
    > 

      { i=>
        (
          <p 
            style={{ 
              position: 'absolute', 
              left: i.l 
          }}> 
            motion in action 
          </p> 
        )
      }
    
    </Motion>
  
  )
                `}
                </pre>
              </Highlight>

              <div style={styles.content}>here's a rotate example! </div>


              <div style={styles.run}>
              <Motion
                defaultStyle={{ n: 0, r: 0 }}
                style={{ n: spring(this.state.deg, {stiffness: 100}), r: spring(this.state.radius, {stiffness: 50}) }}
              >

                {i=> 
                  (
                    <div style={Object.assign( {}, styles.rotate, {transform: `rotate(${i.n}deg)`, borderRadius: i.r})}> </div>
                  )
                }

              </Motion>
              <br/>
              <button style={styles.button} onClick={this.rotate.bind(this)}> rotate </button>
              </div>

              

              <Highlight language='js'>
                <pre>
                {`
  style=
    {{ 
      d: spring(180, {stiffness: 100}), 
      r: spring(50, {stiffness: 50}) 
    }}
                  `}
                </pre>
              </Highlight>

              <div style={styles.content}><strong>d</strong> for degrees to rotate &</div>
              <div style={styles.content}><strong>r</strong> for radius of borders</div>

              

              <div style={styles.content}>I set single letters to object keys for simplicity. </div>
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
export default MotionPage;
