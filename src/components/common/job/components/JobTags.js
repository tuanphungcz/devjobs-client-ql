import React, { Component } from 'react';
import { map } from 'ramda';
import { JobTagsWrapper, Tag } from '../styles';
import { toLowerCaseAndFistUpper, splitStringToArray, makeOptionValue } from '../../../../utils';

class TagElement extends Component {
  handleOnClick = e => {
    const { handleOnFinalChange, tag } = this.props;

    if (handleOnFinalChange) {
      e.stopPropagation();
      handleOnFinalChange([makeOptionValue(tag)]);
    }
  };

  render() {
    const { tag } = this.props;

    return (
      <Tag onClick={this.handleOnClick} to={`/jobs/${tag}`}>
        {tag}
      </Tag>
    );
  }
}

const JobTags = ({ tags, handleOnFinalChange }) => (
  <JobTagsWrapper>
    {map(
      tag => (
        <TagElement
          key={tag}
          tag={toLowerCaseAndFistUpper(tag)}
          handleOnFinalChange={handleOnFinalChange}
        />
      ),
      splitStringToArray(tags)
    )}
  </JobTagsWrapper>
);

export default JobTags;
