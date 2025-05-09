export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  async function fetchJsonSafe(url, label) {
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
  }

  const user = await fetchJsonSafe(
    `https://api.github.com/users/${username}`,
    'GitHub User API'
  );

  const repos = await fetchJsonSafe(
    `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`,
    'GitHub Repos API'
  );

  return {
    props: { user, repos },
    revalidate: 600,
  };
}

export default function GithubPage({ user, repos }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub</h1>
      <div>
        <h2>{user.name || user.login}</h2>
        <p>{user.bio}</p>
        <img
          src={user.avatar_url}
          alt={user.login}
          width={100}
          height={100}
        />
      </div>

      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
