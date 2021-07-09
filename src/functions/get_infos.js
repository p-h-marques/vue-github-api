const userApi = 'https://api.github.com/users/';
const reposFolder = '/repos';
const userToFetch = 'laravel';

async function getUserInfo(user) {
  const request = await fetch(userApi + user);

  if (request.status !== 200) return false;

  const response = await request.json();

  return response;
}

function getTotalPages(urls, page) {
  if (urls.last !== undefined) {
    const query = urls.last.split('?')[1];
    const params = new URLSearchParams(query);

    return parseInt(params.get('page'), 10);
  }

  return page;
}

function handlePaginationData(header, page) {
  const urlsA = header.split(',');

  const urlsB = urlsA.map((url) => url.trim().split(';'));

  const urlsC = urlsB.map((url) => ([
    url[0].replace('<', '').replace('>', ''),
    url[1].trim().replace(/"/g, '').replace('rel=', ''),
  ]));

  const out = {
    links: {},
    pages: {},
  };

  urlsC.forEach((url) => {
    const key = url[1];
    const value = url[0];

    out.links[key] = value;
  });

  out.pages = {
    current: page,
    total: getTotalPages(out.links, page),
  };

  return out;
}

async function getUserRepos(user, page = 1) {
  const request = await fetch(`${userApi + user + reposFolder}?page=${page}&per_page=10`);
  const pagination = handlePaginationData(request.headers.get('Link'), page);

  if (request.status !== 200) return false;

  const response = await request.json();

  return {
    repos: response,
    pagination,
  };
}

export default async function getInfos(page) {
  const requests = await Promise.all([
    getUserInfo(userToFetch),
    getUserRepos(userToFetch, page),
  ]);

  if (requests[0] && requests[1]) {
    return {
      user: requests[0],
      repos: requests[1].repos,
      pagination: requests[1].pagination,
    };
  }

  return false;
}
