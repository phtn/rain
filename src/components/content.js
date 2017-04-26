import React from 'react'
import Flexbox from 'flexbox-react'
import Info from '../../public/svg/info.svg'
export default props => (
  <div style={{
    height: '100%',
    overflowY: 'auto',
    minHeight: 0}}>


    <div style={{border: '1px solid #777', padding: 20, borderRadius: 5}}>



    <Flexbox flexGrow={1} flexDirection={'row'}>
      <Flexbox flexGrow={1} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <img src={Info} height={20} width={20} />
      </Flexbox>
      <Flexbox flexGrow={4} style={{justifyContent: 'center'}}>
        <span style={{
          color: '#666',
          fontSize: 12,
          backgroundColor: '#111',
          borderRadius: 5,
          padding: '10px 20px 10px 20px',
          fontFamily: 'Merriweather'}}>
            &middot; {props.offset} &middot;
        </span>
      </Flexbox>
      <Flexbox flexGrow={1} style={{justifyContent: 'center', alignItems: 'center'}}>
        <span style={{fontSize: 10, fontFamily: 'Inconsolata', color: '#eee'}}>{'new'}</span>
      </Flexbox>
    </Flexbox>

    </div>

    <div style={{border: '1px solid #777', padding: 20, borderRadius: 5}}>



    <Flexbox flexGrow={1} flexDirection={'row'}>
      <Flexbox flexGrow={1} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <img src={Info} height={20} width={20} />
      </Flexbox>
      <Flexbox flexGrow={4} style={{justifyContent: 'center'}}>
        <span style={{
          color: '#666',
          fontSize: 12,
          backgroundColor: '#111',
          borderRadius: 5,
          padding: '10px 20px 10px 20px',
          fontFamily: 'Merriweather'}}>
            &middot; intro &middot;
        </span>
      </Flexbox>
      <Flexbox flexGrow={1} style={{justifyContent: 'center', alignItems: 'center'}}>
        <span style={{fontSize: 10, fontFamily: 'Inconsolata', color: '#eee'}}>{'new'}</span>
      </Flexbox>
    </Flexbox>

    </div>




  </div>
)
