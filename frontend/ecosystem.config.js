module.exports = {
  apps: [
    {
      script: "mesto-frontend",
    },
  ],

  // Deployment Configuration
  deploy: {
    production: {
      user: "foxriver",
      host: "158.160.59.209",
      ref: "origin/master",
      repo: "https://github.com/foxriver660/web-plus-pm2-deploy.git",
      path: "/home/foxriver/frontend",
      "post-deploy": `cd /home/foxriver/frontend/source/frontend/ && pwd && npm i && npm run build`,
    },
  },
};
