import React from 'react';
import "./Mail.css";
import { IconButton  } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
        <IconButton onClick={() => history.push("/")} >
          <ArrowBackIcon />
        </IconButton>

        <IconButton>
          <ArchiveIcon />
        </IconButton>

        <IconButton>
          <ReportIcon />
        </IconButton>

        <IconButton>
          <DeleteIcon />
        </IconButton>

        <IconButton>
          <MarkunreadIcon />
        </IconButton>

        <IconButton>
          <WatchLaterIcon />
        </IconButton>

        <IconButton>
          <CheckCircleIcon />
        </IconButton>

        <IconButton>
          <AssignmentReturnIcon />
        </IconButton>

        <IconButton>
          <LabelIcon />
        </IconButton>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeftIcon fontSize="small"/>
          </IconButton>

          <IconButton>
            <ChevronRightIcon fontSize="small"/>
          </IconButton>
        </div>      
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail__important" />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>

        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
