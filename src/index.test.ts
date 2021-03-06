import * as API from '.';

describe('Public API', () => {
  const methods = [
    'formatCPF',
    'isValidCEP',
    'isValidPIS',
    'isLastChar',
    'isValidCPF',
    'formatCNPJ',
    'isValidCNPJ',
    'onlyNumbers',
    'generateCPF',
    'isValidEmail',
    'isValidPhone',
    'generateCNPJ',
    'formatBoleto',
    'isValidBoleto',
    'generateChecksum',
    'generateRandomNumber',
    'formatJudicialProcess',
  ];

  Object.keys(API).forEach(method => {
    test(`${method} is available in the Public API`, () => {
      expect(methods).toContain(method);
    });
  });
});
