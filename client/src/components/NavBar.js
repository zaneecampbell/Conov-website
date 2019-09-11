import React, { useState } from 'react';
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
      <Navbar color='primary' light expand='md'>
        <NavbarBrand href='/'>Conov</NavbarBrand>
        <NavbarToggler onClick={onToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                Portfolio
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Type
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Type A</DropdownItem>
                <DropdownItem>Type B</DropdownItem>
                <DropdownItem>Type C</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
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
