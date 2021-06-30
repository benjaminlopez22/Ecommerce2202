
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['vuNa6fPouN2LCX98KmkmG1'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  