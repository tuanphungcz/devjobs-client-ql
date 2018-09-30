import React, { Component } from 'react';
import styled from 'styled-components';
import { FONT_SIZE_TINY } from '../../constant';
import { makeOptionValue } from '../../utils';

export default class LabelTag extends Component {
  handleOnClick = e => {
    const { handleOnFinalChange, value } = this.props;
    e.stopPropagation();
    handleOnFinalChange([makeOptionValue(value)]);
  };

  render() {
    const { label, handleOnFinalChange, ...other } = this.props;

    const labelProps = {
      ...other,
      onClick: this.handleOnClick,
    };

    return <LabelTagWrapper {...labelProps}>{label}</LabelTagWrapper>;
  }
}

const LabelTagWrapper = styled.span`
  padding: 4px 8px
  border-radius: 2px;
  cursor: pointer;
  font-size: ${FONT_SIZE_TINY};

  ${props => `
    background: ${props.backgroudColor};
    color: ${props.textColor};;
    border-left: solid 5px ${props.borderColor};
  `};
`;
