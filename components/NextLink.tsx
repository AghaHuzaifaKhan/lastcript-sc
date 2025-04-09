import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface NextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  passHref?: boolean;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function NextLink({ href, children, className }: NextLinkProps) {
  return (
    <StyledLink href={href} className={className}>
      {children}
    </StyledLink>
  );
}

// The `passHref` prop is commonly used with Next.js `Link` components to pass the `href` prop to child components. 