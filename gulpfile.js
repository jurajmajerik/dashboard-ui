/* eslint-disable */
'use strict';

const gulp = require('gulp');
const exec = require('child_process').exec;


// fetch command line arguments
const arg = (argList => {

  let arg = {},
    a, opt, thisOpt, curOpt;
  for (a = 0; a < argList.length; a++) {
    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, '');

    if (opt === thisOpt) {
      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;
    } else {
      // argument name
      curOpt = opt;
      arg[curOpt] = true;
    }
  }

  return arg;

})(process.argv);

gulp.task('build', function (cb) {
  exec('npm run build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('gitAdd', function (cb) {
  exec('git add .', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('gitCommit', function (cb) {
  var command = 'git commit -m ' + '"' + arg.m + '"';
  exec(command , function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('gitPushBitBucket', function (cb) {
  exec('git push', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('gitPushHeroku', function (cb) {
  exec('git push heroku master', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('herokuRunInstance', function (cb) {
  exec('heroku ps:scale web=1', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('herokuOpen', function (cb) {
  exec('heroku open', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('deploy',
  gulp.series(
    'build',
    'gitAdd',
    'gitCommit',
    'gitPushHeroku',
    'herokuRunInstance',
    'gitPushBitBucket'
    )
  );
