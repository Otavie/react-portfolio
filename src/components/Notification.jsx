import React from 'react';
import '../notification.css'

export const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
        <div className="notification-content">
            <p className="mb-1">{ message }</p>
            <button className="mt-1 btn-close text-white" onClick={onClose}></button>
        </div>
    </div>
  )
}
