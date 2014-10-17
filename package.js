Package.describe({
  name: 'garrilla:geodesy-libraries',
  summary: ' /* A Meteor wrapper for https://github.com/chrisveness/geodesy */ ',
  version: '0.0.1',
  git: ' /* Fill me in! */ '
});

/*
Npm.depends({
  "geodesy-libraries": "https://github.com/garrilla/geodesy/archive/2f33b78fb0502482bb492883fc4dfa93cf95f3bc.tar.gz"
})
*/

Package.onUse(function(api) {
    api.versionsFrom('0.9.4');
    api.addFiles([
        'lib/vector3d.js',
        'lib/geo.js',
        'lib/geohash.js',
        'lib/latlon.js',
        'lib/latlon-vectors.js',
        'lib/latlon-ellipsoid.js',
        'lib/latlon-vincenty.js',
        'lib/osgridref.js',
        'lib/utm.js',
        'lib/mgrs.js'
            ], 'client');
    api.export('Vector3d');
    api.export('Geo');
    api.export('Geohash');
    api.export('LatLon');
    api.export('LatLonE');
    api.export('LatLonV');
    api.export('OsGridRef');
    api.export('Utm');
    api.export('Mgrs');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('garrilla:geodesy-libraries');
  api.addFiles('garrilla:geodesy-libraries-tests.js');
});
