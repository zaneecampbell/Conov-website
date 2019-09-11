import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = () => {
  const [isOpenToggle, setisOpenToggle] = useState({
    isOpen: false
  });

  const { isOpen } = isOpenToggle;

  const onToggle = e => {
    setisOpenToggle({ ...isOpenToggle, isOpen: !isOpen });
  };

  return (
    <div>
      <Navbar
        style={{ backgroundColor: 'rgb(251, 223, 216)' }}
        light
        expand='md'
      >
        <NavbarBrand style={{ color: 'grey' }} tag={Link} to='/'>
          Conov
        </NavbarBrand>
        <NavbarToggler onClick={onToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink style={{ color: 'grey' }} tag={Link} to='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'grey' }} tag={Link} to='/'>
                Portfolio
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                style={{ color: 'grey' }}
                tag={Link}
                to='/'
                nav
                caret
              >
                Type
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Type A</DropdownItem>
                <DropdownItem>Type B</DropdownItem>
                <DropdownItem>Type C</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink style={{ color: 'grey' }} tag={Link} to='/'>
                Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
