import React from 'react'
import './headercontactbar.css'
import { Image } from 'react-bootstrap'
import avatar from '../../assets/avatar.png'
import { BsThreeDots, BsPlusLg, BsFullscreen, BsSearch } from "react-icons/bs";
export default function HeaderContactBar() {
  return (
    <>
      <header className="header-with-profile d-flex justify-content-between">
        <div>
          <Image
            roundedCircle
            src={avatar}
            height={50}
            className=" mx-3 my-2"
          />
          <span>Beta</span>
        </div>
        <div className="header-options align-self-center pb-2 mr-3">
          <BsFullscreen className="mr-3 header-icons" />
          <BsPlusLg className="mr-3 header-icons" />
          <BsThreeDots className="header-icons" />
        </div>
      </header>
      <div className="input-search-contact-container">
        <BsSearch className='ml-3'/>
        <input type="text" placeholder="search a chat or start a new one" className='search-contact-input'/>
      </div>
    </>
  );
}
