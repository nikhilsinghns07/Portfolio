import React from 'react';
import {Nav,NavLink,NavMenu,} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
            <NavLink to='/' activeStyle> Home </NavLink>
            <NavLink to='/projects' activeStyle>Projects</NavLink>
            <NavLink to='/apk' activeStyle>Download</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
