import React from 'react';
import styled from 'styled-components';
import { map, reduce, length } from 'ramda';
import posed, { PoseGroup } from 'react-pose';
import Job from '../../../common/job/Job';
import NoJobAdds from './NoJobAdds';

const sortJobsByTopFlag = reduce((acc, job) => {
  if (job.isTopped === true) {
    return [job, ...acc];
  }
  return [...acc, job];
}, []);

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 100 }
  }
});

export default ({ jobs, handleOnFinalChange, resetValues }) => {
  const sortedArr = sortJobsByTopFlag(jobs);

  return (
    <PoseGroup>
      {length(jobs) === 0 && (
        <Modal key="noAdd">
          <NoJobAdds />
        </Modal>
      )}
      {map(
        job =>
          job.isPublished && (
            <PoseJob key={job.id}>
              <Job job={job} handleOnFinalChange={handleOnFinalChange} />
            </PoseJob>
          ),
        sortedArr
      )}
    </PoseGroup>
  );
};

const Item = posed.li();

const StyledItem = styled(Item)`
  list-style: none;
  padding-bottom: 8px;
`;

const PoseJob = styled(StyledItem)`
  ${props => !props.isTopped && 'border-bottom: 1px solid #efefef;'};
`;
