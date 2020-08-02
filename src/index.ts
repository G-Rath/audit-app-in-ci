import { action } from './action';

action().catch(error => {
  console.error(error);

  process.exitCode = 1;
});
