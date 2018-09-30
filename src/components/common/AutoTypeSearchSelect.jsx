import React, { Component } from 'react';
import styled from 'styled-components';
import Creatable from 'react-select/lib/Creatable';
import * as Animated from 'react-select/lib/animated';
import search from '../../assets/search.svg';
import { FONT_SIZE_SMALL } from '../../constant';

const getCustomStyles = ({ menuHidden }) => {
  const menuStyles = menuHidden && {
    display: 'none',
  };

  return {
    input: base => ({
      ...base,
      height: 24,
      paddingTop: 6,
    }),
    control: base => ({
      ...base,
      backgroundColor: '#fff',
    }),
    menu: base => ({ ...base, ...menuStyles }),
  };
};

class CreatableDemo extends Component {
  static defaultProps = {
    placeholder: true,
  };

  handleOnChange = data => this.props.handleOnFinalChange({ [this.props.name]: data });

  render() {
    const { finalValue, menuHidden } = this.props;

    const placeholder = (
      <div>
        <TextSearch>
          <Search src={search} />
        </TextSearch>
      </div>
    );

    const inputProps = {
      isMulti: true,
      components: Animated,
      options: this.props.options,
      onChange: this.handleOnChange,
      value: finalValue,
      styles: getCustomStyles({ menuHidden }),
      placeholder: this.props.hasPlaceholder && placeholder,
      instanceId: 'noIdeaWhyThisIsNecessary',
    };

    return (
      <SelectWrapper>
        <Creatable {...inputProps} />
      </SelectWrapper>
    );
  }
}

export default CreatableDemo;

const SelectWrapper = styled.div`
  width: 240px;
  & * {
    font-size: ${FONT_SIZE_SMALL};
  }
`;

const TextSearch = styled.span`
  & > * {
    display: inline;
    margin-left: 8px;
  }
`;

const Search = styled.img`
  width: 18px;
`;
