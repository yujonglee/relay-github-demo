import { usePreloadedQuery } from 'react-relay/hooks';

import { RepositoryNameQuery } from '../queries/github';

const Repo = ({ queryReference }) => {
  const data = usePreloadedQuery(RepositoryNameQuery, queryReference);

  return (<p>{data.repository.name}</p>);
};

export default Repo;
