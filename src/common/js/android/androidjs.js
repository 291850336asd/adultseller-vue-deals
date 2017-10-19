export function androidToString (params) {
  if (window.seller) {
    window.seller.getInfo();
  } else {
    alert('sddsd');
  }
};


export function showDetail () {
  if (window.seller) {
    window.seller.showDetail();
  } else {
    alert('sddsd');
  }
};
