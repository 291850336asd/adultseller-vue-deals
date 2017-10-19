export function androidToString (params) {
  if (window.seller) {
    window.seller.getInfo();
  } else {
    alert('not support');
  }
};


export function showDetail () {
  if (window.seller) {
    window.seller.showDetail();
  } else {
    alert('not support');
  }
};


export function closeAllDetails () {
  if (window.seller) {
    window.seller.closeActivity();
  } else {
    alert('not support');
  }
};

export function closeDetails () {
  if (window.seller) {
    window.seller.closeDetail();
  } else {
    alert('not support');
  }
};
