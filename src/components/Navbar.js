import React from 'react';
import {Nav,NavLink,NavMenu,} from './NavbarElements';
import logo from '../pics/logo.jpeg'

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
            <NavLink to='/' activeStyle> <img src={logo} alt='Logo' style={{height:60,width:70,borderRadius:50}}/> </NavLink>
            <NavLink to='/projects' activeStyle>Projects</NavLink>
            <NavLink to='/apk' activeStyle>Download</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
