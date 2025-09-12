const core = require('@actions/core');

async function run() {
  try {
    core.info('Updating JavaScript dependencies...');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
