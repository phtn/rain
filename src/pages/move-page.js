import React, { Component } from 'react';
import '../App.css'
import Highlight from 'react-highlight.js'
import { Animate } from 'react-move'

/* components */
import NAV from './nav-page'
//import FOOTER from '../components/footer'

const styles = {
  container: {
    backgroundColor: 'transparent'
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
  }
}

class App extends Component {

  state = {
    counter: 0
  }

  add(){
    this.setState({counter: this.state.counter + 1})
  }

  render() {

    return (
      <div style={styles.container}>
              <NAV color={'green'} first={'react'} second={'move'} />
              
              <div className='code-container'>

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

              <Highlight language='js'>
                <pre>
                {`
 ~> yarn add react-move 
                `}
                </pre>
              </Highlight>

              <div style={styles.content}>or if you prefer <strong>npm</strong> ...</div>

              <Highlight language='js'>
                <pre>
                {`
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
              
              
              <div style={styles.content}>i've added <i>duration</i> | type: number & <i>easing</i> type: String</div>
              <div style={styles.content}>Being an <strong>HOC</strong>, inside the <strong>Animate </strong>
                we have a <i>function</i> that accepts an argument <strong><i>i</i></strong> and returns a single element 
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

              <div style={styles.content}>in this counter example we can see how the number interpolates. </div>
              <div style={styles.content}>pretty neat right? </div>

              <br/>
              <div style={styles.content}>more examples coming soon! bye for now :) </div>
              <br/>








              </div>

              















      </div>
    );
  }
}
export default App;
