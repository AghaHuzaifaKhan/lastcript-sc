import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Cookies Policy', href: '/cookies-policy' },
    ],
  },
  {
    title: 'About Us',
    items: [
      { title: 'Services', href: '/services' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Team', href: '/team' },
    ],
  },
 
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
            
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <SocialLinkList>
              <SocialLinkItem>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon size={50} round={true} />
                </SocialLink>
              </SocialLinkItem>
              <SocialLinkItem>
                <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon size={50} round={true} />
                </SocialLink>
              </SocialLinkItem>
              <SocialLinkItem>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={50} round={true} />
                </SocialLink>
              </SocialLinkItem>
            </SocialLinkList>
          </ShareBar>
          <Copyright>&copy; Copyright 2025 Lastcript</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
  border-top: 1px solid white;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10rem;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const SocialLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SocialLinkItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

const SocialLink = styled.a`
  color: rgba(var(--textSecondary), 0.75);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(var(--textSecondary), 1);
  }
`;
