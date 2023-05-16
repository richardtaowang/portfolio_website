import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Richard
        </SectionTitle>
        <SectionText>
        I am a full-stack software engineer passionate about providing cutting-edge tech solutions to improve and enrich people's lives.
        </SectionText>
        <Button onClick={props.handleClick}>Schedule Meeting</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;