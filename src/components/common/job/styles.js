import styled, { css } from 'styled-components';
import { FONT_SIZE_TINY, FONT_SIZE_SMALL } from '../../../constant';
import { breakpoints } from '../../../utils';
import AnchorLink from '../AnchorLink';

const fromTablet = css`
  display: none;

  ${breakpoints.tablet} {
    display: block;
  }
`;

export const CompanyImage = styled.div`
  transition: border-radius 0.25s;
  min-width: 60px;
  min-height: 60px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 6px;
`;

export const DetailWrapper = styled.div`
  display: ${props => (props.opened ? 'block' : 'none')};
  border-top: 0;
`;

export const DetailContentWrapper = styled.div`
  border: 1px solid #efefef;
  border-top: 0;
  line-height: 24px;
`;

export const DetailContent = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin: 0 auto;
`;

export const ApplyButton = styled.button`
  opacity: 0;
`;

export const JobTitleWrapper = styled.div`
  font-size: ${FONT_SIZE_SMALL};
`;

export const JobTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: none;
  ${breakpoints.desktop} {
    display: flex;
  }

  & > * {
    margin-right: 4px;
  }
`;

export const JobWorkingTimeWrapper = styled.div`
  width: 100px;

  ${fromTablet};
`;


export const FlexText = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Tag = styled(AnchorLink)`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 2px 8px;
  color: #555;
  font-size: ${FONT_SIZE_TINY};
  transition: all 200ms;

  &:hover {
    border: 1px solid #1071ff;
    color: #1071ff;

    a {
      color: #1071ff;
    }
  }
`;

export const ImageAndTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;

  & > *:first-child {
    margin-right: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 32px;
`;

export const VerificationTag = styled.div`
  display: flex;
  flex: auto;
`;
