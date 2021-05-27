import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
      })
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="data:image/png;base64,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"
          alt="">
        </img>        
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search email" type="text"/>
        <ArrowDropDownIcon className="header__input" />
      </div>

      <div className="header__right">
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header;
