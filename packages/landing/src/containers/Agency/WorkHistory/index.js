import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CountUp from 'react-countup';
import Box from 'common/components/Box';
import Card from 'common/components/Card';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';

const WorkHistory = ({ row, col, cardStyle, title, description, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={
                <Heading
                  style={{fontWeight:500}}
                  content=" “THE MORNING IS NOT ONLY MADE OF COFFEE AND CONTEMPLATION” "
                  {...title}
                />
              }
              description={
                <Text
                  content="We work constantly and hard every day to deliver secure and scalable products"
                  {...description}
                />
              }
              //button={<Button title="WORK HISTORY" {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <h3 style={{color:'#aa251d'}}>
                  <CountUp start={0} end={600} duration={5} />+
                </h3>
                <Text content="Coffee drunk" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3 style={{color:'#aa251d'}}>
                  <CountUp start={0} end={10}  />+
                </h3>
                <Text content="Years experience" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3 style={{color:'#aa251d'}}>
                  <CountUp start={0} end={100} duration={3} />+
                </h3>
                <Text content="Hours spent per month for training" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Text content="& much more" />
                {/* <Link href="#1">
                  <a>View work history</a>
                </Link> */}
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px #0B375E',
  },
  // WorkHistory section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#FFFFFF',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  // WorkHistory section description default style
  description: {
    fontSize: '16px',
    color: '#FFFFFF',
    lineHeight: '1.75',
    mb: '33px',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
