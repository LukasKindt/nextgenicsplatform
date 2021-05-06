import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css';

function Banner() {
  let { page } = useParams();
  page = page.replace(/-/g, ' ');
  return (
    <div className='navbar'>
        <section className='bannerLeft'>
            <h1>{page}</h1>
        </section>
        <section className="bannerRight">
            <div className="profile"></div>
            <div>
                <p className="bannerName">Name</p>
                <p className="bannerRole">Administrator</p>
            </div>
        </section>
    </div>
  );
}

export default Banner;