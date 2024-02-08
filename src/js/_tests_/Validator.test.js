// прописать import все файлы JS
import Validator from '../Validator';
// начать тесты

test('проверка на выдачу ошибки написания номера', () => {
  expect(Validator('+8 = 9934482')).toThrow();
});

/*
test('проверка на правильность написания логина', () => {
  const funcResult = new Validator('Nikita12S');
  const result = 'Ваш логин: Nikita12S соответствует требованиям.';
  expect(funcResult.validateUsername()).toEqual(result);
});
 */
