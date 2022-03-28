import React from 'react'
import { Image } from 'react-bootstrap';
import avatar from "../../../assets/avatar.png";
export default function SingleConversation() {
  return (
    <div className="d-flex single-conversation-container">
      <Image
        roundedCircle
        src={avatar}
        height={60}
        className="conversation-list-avatar mx-3 my-2"
      />
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between details-list mt-3">
          <span>Nombre</span>{" "}
          <span className="last-message-date  pt-1">fecha</span>
        </div>
        <p className="preview-truncate-message">mensaje truncado de preview</p>
      </div>
    </div>
  );
}
