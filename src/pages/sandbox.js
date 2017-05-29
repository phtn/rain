import React, { Component } from 'react'
import { Animate } from 'react-move'

const styles = {
    
    nav: {
        backgroundColor: '#00a4e4',
        borderRadius: 300,
    },
    brand: {
        margin: 10
    }
}
class Sandbox extends Component {
    state={
        width: 50,
        height: 50,
        radius: 50,
    }
    stretch(){
        this.setState({width: window.innerWidth})
        this.setState({height: window.innerHeight})
        this.setState({radius: 0})
    }
    
    render(){
        return(
                
            <Animate
                default={{h: 0, w: 0, r: 50, o: 0}}
                data={{h: this.state.height, w: this.state.width, r: this.state.radius, o: 1}}
            >
            {i=> (
                
                
                <div style={ Object.assign({}, styles.nav, 
                {height: i.h, width:i.w, borderRadius: `0px 0px ${i.r}px 0px`}) }
                onClick={this.stretch.bind(this)}
                >
                    
                </div>
                    
                

            )}
            </Animate>
                
        )
    }
}
export default Sandbox