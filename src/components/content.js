import React from 'react'
import Flexbox from 'flexbox-react'
import Info from '../../public/svg/info.svg'
export default props => (
  <div style={{
    height: '100%',
    overflowY: 'auto',
    minHeight: 0}}>


    <Flexbox flexDirection={'column'} style={{border: '1px solid #555', padding: 20, borderRadius: 5}}>
    <Flexbox flexGrow={1} flexDirection={'row'}>
      <Flexbox flexGrow={1} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <img src={Info} height={20} width={20} />
      </Flexbox>
      <Flexbox flexGrow={4} style={{justifyContent: 'center'}}>
        <span style={{color: '#666',fontSize: 12, backgroundColor: '#111', borderRadius: 5, padding: '10px 20px 10px 20px', fontFamily: 'Merriweather'}}>&middot; brief intro &middot;</span>
      </Flexbox>
      <Flexbox flexGrow={1}>
      </Flexbox>
    </Flexbox>
    </Flexbox>




  </div>
)
