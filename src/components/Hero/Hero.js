import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {

  const handleDownloadResume = () => {
    // Replace 'YOUR_DROPBOX_LINK' with the actual public Dropbox link to your resume file
    const resumeDownloadLink = 'https://www.dropbox.com/s/xt216fffhdcou9z/Richard_Wang_Resume.pdf?dl=1';

    // Create a temporary link element
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeDownloadLink;
    downloadLink.download = 'resume.pdf';
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';

    // Trigger the click event to initiate the download
    downloadLink.click();
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hi, I'm Richard 👋
          </SectionTitle>
          <SectionText>
            I am a full-stack software engineer passionate about providing cutting-edge tech solutions to improve and enrich people's lives.
          </SectionText>
          <Button onClick={handleDownloadResume}>Download Resume</Button>
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;