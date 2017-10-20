export function androidToString (params) {
  if (window.seller) {
    window.seller.getInfo();
  } else {
    alert('去支付');
  }
};


export function showDetail () {
  if (window.seller) {
    window.seller.showDetail();
  } else {
  }
};


export function closeAllDetails () {
  if (window.seller) {
    window.seller.closeActivity();
  } else {
  }
};

export function closeDetails () {
  if (window.seller) {
    window.seller.closeDetail();
  } else {
  }
};
