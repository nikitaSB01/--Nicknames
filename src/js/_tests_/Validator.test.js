// прописать import все файлы JS
import Validator from '../Validator';
// начать тесты

test('проверка на выдачу ошибки написания номера', () => {
  expect(() => Validator('+8 = 9934482')).toThrow();
});

test('проверка на правильность преобразования номера с 8 в начале', () => {
  const funcResult = Validator('8 (927) 000-00-00');
  const result = '+79270000000';
  expect(funcResult).toEqual(result);
});

test('проверка на правильность преобразования номера с +7 в начале', () => {
  const funcResult = Validator('+7 960 000 00 00');
  const result = '+79600000000';
  expect(funcResult).toEqual(result);
});

test('проверка на правильность преобразования не РФ номера', () => {
  const funcResult = Validator('+86 000 000 0000');
  const result = '+860000000000';
  expect(funcResult).toEqual(result);
});
