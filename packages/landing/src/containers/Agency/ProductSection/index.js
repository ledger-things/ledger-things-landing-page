import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Card from 'common/components/Card';
import NextImage from 'common/components/NextImage';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import QualitySectionWrapper from './qualitySection.style';

import data from 'common/data/Agency';
import Button from 'common/components/Button';
import colors from 'common/theme/agency/colors';



const ProductSection = ({
  id,
  row,
  col,
  title,
  featureCol,
  description,
  subDescription,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  featureName,
  featureImage,
  featureVideo,
  link,
  featureTitle,
  featureDescription,
  iconStyle,
}) => {

  return (
    <QualitySectionWrapper id={id} >
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} {...textArea}>
            <FeatureBlock
              title={
                <Heading
                style={{fontWeight:500,color:"#aa251d",fontSize:48}}
                  content={title}
                  {...title}
                />
              }
              description={
                <div style={{display:'flex',flexDirection:'column'}}>
                  <h3
                    style={{fontWeight:500,color:'#0f2137',margin:0}}

              >{description}</h3><Text
              content={subDescription}
              {...description}
            /></div>
              }
            />
          </Box>
        </Box>
        <Box className="row" {...row} {...textArea}>
          {data?.[featureName].map((feature, index) => (
            <Box
              className="col"
              {...featureCol}
              key={`quality_feature-${index}`}
            >
              <FeatureBlock
                icon={<i className={feature.icon} />}
                iconPosition="left"
                iconStyle={iconStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
          {link &&          
                <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                    <Button
                      className="blob red"
                      isUnderlined
                      style={{width:'min-content',padding:"8px", whiteSpace:'nowrap',color:colors.headingColor}}
                      title="SEE OUR WEBSITE"
                      variant="textButton"
                      icon={<i className="flaticon-next" />}
                      onClick={()=>window.open(link,'_blank')}
                    />
                </div>}
        </Box>
      </Container>
    {featureImage &&      
      <Container fluid noGutter className="info-sec-container">
        <Box className="row" {...row} {...imageAreaRow}>
          <Box className="col info-sec-center" {...col} {...imageArea}>
            <Card {...imageWrapper}>
              <Fade right delay={90}>
                <NextImage src={featureImage} alt={title}/>
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>}
    {featureVideo?.length > 0 &&      
      <Container fluid noGutter className="info-sec-container" >
        <Box className="row" {...row} {...imageAreaRow}>
          <Box className="col info-sec-center" {...col} {...imageArea}>
            <Card {...imageWrapper}>
              <Fade right delay={90}>
                  <video width="100%" height="300" autoPlay muted loop >
                    <source src={featureVideo[1]} type="video/mp4" />
                    <source src={featureVideo[0]} type="video/webm" />
                      Your browser does not support the video tag.
                  </video>
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>}
    </QualitySectionWrapper>
  );
};

ProductSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  featureCol: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
};

ProductSection.defaultProps = {
  // Quality section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Quality section iamge row default style
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  // Quality section col default style
  col: {
    pr: '15px',
    pl: '15px',
  },
  // Quality feature col default style
  featureCol: {
    width: [1, 1, 1 / 2],
    pr: '15px',
    pl: '15px',
  },
  // Quality section text area default style
  textArea: {
    width: [1, '100%', '100%', '70%', '64%'],
  },
  // Quality section image area default style
  imageArea: {
    width: [1, '100%', '100%', '30%', '38%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  // Quality section image wrapper default style
  imageWrapper: {
    boxShadow: 'none',
  },
  // Quality section title default style
  title: {
    fontSize: ['26px', '26px', '32px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  // Quality section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
  },
  // feature icon default style
  iconStyle: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    color: '#ffffff',
    overflow: 'hidden',
    mt: '6px',
    mr: '22px',
    flexShrink: 0,
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
  },
};

export default ProductSection;
