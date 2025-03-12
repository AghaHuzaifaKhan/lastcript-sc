import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/portfolio/chatbot.jpg',
    title: 'BOTBUDDY',
    description: 'An AI-powered chatbot that can create different character/avatars, that provides automated responses, assists with FAQs, and enhances user interaction.',

  },
  {
    imageUrl: '/portfolio/daily_schedule.jpg',
    title: 'MYDAYPLAN',
    description: 'A daily schedule manager application that helps users organize tasks, set reminders, add & update their schedule and boost productivity.',

  },
  {
    imageUrl: '/portfolio/ecourse.jpg',
    title: 'EDUNEST',
    description: 'An online courses platform where users can enroll in courses, learn and study with their plan, track progress, and access learning quizzes and cheat sheets.',

  },
  {
    imageUrl: '/portfolio/football.jpg',
    title: 'MATCHPULSE',
    description: 'A football match stats management app that records and analyzes game statistics in real-time.',

  },
  {
    imageUrl: '/portfolio/gym.png',
    title: 'GYMGO',
    description: 'A fitness tracking app that provides personalized gym workout plans and tracks progress and creates analytics.',

  },
  {
    imageUrl: '/portfolio/player_data.jpg',
    title: 'STATVISION',
    description: 'A football player data application for tracking and analyzing player performance and statistics.',

  },
  {
    imageUrl: '/portfolio/trading.png',
    title: 'INVESTMATE',
    description: 'A real-time market analysis and trading automation bot with AI-powered insights and analytics.',

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
