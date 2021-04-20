import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavigateData, SettingsData, ForesightData, InsightData, OversightData, HindsightData } from './SidebarData.js';
import './Navbar.css';

function Navbar() {

  const getSidebarPages = (id) => {
    switch(id){
      case "foresight":
        return(
          ForesightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }));
        break;
      case "insight":
        return(
        InsightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }));
        break;
      case "oversight":
        return(
        OversightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }))
        break;
      case "hindsight":
        return(
        HindsightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }))
        break;
      default:
    }
  }

  let { id } = useParams();
  return (
    <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            <section>
            <section class="sidebarTop"> 
              <img src="../assets/logoSmall.png" alt="Forcit" className='logoSmall'/>
              <p>{id}</p>
            </section>
            <section class="nav-navigate">
              <h2>NAVIGATE</h2>
            {NavigateData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </section>


            <section class="nav-pages">
              {getSidebarPages(id)}
            </section>


            </section>
            <section>
            <section class="nav-settings">
              <h2>SETTINGS</h2>
              {SettingsData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </section>
            </section>
          </ul>
        </nav>
  );
}

export default Navbar;