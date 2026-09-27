function checkout(cart) {
  if (!cart.items.length) {
    throw new Error('Корзина пуста');
  }
  return cart.items.reduce((sum, i) => sum + i.price, 0);
}
