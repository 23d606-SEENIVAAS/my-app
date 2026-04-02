module.exports = {
  apps: [{
    name: 'my-app',
    script: 'index.js',
    cwd: '/opt/apps/my-app',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
