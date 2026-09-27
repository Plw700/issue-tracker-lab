function test(name, fn) {
  try {
    fn();
    console.log('PASS:', name);
  } catch (e) {
    console.log('FAIL:', name, '—', e.message);
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Ожидалось ${expected}, получено ${actual}`);
  }
}

test('checkout: сумма двух товаров', () => {
  const cart = { items: [{ price: 100 }, { price: 250 }] };
  assertEqual(checkout(cart), 350);
});

test('checkout: пустая корзина выбрасывает ошибку', () => {
  const cart = { items: [] };
  try {
    checkout(cart);
    throw new Error('Ошибка не была выброшена');
  } catch (e) {
    assertEqual(e.message, 'Корзина пуста');
  }
});

test('checkout: один товар', () => {
  const cart = { items: [{ price: 99 }] };
  assertEqual(checkout(cart), 99);
});
