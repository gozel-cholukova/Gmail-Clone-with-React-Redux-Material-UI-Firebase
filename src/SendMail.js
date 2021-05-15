import React from 'react';
import "./SendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function SendMail() {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {

  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon 
          className="sendMail__close" 
          onClick={() => dispatch(closeSendMessage())}
        />
      </div> 

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name='to' 
          placeholder="To" 
          type="email" 
          ref={register("name value", { required: true })} 
        />
        {errors.to && 
          <p className="sendMail__error">To is Required!</p>
        }

        <input 
          name='submit' 
          placeholder="Subject" 
          type="text" 
          ref={register("name value", { required: true })} 
        />
        {errors.to && 
          <p className="sendMail__error">Subject is Required!</p>
        }
        
        <input 
          name='message'
          placeholder="Message..." 
          type="text" 
          className="sendMail__message"
          ref={register("name value",{ required: true })} 
        />
        {errors.to && 
          <p className="sendMail__error">Message is Required!</p>
        }

        <div className="sendMail__options">
          <Button 
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
