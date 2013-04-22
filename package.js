Package.describe({
  summary: "Classes in Javascript"
});

Package.on_use(function (api) {
  // var both = ['client', 'server'];
  // api.use(['underscore', 'accounts-base'], both);

  // api.add_files('roles_server.js', 'server');
  // api.add_files('roles_common.js', both);
  api.add_files('hoop.js', ['client', 'server]');
});