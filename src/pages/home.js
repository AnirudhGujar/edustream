import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited Video Lecture, and more.</Feature.Title>
          {/* <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle> */}
          <OptForm>
            {/* <OptForm.Input placeholder="Email address" /> */}
            <OptForm.Button>Watch Now</OptForm.Button>
            <OptForm.Break />
            {/* <OptForm.Text>Ready to watch? </OptForm.Text> */}
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
