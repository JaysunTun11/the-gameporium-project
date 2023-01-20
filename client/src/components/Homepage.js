import React from 'react';
import {
  MDBContainer,

  MDBRow,
  MDBCol,
  MDBIcon,
  
} from 'mdb-react-ui-kit';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Homepage() {


  
const Homepage = () => {

    

  return (
    <header>
      
      
      <div className='p-5 text-center bg-image'>
        

        <center><h1>Welcome </h1></center>
             
        </div>

      
      <br></br>
      <br></br>

    
      <center>
<MDBIcon fas icon="bullhorn" />
      <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
          <h2>!Announcements! </h2>
          <ListGroup variant="flush">
      <ListGroup.Item>New Listing Page UI updated </ListGroup.Item>
      <ListGroup.Item>New Search Filters</ListGroup.Item>
      <ListGroup.Item>Login with Google now functional</ListGroup.Item>
      <ListGroup.Item>Profile Pictures added</ListGroup.Item>
      <ListGroup.Item>App Launch!</ListGroup.Item>
    </ListGroup>
        </MDBCol>
        
        <MDBCol size='md'>
        <h2> Inbox</h2>
        <ListGroup variant="flush">
      <ListGroup.Item>Trade request from Joey </ListGroup.Item>
      <ListGroup.Item>You have a message about your item "Nes Controller"</ListGroup.Item>
      <ListGroup.Item>(10) new likes on your item "Elden Ring"</ListGroup.Item>
      <ListGroup.Item>Message from Dev Team</ListGroup.Item>
      <ListGroup.Item>10 new items in your area</ListGroup.Item>
    </ListGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <br></br>
    <br></br>
    <br></br>
    <h2> Popular Platforms!</h2>
      
    <br></br>
        
        <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
          
        <img
      src='https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_Nintendo_264x150_D.webp'
      className='img'
      alt='...'
      width="300"
      
    />
        </MDBCol>
      
        <MDBCol size='md'>
        <img
      src='https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_PlayStation_264x150_D.webp'
      className='img'
      alt='...'
      width="300"
    />
        </MDBCol>
        <MDBCol size='md'>
        <img
      src='https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_Xbox_264x150_D.webp'
      className='img'
      alt='...'
      width="300"
    />
        </MDBCol>
        
        <MDBCol size='md'>
        <img
      src='https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_Pokemon_264x150_D.webp'
      className='img'
      alt='...'
      width="300"
    />
        </MDBCol>
        
      </MDBRow>
      
    </MDBContainer>
    <br></br>
    <a className='btn btn-light btn-lg' href='listings' role='button'>
                    More deals!
                </a>
                
    </center>
    <br></br>
    <img 
      src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cbabdda-80b4-4926-ac0f-1b71cc9d64dd/ddizj0k-d6ac12b4-9062-42a2-9e8c-b3d486e74c09.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjYmFiZGRhLTgwYjQtNDkyNi1hYzBmLTFiNzFjYzlkNjRkZFwvZGRpemoway1kNmFjMTJiNC05MDYyLTQyYTItOWU4Yy1iM2Q0ODZlNzRjMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NDW54Wqk267i9_7jGqnRIxXpQ70WBIsHJi5ZixAjZMk'
      className='img'
      alt='...'
    />


    
    </header>
    
    // nearby listings
    //inbox
    
    //announcements
    

    //newly listed
    

    
  );
}
}