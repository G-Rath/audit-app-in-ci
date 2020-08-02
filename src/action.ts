import * as core from '@actions/core';
import { auditApp } from 'audit-app';
import { parseArgs } from 'audit-app/lib/parseArgs';

export const action = async (): Promise<void> => {
  try {
    const args: string[] = ['--debug'];

    const config = core.getInput('config');

    if (config) {
      args.push('--config', config);
    }

    core.debug(new Date().toTimeString());
    await auditApp(parseArgs(args));
    core.debug(new Date().toTimeString());

    if (process.exitCode) {
      core.setFailed('Auditing failed due to vulnerabilities');
    }
  } catch (error) {
    core.setFailed((error as Error).message);
  }
};
