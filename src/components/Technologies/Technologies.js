import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJsBadge, DiCss3, DiMysql } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiDocker, SiVercel, SiK6, SiTestinglibrary, SiJest} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { FaAws } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    {/* <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText> */}
    <List>
      <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <DiReact size="4.5rem" />
          <DiJsBadge size="4rem" />
          <SiNextdotjs size="4rem" />
          <SiTypescript size="4rem" />
          <AiFillHtml5 size="4rem" />
          <DiCss3 size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            JavaScript <br />
            Next.js <br />
            TypeScript <br />
            HTML5 <br />
            CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <SiNodedotjs size="4rem" />
          <SiExpress size="4rem" />
          <SiMongodb size="4rem" />
          <SiPostgresql size="4rem" />
          <GrMysql size="4rem" />
          <DiFirebase size="4.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express <br />
            MongoDB <br />
            PostgreSQL <br />
            MySQL <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <FaAws size="4.5rem" />
          <SiVercel size="4rem" />
          <SiJest size="4rem" />
          <SiTestinglibrary size="4rem" />
          <SiK6 size="4rem" />
          <SiDocker size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment & Testing</ListTitle>
          <ListParagraph>
            AWS - EC2 & S3 <br />
            Vercel <br />
            Jest <br />
            React Testing Library <br />
            K6 <br />
            Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br/>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
