const userApi = 'https://api.github.com/users/';
const reposFolder = '/repos';
const userToFetch = 'laravel';

async function getUserInfo(user) {
  const request = await fetch(userApi + user);

  if (request.status !== 200) return false;

  const response = await request.json();

  return response;
}

function handlePaginationData(header) {
  const urlsA = header.split(',');

  const urlsB = urlsA.map((url) => url.trim().split(';'));

  const urlsC = urlsB.map((url) => ([
    url[0].replace('<', '').replace('>', ''),
    url[1].trim().replace(/"/g, '').replace('rel=', ''),
  ]));

  const out = {};

  urlsC.forEach((url) => {
    const key = url[1];
    const value = url[0];

    out[key] = value;
  });

  return out;
}

async function getUserRepos(user) {
  const request = await fetch(`${userApi + user + reposFolder}`);
  const pagination = handlePaginationData(request.headers.get('Link'));

  if (request.status !== 200) return false;

  const response = await request.json();

  return {
    repos: response,
    pagination,
  };
}

export default async function getInfos() {
  const requests = await Promise.all([
    getUserInfo(userToFetch),
    getUserRepos(userToFetch),
  ]);

  console.log(requests);

  if (requests[0] && requests[1]) {
    return {
      user: requests[0],
      repos: requests[1].repos,
      pagination: requests[1].pagination,
    };
  }

  return false;
}