import ghpages from 'gh-pages';

/* eslint-disable */
ghpages.publish('dist', {
  branch: 'master',
}, (err) => {
  if (!err) {
    console.log('Xalonist\'s landing page was deployed successful.');
  } else {
    console.log(err);
  }
});
