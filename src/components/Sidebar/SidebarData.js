import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io5';

export const NavigateData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <RiIcons.RiDashboardLine />,
    cName: 'nav-text'
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <BsIcons.BsPeople/>,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: 'calendar',
    icon: <IoIcons.IoCalendarOutline />,
    cName: 'nav-text'
  }
];

export const SettingsData = [
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoSettingsOutline />,
    cName: 'set-text'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoHelpCircleOutline />,
    cName: 'set-text'
  }
];