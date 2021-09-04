import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const RepoName = ({ queryRef }) => {
  const { name } = useFragment(graphql`
    fragment RepoName_name on Repository {
        name
    }`,
  queryRef);

  return (
    <p>
      Name:
      {' '}
      {name}
    </p>
  );
};

export default RepoName;
