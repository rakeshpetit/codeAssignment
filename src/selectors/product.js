const area = state => state.allReducers.form;

export function getProducts(state) {
  let calculatedListData = [];
  let grandTotal = 0;
  const listData = area(state);
  const { list, details } = listData;
  if(!list || !details)
    return null;
  list.forEach(function(item) {
    const detail = details[item];
    if(detail) {
      const { price, qty } =  detail;
      const total = Math.round(price * qty * 100) / 100;
      if(!isNaN(total)) {
        grandTotal = grandTotal + total;
        calculatedListData.push({ total, ...detail });
      }
    }
  });
  return { calculatedListData, grandTotal };
}
