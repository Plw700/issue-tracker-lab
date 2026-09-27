function renderOrderHistory(user) {
  // TODO: реализовать отображение истории заказов пользователя
  return user.orders.map(o => ({
    id: o.id,
    date: o.createdAt,
    total: o.total,
    status: o.status,
  }));
}
