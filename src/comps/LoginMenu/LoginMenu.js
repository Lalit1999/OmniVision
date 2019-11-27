import React from 'react' ;

import './menu.css' ;

class LoginMenu extends React.Component
{
	render()
	{
		return (
			<div className="loginmenu">
				<div className="burger" >
					<a className="item link" href='/face'> Face Detection </a>
					<a className="item link" href='/general'> Object Detection </a>
					<a className="item link" href='/color'> Color Detection </a>
					<a className="item link" href='/age'> Age & Gender Detection </a>
				</div>
			</div>
			) ;
	}
}

export default LoginMenu ;