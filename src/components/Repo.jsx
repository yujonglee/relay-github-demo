import { usePreloadedQuery } from 'react-relay/hooks';

import { RepositoryNameQuery } from '../queries/github';

const Repo = ({ queryReference }) => {
  const { repository } = usePreloadedQuery(RepositoryNameQuery, queryReference);

  return (
    <>
      <p>{repository?.id ?? 'Not found'}</p>
      <p>{repository?.name ?? 'Not found'}</p>
    </>
  );
};

export default Repo;
