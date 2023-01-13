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

const ListingPage = () => {
    return ( 
        <MDBCarousel showIndicators showControls fade>
             
      <MDBCarouselItem
        className='carousel d-block'
        itemId={1}
       
        src='https://free4kwallpapers.com/uploads/originals/2020/12/28/purple-skyx-wallpaper.png'
        alt='...'
      >

        <h5>New Arrivals</h5>
        <p>View recently posted items here!</p>
      </MDBCarouselItem>
    
      
      <MDBCarouselItem
        className='carousel d-block'
        itemId={2}
        src='https://external-preview.redd.it/sE0hV3Uv1HO_sUtL9JWe1iqJNm7m4T0RtZ3vQQuBilA.jpg?auto=webp&s=da6a6333d3273ddbea5692e473bdac7cdcbd7e28'
        alt='...'
      >
        <h5>Post your items here!</h5>
        <p>Need some extra cash? Post your items here!</p>
      </MDBCarouselItem>
     
   
      <MDBCarouselItem
        className='carousel d-block'
        itemId={3}
        src='https://rare-gallery.com/mocahbig/424522-artwork-ArtStation-4-k-landscape-purple-background.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Need Help? Check out our support Page!</p>
      </MDBCarouselItem>
    
    </MDBCarousel>
    )
}
export default ListingPage;