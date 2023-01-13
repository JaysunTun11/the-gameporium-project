import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBRow,
  MDBCol,
  Image,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Homepage() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url(https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?cs=srgb&dl=pexels-ithalu-dominguez-907485.jpg&fm=jpg)", height: '400px' }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome!</h1>
              <h4 className='mb-3'>The Gameporium is a site for selling and buying second hand games!</h4>
              <a className='btn btn-light btn-lg' href='listings' role='button'>
                    Shop Now!
                </a>
            </div>
          </div>
        </div>
      </div> 
      
      <br></br>
      <br></br>
    <br></br>
      <br></br>
      <div className = 'popular'>
      <center>
        <br></br>
        <br></br>
        <div className='text-white'>
        <center><h2 >Popular!</h2></center>
        </div>
        


  
        <br></br>
        
        
      <MDBRow>
      <MDBCol lg='4' md='12' className='mb-4'>
      <div className='bg-image hover-overlay'>
        <img src='https://wallpapercave.com/wp/wp2879486.jpg' className='img-fluid rounded-pill' width="300"></img>
        <a href='listings'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
        </a>
        </div>
      </MDBCol>
      <MDBCol lg='4' md='12' className='mb-4'>
      <p><img src = 'https://www.digitaltrends.com/wp-content/uploads/2016/11/Sony-PlayStation-4-Pro-0011.jpg?p=1' className='img-fluid rounded-pill'  width="300" ></img></p>
      </MDBCol>
      <MDBCol md='4'>
      <p><img src = 'https://blogs-images.forbes.com/johnarcher/files/2017/06/XboxOneXLighter.jpeg' className='img-fluid rounded-pill'  width="300"></img></p>
      </MDBCol>
    </MDBRow>
    <a className='btn btn-light btn-lg' href='listings' role='button'>
                    More deals!
                </a>
    </center>
    </div>
    </header>
    
    

    
  );
}