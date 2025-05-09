export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  const safeFetch = async (url, name) => {
    try {
      const res = await fetch(url, { headers });
      const contentType = res.headers.get('content-type') || '';
      const isJSON = contentType.includes('application/json');

      if (!res.ok) {
        const text = await res.text();
        console.error(`${name} request failed:`, res.status, text);
        return null;
      }

      return isJSON ? res.json() : null;
    } catch (err) {
      console.error(`${name} fetch error:`, err);
      return null;
    }
  };

  const user = await safeFetch(`https://api.github.com/users/${username}`, 'User');
  const repos = await safeFetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`, 'Repos');

  if (!user) {
    return {
      props: {
        user: null,
        repos: [],
      },
    };
  }

  return {
    props: {
      user,
      repos: repos || [],
    },
    revalidate: 600,
  };
}
