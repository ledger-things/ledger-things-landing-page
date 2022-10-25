import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import FooterImage from 'common/assets/image/agency/light-effect.png';
import GradientBannerBG from 'common/assets/image/agency/hero-gradient-background.png';


const FooterWrapper = styled.section`
  padding: 80px 0;
  margin-top: 40px;
  background-image: url(${GradientBannerBG?.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-top: 1px solid #efefef;
  overflow: hidden;
  @media (max-width: 990px) {
    padding-bottom: 30px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: #FFFFFF;
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: ${themeGet('colors.primary', '#FFFFFF')};
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
