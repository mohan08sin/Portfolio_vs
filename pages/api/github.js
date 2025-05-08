// pages/api/github.js

export default async function handler(req, res) {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;
  
    if (!username || !token) {
      return res.status(500).json({ error: 'Missing GitHub credentials' });
    }
  
    const headers = {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
    };
  
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers }),
        fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`, { headers }),
      ]);
  
      if (!userRes.ok || !reposRes.ok) {
        return res.status(500).json({ error: 'Failed to fetch GitHub data' });
      }
  
      const user = await userRes.json();
      const repos = await reposRes.json();
  
      res.status(200).json({ user, repos });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }
  