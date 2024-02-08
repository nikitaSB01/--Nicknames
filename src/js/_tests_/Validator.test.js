// прописать import все файлы JS
import Validator from '../Validator';
// начать тесты
test('проверка на выдачу ошибки написания логина', () => {
  const res = new Validator('12=nfsjk');
  expect(() => res.validateUsername()).toThrow();
});

test('проверка на правильность написания логина', () => {
  const funcResult = new Validator('Nikita12S');
  const result = 'Ваш логин: Nikita12S соответствует требованиям.';
  expect(funcResult.validateUsername()).toEqual(result);
});
