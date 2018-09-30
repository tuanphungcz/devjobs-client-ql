import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { Helmet } from 'react-helmet';
import RawHtmlText from '../../../common/RawHtmlText';
import EmailForm from './EmailForm';
import Section from '../../../common/Section';
import { FONT_SIZE_LARGE } from '../../../../constant';
import styled from 'styled-components';

const JobHelmet = ({ job }) => (
  <Helmet>
    <title>{job.title}</title>

    <meta property="og:url" content={'ogUrl'} />
    <meta property="og:title" content={job.title} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Praxuj - Naštartuj svoju kariéru" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:description" content={job.description} />
    <meta property="og:image" content={job.company.companyLogoUrl} />
  </Helmet>
);

class JobDetail extends React.Component {
  componentDidMount() {
    const { match, history, location, job } = this.props;

    const replace = str => str.replace(/\s+/g, '-').toLowerCase();

    if (!match.params.nameId) {
      return history.push(`${location.pathname}/${replace(job.title)}`);
    }

    if (match.params.nameId !== replace(job.title)) {
      return history.replace(`${replace(job.title)}`);
    }
    return null;
  }

  render() {
    const { job } = this.props;
    console.log(job)
    return (
      <div>
        <JobHelmet job={job} />
        <Section>
          <Title>{job.title}</Title>
          <RawHtmlText html={job.description} />
          <EmailForm job={job} />
        </Section>
      </div>
    );
  }
}

export default withRouter(JobDetail);

const Title = styled.div`
  font-size: ${FONT_SIZE_LARGE};
`;
