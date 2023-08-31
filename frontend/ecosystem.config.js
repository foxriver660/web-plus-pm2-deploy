module.exports = {
  apps: [
    {
      name: "mesto-frontend",
    },
  ],

  // Deployment Configuration
  deploy: {
    production: {
      user: "foxriver",
      host: "158.160.59.209",
      ref: "origin/master",
      repo: "https://github.com/foxriver660/web-plus-pm2-deploy.git",
      path: "/home/foxriver/mesto-frontend",
      "post-deploy": `cd /home/foxriver/mesto-frontend/source/frontend/ && pwd && /home/foxriver/.nvm/versions/node/v18.17.0/bin/npm i`,
    },
  },
};
