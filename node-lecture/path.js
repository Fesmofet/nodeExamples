const path = require("path");

// Normalization
// console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// // Join
// console.log('join path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
//
// // Resolve
// console.log('resolve : ' + path.resolve('main.js'));
//
// // extName
// console.log('ext name : ' + path.extname('main.js'));
//
// // Basename
console.log('basename : ' + path.basename('/srv/app/app.js')) //app.js
console.log('basename : ' + path.basename('/srv/app/app.js', '.js')) //app
//
// // Dirname
// console.log('dirname : ' + path.dirname('/srv/app/app.js') ) // \srv\app
//
// // Absolute
// console.log('absolute : ' + path.isAbsolute('/srv/app/app.js')) //true
// console.log('absolute : ' + path.isAbsolute('srv/app/app.js')) //false
//
// // Relative
// console.log('relative : ' + path.relative('/srv/app/app.js', '/srv/config/default.conf'))  // ..\..\config\default.conf
//
// // Resolve
// console.log('resolve : ' + path.resolve('/srv/app', 'app.js')) // D:\srv\app\app.js
