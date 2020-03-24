import React from 'react';
import "./css/Notifications.scss";

const Notifications = ({message,className}) => {
	return (message.length) ? <div className={`message ${className}`}>
		{message}
	</div> : null
};

export default Notifications;