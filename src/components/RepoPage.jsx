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
        },
        ...RepoId_id,
        ...RepoName_name
      }
    }`, queryRef);

  return (
    <>
      <p>{repository?.owner?.id ?? 'Not found'}</p>
      <RepoId queryRef={repository} />
      <RepoName queryRef={repository} />
    </>
  );
};

export default RepoPage;
