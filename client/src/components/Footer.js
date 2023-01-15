import React from 'react';
import {
  MDBFooter,

} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Jason Ton, Scott Mattix, Oriel Savir
        </a>
      </div>
    </MDBFooter>
  );
}