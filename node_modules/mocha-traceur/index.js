require('traceur').require.makeDefault(function (filename) {
  // Don't compile our dependencies.
  return filename.indexOf('node_modules') === -1;
});
