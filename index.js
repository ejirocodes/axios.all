import axios from 'axios';

let endpoints = [
  'https://api.github.com/users/ejirocodes',
  'https://api.github.com/users/ejirocodes/repos',
  'https://api.github.com/users/ejirocodes/followers',
  'https://api.github.com/users/ejirocodes/following'
];

function getUserAccount() {
  return axios.get('https://reqres.in/api/users');
}

function getUserPermissions(id) {
  return axios.get(`https://reqres.in/api/users/${id}`);
}

Promise.all([getUserAccount, getUserPermissions(4)]).then(
  axios.spread((...allData) => {
    console.log({ allData });
  })
);
// The promise.all method returns a promise that resolves when all of the promises in the iterable argument have resolved.

Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  axios.spread((...allData) => {
    console.log({ allData });
  })
);

Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
   axios.spread(({data: user}, {data:repos}, {data:followers}, {data:following}) => {
    console.log({ user, repos, followers, following });
  })
);

Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: user}, {data: repos}, {data: followers}, {data: following}] )=> {
      console.log({ user, repos, followers, following });
});

axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  axios.spread(({data: user}, {data:repos}, {data:followers}, {data:following}) => {
    console.log({ user, repos, followers, following });
  })
);

axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  axios.spread((user, repos, followers, following) => {
    console.log({ user, repos, followers, following });
  })
);

// we can use axios.spread to get all the data at once and then use it in the callback

axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  (data) => console.log(data),
);