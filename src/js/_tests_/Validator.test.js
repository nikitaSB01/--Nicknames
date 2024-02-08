// прописать import все файлы JS
import Validator from '../Validator';
// начать тесты
test('проверка на выдачу ошибки написания логина', () => {
  expect(() => new Validator('nfsjk')).toThrow();
});
