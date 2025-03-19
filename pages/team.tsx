import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/team/ah.png',
    title: 'A Huzaifa k.',
    description: 'Email: Huzaifa.lastcript@gmail.com\nLinkedIn: linkedIn.com\n',

  },
  {
    imageUrl: '/team/sm.png',
    title: 'S. Mujtaba.',
    description: 'Email: mujtaba.lastcript@gmail.com\nLinkedIn: linkedIn.com\n',

  },
  {
    imageUrl: '/team/sn.png',
    title: 'Saba N.',
    description: 'Email: saba.lastcript@gmail.com\nLinkedIn: linkedIn.com\n',

  },
];

export default function FeaturesPage() {
  return (
    <Page title="Our Team" description="Meet the Minds Behind Lastcript.">
      <Wrapper>
        <SectionTitle style={{margin: '10rem'}}>Our Quick Intro</SectionTitle>
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
