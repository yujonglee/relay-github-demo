import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const RepoId = ({ queryRef }) => {
  const { id } = useFragment(graphql`
    fragment RepoId_id on Repository {
        id
    }`,
  queryRef);

  return (
    <p>
      ID:
      {' '}
      {id}
    </p>
  );
};

export default RepoId;
