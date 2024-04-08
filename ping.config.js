module.exports = {
  apps: [
    {
      name: 'ping',
      script: 'yarn',
      args: 'start',
      cwd: '.',
      cron_restart: '0 0 */1 * *'
    }
  ]
};
