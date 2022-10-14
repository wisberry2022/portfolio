import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import First from './sections/First/First';
import Second from './sections/Second/Second';
import Third from './sections/Third/Third';
import Fourth from './sections/Fourth/Fourth';
import Fifth from './sections/Fifth/Fifth';

import './Basic.scss';
const anchors = ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'];

const FullPage = () => (
  <ReactFullpage
    //fullpage options
    anchors={anchors}
    navigation
    navigationPosition='right'
    navigationTooltips={['TITLE', 'MAIN Project', 'SIDE Project', 'TOY Project', 'END']}
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default FullPage;