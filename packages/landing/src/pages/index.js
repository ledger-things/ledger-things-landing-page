import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/theme/agency';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
import Navbar from 'containers/Agency/Navbar';
import BannerSection from 'containers/Agency/BannerSection';
import FeatureSection from 'containers/Agency/FeatureSection';
import WorkHistory from 'containers/Agency/WorkHistory';
import TeamSection from 'containers/Agency/TeamSection';
import NewsletterSection from 'containers/Agency/NewsletterSection';
import ProductSection from 'containers/Agency/ProductSection';
import Footer from 'containers/Agency/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import FaqSection from 'containers/Agency/FaqSection';
import FeatureImage from '../common/assets/image/agency/carousel/m-1.png';
import SKReputationImage from '../common/assets/image/agency/product/skreputation-image.webp';

const Architecture3DVideoMp4 = "video/video-a3r.mp4"
const Architecture3DVideoWebm = "video/video-a3r.webm"

const Agency = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>Ledger Things</title>
          <meta name="Description" content="We are a software house specialized in fintech and blockchain solutions with a blockchain-agnostic approach." />
          <meta name="theme-color" content="#aa251d" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <WorkHistory />
          <ProductSection 
                id="qualityLedger"
                title="Quality Ledger" 
                description="“The blockchain doesn't lie”" 
                subDescription="Certificate your products and supply chain on Kadena blockchain"
                featureName="qualityFeature"
                featureImage={FeatureImage}
                />
          <ProductSection 
                id="skreputation"
                title="SK Reputation" 
                description="“I’m stealthy, like a ninja.”" 
                subDescription="Defend and improve your digital reputation"
                featureName="skReputationFeature"
                featureImage={SKReputationImage}
                link="https://www.skreputation.com/"
                />
          <ProductSection 
                id="rendering3d"
                title="Architecture 3D Rendering" 
                description="“Why are you keeping this curiosity door locked?”" 
                subDescription="3D Architectural Rendering of any kind of construction or structure."
                featureName="architectureRenderingFeature"
                featureVideo ={[Architecture3DVideoMp4,
                  Architecture3DVideoWebm]}
                />
          <TeamSection />
          <FaqSection />
          <NewsletterSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Agency;
