import './component.css'
import { AiOutlineLike } from 'react-icons/ai'
import { useEffect, useState } from 'react';

import React from 'react'
import { Button } from 'react-bootstrap';
import { IconButton } from '../../../../components/iconButton';
import { ShowDiscussionmodel } from './Model';
import { PostImage } from '../../../../components/imageLoading';


export function RoundedIconButton(props) {
  return (
    <div {...props} className='RoundedIconBUtton_outer'>
      {props.children}
    </div>
  )
}
export function DiscussionTemplate() {
  return (
    <div className='user_homePage_discussion_template'>
      <div className='user_homePage_discussion_template_userName' >
        UserName
      </div>
      <div className='user_homePage_discussion_template_text'>
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        here notification displays. notification is controlled by admin of institutions
        user types Discussion here so that others can also participate. this is very important section in the world famouse hystory of the logica illussion.
      </div>
      <div className='user_homePage_discussion_template_time'>
        00:00
      </div>

    </div>
  )
}

export function PlaneButton1(props) {

  //props
  //width - width of button
  const [isHoverded, setHover] = useState(false);
  const buttonStyle = { style: { background: isHoverded === false ? '#ffffff' : 'rgba(232, 232, 232, 1)', padding: '10px', borderStyle: "none", minWidth: '100px', "width": props.width, fontFamily: "'Alumni Sans'", fontStyle: "normal", fontWeight: "400", fontSize: "21px", color: "#000000", textShadow: "6px 4px 8px rgba(0, 0, 0, 0.08)", lineHeight: '0.5', border: '1px solid rgba(0, 0, 0, 0.3)' } }

  function mouseOverEvent() {
    setHover(true);
  }

  function mouseLeaveEvent() {
    setHover(false);
  }

  return (
    <Button style={buttonStyle.style} onMouseEnter={mouseOverEvent} onMouseLeave={mouseLeaveEvent} onClick={props.onClick}>{props.children}</Button>
  );
}


export function PostTemplate(props) {

  const [showDiscussionModel, setShowDiscussionModel] = useState(false);
  function showDiscussionModelfunc() {
    setShowDiscussionModel(true);
  }
  function closeDiscussionModelfunc() {
    setShowDiscussionModel(false)
  }
  const post = props.value;
  const date = new Date(post.createdAt)
  
  return (
    <div className='user_postTemplate_outerDiv'>
      <div className='user_postTemplate_innerDiv'>
        <div className='user_postTemplate_autherDiv'>
          <p>{post.owner.fullName}</p>
        </div>
        <div className='user_postTemplate_contenDiv'>
          {post.images.length > 0 ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className='user_postTemplate_imageSpace'>
              {post.images.map((id, index) => <PostImage key={index} id={id} dId={id} />)}
            </div>
          </div> : <div></div>}
          <p className='heading'>{post.title}</p>
          <p className='body'>{post.description}</p>
          <div className='botttt'>
            <div className='intractionDiv'>
              <IconButton ><AiOutlineLike size={30} /></IconButton>
              <div style={{ width: '20px' }}></div>
              <PlaneButton1 width={'100px'} onClick={showDiscussionModelfunc}>Discussion</PlaneButton1>
            </div>
            <div>
              {date.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <ShowDiscussionmodel show={showDiscussionModel} onClose={closeDiscussionModelfunc} />
    </div>
  )
}
