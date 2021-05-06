import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NavigateData, SettingsData, ForesightData, InsightData, OversightData, HindsightData, CoreData } from './SidebarData.js';
import './Navbar.css';
import * as AiIcons from 'react-icons/ai';

function Navbar() {

  /*const getSidebarPages = (component, page) => {
    switch(component){
      case "core":
        return(
          CoreData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
                </Link>
              </li>
            );
          }));
      case "foresight":
        return(
          ForesightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));
      case "insight":
        return(
        InsightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));
      case "oversight":
        return(
        OversightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));
      case "hindsight":
        return(
        HindsightData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
               <span className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>{item.title}</span>
              </Link>
            </li>
          );
        }));

      default:
    }
  }*/

  let { page } = useParams();
  return (
    <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            <section>
            <section class="sidebarTop"> 
              <img src="../assets/nextGenicsSmall.png" alt="Nextgenics" className='logoSmall'/>
              {/*<p class="nav-id">{component}</p>*/}
            </section>


            {/*<section class="nav-pages">
              {getSidebarPages(component, page)}
  </section>*/}

            <section class="nav-navigate">
            {NavigateData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                  <Link to={item.path} className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </section>


            </section>
            <section class="nav-settings">
              {SettingsData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className={item.title.toLowerCase().replace(/\s/g, '-') === page.toLowerCase() ? ("activated"):null}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </section>

            <section class="nav-settings">
              <li className="nav-text">
                <Link>
                  <AiIcons.AiTwotoneVideoCamera />
                  <span>Log Out</span>
                </Link>
              </li>
            </section>
          </ul>
        </nav>
  );
}

export default Navbar;