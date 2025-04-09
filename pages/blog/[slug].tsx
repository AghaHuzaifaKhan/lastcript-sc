import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { staticRequest } from 'tinacms';
import { Posts, PostsConnection, PostsConnectionEdges } from '.tina/__generated__/types';
import Container from 'components/Container';
import MDXRichText from 'components/MDXRichText';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';
import Header from 'views/SingleArticlePage/Header';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';

// Type for your post data
interface PostData {
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl: string;
  body: any;
}

interface PageProps {
  slug: string;
  post: PostData | null;
}

// Mock data for production (replace with your actual content)
const MOCK_POSTS: Record<string, PostData> = {
  'example-post': {
    title: 'Example Post',
    description: 'This is an example blog post',
    date: new Date().toISOString(),
    tags: ['example', 'blog'],
    imageUrl: '/images/default-post.jpg',
    body: '<p>This is example content</p>'
  }
  // Add more posts as needed
};

export default function SingleArticlePage({ slug, post }: { slug: string; post: PostData | null }) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    calculateReadTime();
    lazyLoadPrismTheme();

    function calculateReadTime() {
      const currentContent = contentRef.current;
      if (currentContent) {
        setReadTime(getReadTime(currentContent.textContent || ''));
      }
    }

    function lazyLoadPrismTheme() {
      const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');

      if (!prismThemeLinkEl) {
        const headEl = document.querySelector('head');
        if (headEl) {
          const newEl = document.createElement('link');
          newEl.setAttribute('data-id', 'prism-theme');
          newEl.setAttribute('rel', 'stylesheet');
          newEl.setAttribute('href', '/prism-theme.css');
          newEl.setAttribute('media', 'print');
          newEl.setAttribute('onload', "this.media='all'; this.onload=null;");
          headEl.appendChild(newEl);
        }
      }
    }
  }, []);

  const content = post?.body;

  if (!post) {
    return null;
  }

  const { title, description, date, tags, imageUrl } = post;
  const meta = { 
    title, 
    description, 
    date: date, 
    tags: tags.join(', '),
    imageUrl: imageUrl || '', 
    author: '' 
  };
  const formattedDate = formatDate(new Date(date));
  const absoluteImageUrl = imageUrl ? (imageUrl as string).replace(/\/+/, '/') : '';
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/prism-theme.css" media="print" onLoad={(e) => (e.currentTarget.media = 'all')} />
      </Head>
      <OpenGraphHead slug={slug} {...meta} />
      <StructuredDataHead slug={slug} {...meta} />
      <MetadataHead {...meta} />
      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
        <MDXRichText content={content} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  if (process.env.NODE_ENV === 'production') {
    return {
      paths: Object.keys(MOCK_POSTS).map(slug => ({ params: { slug } })),
      fallback: 'blocking',
    };
  }
  const postsListData = await staticRequest({
    query: `
      query PostsSlugs{
        postsConnection {
          edges {
            node {
              _sys {
                basename
              }
            }
          }
        }
      }
    `,
    variables: {},
  });

  if (!postsListData) {
    return {
      paths: [],
      fallback: false,
    };
  }

  type NullAwarePostsList = { postsConnection: PostsConnection };
  type PostEdge = PostsConnectionEdges;
  return {
    paths: (postsListData as NullAwarePostsList).postsConnection.edges?.map((edge) => ({
      params: { slug: normalizePostName(edge?.node?._sys.basename || '') },
    })) || [],
    fallback: false,
  };
}

function normalizePostName(postName: string) {
  return postName.replace('.mdx', '');
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };
  // In production, use mock data or fetch from your API
  if (process.env.NODE_ENV === 'production') {
    const post = MOCK_POSTS[slug] || null;
    if (!post) {
      return { notFound: true };
    }
    return { props: { slug, post } };
  }
  const variables = { relativePath: `${slug}.mdx` };
  const query = `
    query BlogPostQuery($relativePath: String!) {
      getPostsDocument(relativePath: $relativePath) {
        data {
          title
          description
          date
          tags
          imageUrl
          body
        }
      }
    }
  `;

  const data = (await staticRequest({
    query: query,
    variables: variables,
  })) as { getPostsDocument: { data: Posts } };

  return {
    props: { slug, variables, query, data },
  };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;
