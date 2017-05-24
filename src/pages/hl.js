import React, { Component } from 'react'
import Highlight from 'react-highlight.js'

class Code extends Component {
  render () {
    return (
      <Highlight language='js' indent={2}>
        {`import React from react
        
        class App extends Component {
            render(){
                return(
                    
                )
            }
        }`}
      </Highlight>
    )
  }
}
export default Code
