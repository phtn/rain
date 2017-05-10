import React, { Component } from 'react'
import mojs from 'mo-js'


class Burst extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

    const first = new mojs.Burst({
      radius: {0: 50},
      count: 1,
      angle: [-90],
      duration: 100,
      top: document.getElementById('logo').offsetTop + 16,
      left: document.getElementById('logo').offsetLeft,
      children: {
        shape: 'polygon',
        points: 4,
        fill: {'#ff4c4c' : "#eee"},
        delay: 1000,
        radius: {5:0},
        angle: {0: -270}

      }
    })
    const second = new mojs.Burst({
      radius: {0: 50},
      count: 1,
      angle: [-90],
      duration: 200,
      top: document.getElementById('logo').offsetTop +8,
      left: document.getElementById('logo').offsetLeft,
      children: {
        shape: 'circle',
        fill: {'#ff4c4c' : "#eee"},
        delay: 1600,
        radius: {1:0}

      }
    })
    const third = new mojs.Burst({
      radius: {0: 50},
      count: 1,
      angle: [-90],
      duration: 200,
      top: document.getElementById('logo').offsetTop,
      left: document.getElementById('logo').offsetLeft,
      children: {
        shape: 'circle',
        fill: {'#ff4c4c' : "#eee"},
        delay: 1300,
        radius: {1:0}

      }
    })
    new mojs.Timeline({repeat: 99}).add( first.replay(), second, third ).play()

  }
  render(){
    return (
      <div></div>
    )
  }
}
export default Burst
