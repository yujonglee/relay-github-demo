async function fetchGraphQL(text, variables) {
  const { REACT_APP_GITHUB_AUTH_TOKEN } = process.env;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return response.json();
}

export default fetchGraphQL;
