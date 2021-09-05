import { usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import RepoId from './RepoId';
import RepoName from './RepoName';

const RepoPage = ({ queryRef }) => {
  const { repository } = usePreloadedQuery(graphql`
    query RepoPageQuery {
      repository(owner: "facebook", name: "relay") {
        owner {
          id
        }
        ...RepoId_id
        ...RepoName_name
      }
    }`, queryRef);

  return (
    <>
      <p>
        Owner ID :
        {' '}
        {repository?.owner?.id ?? 'Not found'}
      </p>
      <RepoId queryRef={repository?.id} />
      <RepoName queryRef={repository?.name} />
    </>
  );
};

export default RepoPage;
