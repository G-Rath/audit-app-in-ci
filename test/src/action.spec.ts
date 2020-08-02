import * as core from '@actions/core';
import { auditApp } from 'audit-app';
import { parseArgs } from 'audit-app/lib/parseArgs';
import { mocked } from 'ts-jest/utils';
import { action } from '../../src/action';

jest.mock('audit-app');
jest.mock('audit-app/lib/parseArgs');

const auditAppMock = mocked(auditApp);
const parseArgsMock = mocked(parseArgs);

describe('action', () => {
  it('calls parseArgs with --debug', async () => {
    await action();

    expect(parseArgsMock).toHaveBeenCalledWith(
      expect.arrayContaining(['--debug'])
    );
  });

  describe('when an error is thrown', () => {
    it('calls `setFailed` with the error message', async () => {
      const setFailedSpy = jest.spyOn(core, 'setFailed');

      auditAppMock.mockRejectedValue(new Error('oh noes!'));

      await action();

      expect(setFailedSpy).toHaveBeenCalledWith('oh noes!');
    });
  });

  describe('when a config path is provided', () => {
    beforeEach(() => {
      jest.spyOn(core, 'getInput').mockReturnValue('path/to/config');
    });

    it('adds --config to the args', async () => {
      await action();

      expect(parseArgsMock).toHaveBeenCalledWith(
        expect.arrayContaining(['--config', 'path/to/config'])
      );
    });
  });

  describe('when a config path is not set', () => {
    it('does not add --config to the args', async () => {
      await action();

      expect(parseArgsMock).toHaveBeenCalledWith(
        expect.not.arrayContaining(['--config', 'path/to/config'])
      );
    });
  });

  describe('when the exit code is non-zero after auditing', () => {
    it('fails', async () => {
      const setFailedSpy = jest.spyOn(core, 'setFailed');

      auditAppMock.mockImplementation(async () => {
        process.exitCode = 3;

        return Promise.resolve();
      });

      await action();

      expect(setFailedSpy).toHaveBeenCalledWith(
        expect.stringMatching(/auditing failed/iu)
      );
    });
  });
});
