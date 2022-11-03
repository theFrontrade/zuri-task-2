import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div>
      {linkList.map((item) => (
        <a
          href={item.link}
          target={item.target}
          rel='noreferrer'
          className='link-button'
          key={item.key}
          id={item.id}
        >
          {" "}
          {item.name}
        </a>
      ))}
        <a 
          id='contact' 
        >
          <Link className="link-button" to='/contact'> Contacts</Link>
        </a>
      <div className='link-img-wrap'>
        <a
          href='https://github.com/thefrontrade'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/img/slack.png' alt='img' />
        </a>
        <a
          href='https://github.com/thefrontrade'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/img/icon.png' alt='img' />
        </a>
      </div>
    </div>
  );
};
export default Links;

export const linkList = [
  {
    key: 1,
    id: "twitter__link",
    target: "_blank",
    name: "Twitter link",
    link: "https://twitter.com/theFrontrade",
  },
  {
    key: 2,
    id: "btn__zuri",
    target: "_blank",
    name: "Zuri Team",
    link: "https://training.zuri.team/",
  },
  {
    key: 3,
    id: "books",
    target: "_blank",
    name: "Zuri Books",
    link: "https://books.zuri.team/",
  },
  {
    key: 4,
    id: "books__python",
    target: "_blank",
    name: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=thefrontrade",
  },
  {
    key: 5,
    id: "pitch",
    name: "Background Checks for Codes",
    link: "https://background.zuri.team/",
  },
  {
    key: 6,
    id: "books__design",
    target: "_blank",
    name: "Design Books",
    link: "https://books.zuri.team/design-rules",
  },
];
