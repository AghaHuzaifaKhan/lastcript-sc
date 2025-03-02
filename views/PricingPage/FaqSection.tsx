import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import WaveCta from 'components/WaveCta';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle style={{margin: '10rem'}}>Frequently asked question</SectionTitle>
      <Accordion title="How to get started with your services.">
      Simply reach out to us via our Contact Us page or email any of our team members. Let us know what you need, and we’ll schedule a consultation to discuss your project in detail.
      </Accordion>
      <Accordion title="Do you work with small businesses or large enterprises.">
      We work with businesses of all sizes, from startups looking for their first website to large enterprises in need of advanced AI solutions. We also develop solutions for individuals looking for their personal identity or brand. 
      </Accordion>
      <Accordion title="Can I request additional features after the project starts.">
      Yes! We understand that project needs evolve, so we’re flexible with feature additions. However, major changes may require additional adjustments.
      </Accordion>
      <Accordion title="How do you handle project communication.">
      We keep communication clear and transparent via email, communication platforms like teams or pumble, and weekly meetings to ensure smooth progress.
      </Accordion>
      <Accordion title="Can you work with my existing team or projects.">
      Yes! We can collaborate with your in-house team to enhance your projects or provide additional expertise in the already built projects.
      </Accordion>

      <WaveCta /> 
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  
  & > *:not(:first-child) {

  }
`;
