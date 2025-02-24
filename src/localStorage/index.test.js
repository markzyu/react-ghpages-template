import { getAgreementRead, setAgreementRead } from './index.js';

test('By default, user agreement is not agreed to', () => {
  expect(getAgreementRead()).toEqual(false);
});

test('setAgreementRead works properly', () => {
  expect(getAgreementRead()).toEqual(false);
  expect(setAgreementRead(true));
  expect(getAgreementRead()).toEqual(true);
  expect(setAgreementRead(false));
  expect(getAgreementRead()).toEqual(false);
});