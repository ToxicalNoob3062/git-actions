import * as core from '@actions/core';
async function run() {
  try {
    core.info('Updating JavaScript dependencies...');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
