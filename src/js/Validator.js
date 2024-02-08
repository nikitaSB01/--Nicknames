function Validator(num) {
  let numRes;
  const reg = /^[\d ()+-]+$/;
  if (reg.test(num)) {
    if (/^\+\d{2}/.test(num)) {
      numRes = num.replace(/[() -]/g, '');
    } else {
      numRes = num.replace(/[() -]/g, '');
      numRes = numRes.replace(/^8/, '+7');
    }
  } else {
    throw new Error('Присутствуют недопустимые символы.');
  }

  return numRes;
}

export default Validator;
