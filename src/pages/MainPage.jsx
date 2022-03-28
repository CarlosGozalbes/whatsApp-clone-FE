import React from 'react'
import ContactsSideBar from '../components/contactssidebar/ContactsSideBar'
import ConversationDetails from '../components/conversationdetails/ConversationDetails'
import './mainpage.css'
import { Row,Col } from 'react-bootstrap'
function MainPage() {
  return (
    <>
      <Row fluid>
        <Col fluid md={4} className="contacts-side-bar">
          <ContactsSideBar />
        </Col>
        {<Col fluid md={8} className="coversation-details">
            <ConversationDetails />          
        </Col> }
      </Row>
    </>
  );
}

export default MainPage