export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  async function fetchSafe(url, label) {
    const res = await fetch(url, { headers });
    const contentType = res.headers.get('content-type') || '';

    if (!res.ok) {
      const text = await res.text();
      console.error(`${label} failed:`, text);
      return null;
    }

    if (!contentType.includes('application/json')) {
      const text = await res.text();
      console.error(`${label} returned non-JSON:`, text);
      return null;
    }

    return res.json();
  }

  const user = await fetchSafe(`https://api.github.com/users/${username}`, 'User');
  const repos = await fetchSafe(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`, 'Repos');

  return {
    props: {
      user,
      repos: repos || [],
    },
    revalidate: 600,
  };
}
