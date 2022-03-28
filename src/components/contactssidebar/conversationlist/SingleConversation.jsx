import React from 'react'
import { Image,Row } from 'react-bootstrap';
import avatar from "../../../assets/avatar.png";
import './conversation.css'

export default function SingleConversation() {
  return (
    <div>
      <Row fluid className="d-flex single-conversation-container pl-2">
        <Image
          roundedCircle
          src={avatar}
          height={60}
          className="conversation-list-avatar mx-3 my-2"
        />
        <div className="d-flex flex-column details-list">
          <div className="d-flex justify-content-between mt-3">
            <span>Nombre</span>
            <span className="last-message-date  pt-1">fecha</span>
          </div>
          <span className="preview-truncate-message">
            mensaje Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Totam aut velit ipsam nostrum optio placeat impedit esse suscipit
            magni id qui praesentium sit eveniet deleniti voluptate hic, officia
            asperiores nisi?
          </span>
        </div>
        <div className="message-without-read align-self-end ml-2 mb-3"> 1 </div>
      </Row>
    </div>
  );
}
