import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: Singing',

  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: Singing',

  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: Singing',

  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: Singing',

  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: Singing',

  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: Singing',

  },
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'A Huzaifa K.',
    description: 'Email: sabanvd34@gmail.com\nLinkedIn: linkedIn.com\nSkills: cooking',

  },
];

export default function FeaturesPage() {
  return (
    <Page title="Our Portfolio" description="A Look at what we have Created Together.">
      <Wrapper>
        <SectionTitle style={{margin: '10rem'}}>Our Projects</SectionTitle>
        {/* <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
        <WaveCta />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
   
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
