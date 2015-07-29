exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../e2e/features/*.feature'],
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'cucumber',
  cucumberOpts: {
    format: 'json',
    tags: '@dev'
  }
};