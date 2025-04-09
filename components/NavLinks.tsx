import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  return (
    <NavItemList>
      {navItems.map(({ href, label }) => (
        <NavItemWrapper key={href}>
          <NextLink href={href}>{label}</NextLink>
        </NavItemWrapper>
      ))}
    </NavItemList>
  );
}

const NavItemList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItemWrapper = styled.li`
  a {
    color: rgb(var(--text));
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(var(--primary));
    }
  }
`; 