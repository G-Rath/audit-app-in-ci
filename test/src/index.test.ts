import * as cp from 'child_process';
import * as path from 'path';
import * as process from 'process';
import * as core from '@actions/core';

let getInputSpy;

describe('action', () => {
  it('calls parseArgs with --debug', () => {
    cp.execSync('ts-node src/index.ts');
  });

  // describe('when an error is thrown', () => {
  //   it('calls `setFailed` with the error message', async () => {
  //     const setFailedSpy = jest.spyOn(core, 'setFailed');
  //
  //     await run();
  //
  //     expect(setFailedSpy).toHaveBeenCalledWith('oh noes!');
  //   });
  // });
  //
  // describe('when a config path is provided', () => {
  //   beforeEach(() => {
  //     getInputSpy = jest.spyOn(core, 'getInput');
  //   });
  // });

  // // shows how the runner will run a javascript action with env / stdout protocol
  // it('runs', () => {
  //   process.env.INPUT_MILLISECONDS = '500';
  //   const ip = path.join(__dirname, '..', 'lib', 'index.js');
  //   const options: cp.ExecSyncOptions = {
  //     env: process.env
  //   };
  //
  //   console.log(cp.execSync(`node ${ip}`, options).toString());
  // });
  //
  // describe('when given an invalid number', () => {
  //   it('throws', async () => {
  //     const input = parseInt('foo', 10);
  //
  //     await expect(buildOptions(input)).rejects.toThrow(
  //       'milliseconds not a number'
  //     );
  //   });
  // });
});
