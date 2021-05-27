import React from 'react';
import { Button, IconButton  } from '@material-ui/core';
import SidebarOption from "./SidebarOption";
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button 
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={54}/>
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
      <SidebarOption Icon={SendIcon} title="Sent" number={54}/>
      <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={54}/>
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>

      <div className="sidebar__foot">
        <div className="sidebar__footIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
