export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  const userRes = await fetch(`https://api.github.com/users/${username}`, {
    headers,
  });

  if (!userRes.ok) {
    const errorText = await userRes.text();
    throw new Error(`GitHub User API error: ${userRes.status} - ${errorText}`);
  }

  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`,
    {
      headers,
    }
  );

  if (!repoRes.ok) {
    const errorText = await repoRes.text();
    throw new Error(`GitHub Repos API error: ${repoRes.status} - ${errorText}`);
  }

  const repos = await repoRes.json();

  return {
    props: {
      user,
      repos,
    },
    revalidate: 600, // Rebuild the page every 10 minutes
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
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
