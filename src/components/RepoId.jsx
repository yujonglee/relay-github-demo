import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const RepoId = ({ queryRef }) => {
  const data = useFragment(graphql`
    fragment RepoId_id on Repository {
        id
    }`,
  queryRef);

  return (
    <p>
      Repo ID:
      {' '}
      {data ? data.id : 'Not found'}
    </p>
  );
};

export default RepoId;
