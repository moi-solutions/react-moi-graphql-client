module.exports = {
  server: {
    url: '/api/v2',
  },
  cookie: {
    authorization: {
      name: 'app-token',
    },
    server: {
      name: 'app-server-url',
    },
    tenant: {
      name: 'app-tenant',
    },
    locale: {
      name: 'app-locale',
    },
  },
};
