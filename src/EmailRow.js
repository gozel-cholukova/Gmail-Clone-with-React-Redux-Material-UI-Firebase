import React from 'react';
import './EmailRow.css';
import { IconButton  } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function EmailRow({ title, subject, description, time }) {
  return (
    <div className="emailRow">

      <div className="emailRow__options">
        <CheckBoxOutlineBlankIcon />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">
        {title}
      </h3>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow__time">
        {time}
      </p>
      
    </div>
  );
}

export default EmailRow;
