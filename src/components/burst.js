import React, { Component } from 'react'
import mojs from 'mo-js'
const first = new mojs.Burst({
  radius: {0: 50},
  count: 1,
  angle: [-90],
  duration: 100,
  top: 'rand(58,60)',
  children: {
    shape: 'polygon',
    points: 4,
    fill: {'#c1d82f' : "#eee"},
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
  top: 'rand(56,58)',
  children: {
    shape: 'circle',
    fill: {'#c1d82f' : "#eee"},
    delay: 1600,
    radius: {1:0}

  }
})
const third = new mojs.Burst({
  radius: {0: 50},
  count: 1,
  angle: [-90],
  duration: 200,
  top: 50,
  children: {
    shape: 'circle',
    fill: {'#c1d82f' : "#eee"},
    delay: 1300,
    radius: {1:0}

  }
})

class Burst extends Component {
  componentDidMount(){
    new mojs.Timeline({repeat: 99}).add( first.replay(), second, third ).play()

  }
  render(){
    return (
      <div></div>
    )
  }
}
export default Burst
