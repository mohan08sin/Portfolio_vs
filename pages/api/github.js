export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  const safeFetchJSON = async (url, label) => {
    const res = await fetch(url, { headers });
    const contentType = res.headers.get('content-type');

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`${label} failed: ${res.status} - ${errorText}`);
    }

    if (!contentType || !contentType.includes('application/json')) {
      const errorText = await res.text();
      throw new Error(`${label} did not return JSON: ${errorText}`);
    }

    return res.json();
  };

  try {
    const user = await safeFetchJSON(
      `https://api.github.com/users/${username}`,
      'GitHub User API'
    );

    const repos = await safeFetchJSON(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`,
      'GitHub Repos API'
    );

    return {
      props: { user, repos },
      revalidate: 600,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { user: null, repos: [] },
    };
  }
}
