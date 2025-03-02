import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>The Work We Do</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Web & App Development"
          description="We specialize in building robust, high-performance web and mobile applications tailored to your needs. Whether you're a startup, an enterprise or an individual, we develop solutions that grow with you."
        >
          {/* $0<span>/month</span> */}
        </PricingCard>
        <PricingCard
          title="Graphics Design & Digital Art"
          description="We bring your creative vision to life with logo designs and custom digital illustrations, tailored to an individual's or a brand’s personality. Whether it's for marketing, social media, or personal identity, we make sure it resonates with your audience."       
        >
          {/* $29<span>/month</span> */}
        </PricingCard>
        <PricingCard
          title="AI Model Development"
          description="We develop machine learning and deep learning models specifically designed to tackle industry-specific challenges,optimizing decision-making, automation, and customer experiences and ensuring high accuracy and efficiency."
        >
          {/* $79<span>/month</span> */}
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
