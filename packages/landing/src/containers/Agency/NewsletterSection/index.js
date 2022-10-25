import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NewsletterSectionWrapper, {
} from './newsletterSection.style';
import Text from 'common/components/Text';

const NewsletterSection = ({ sectionHeader, sectionTitle, btnStyle }) => {
  return (
    <NewsletterSectionWrapper id="newsletterSection">
      <Container>
        <Box {...sectionHeader} style={{display:'flex',justifyContent:'center',flexDirection:'column',rowGap:16}}>
          <Heading style={{fontWeight:500}} content="Let's talk about your project" 
            {...sectionTitle} />
          <Text style={{fontWeight:300}}  content="We'll find the easiest and effectiveness way to realize your project together" 
              {...sectionTitle} />
          <Button style={{maxWidth:200,alignSelf:'center'}}  type="button" title="CONTACT US" {...btnStyle} onClick={()=> window.location = "mailto:admin@ledgerthings.com"}/>

        </Box>
      </Container>
    </NewsletterSectionWrapper>
  );
};

// NewsletterSection style props
NewsletterSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default NewsletterSection;
