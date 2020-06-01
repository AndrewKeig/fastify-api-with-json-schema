const app = require('./src/app');

const port = 3000;
const address = 'localhost';

app.listen(port, address, (err, listening) => {
  app.log.info(`Listening on port ${listening}`);

  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});

process
  .on('unhandledRejection', (reason, p) => {
    // eslint-disable-next-line no-console
    console.error('Unhandled Rejection', reason, p);
  })
  .on('uncaughtException', er => {
    // eslint-disable-next-line no-console
    console.error('Terminating process', er.stack);
    process.exit(1);
  });
