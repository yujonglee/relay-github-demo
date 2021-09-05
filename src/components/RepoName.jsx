import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const RepoName = ({ queryRef }) => {
  const data = useFragment(graphql`
    fragment RepoName_name on Repository {
        name
    }`,
  queryRef);

  return (
    <p>
      Repo Name:
      {' '}
      {data ? data.name : 'Not found'}
    </p>
  );
};

export default RepoName;
