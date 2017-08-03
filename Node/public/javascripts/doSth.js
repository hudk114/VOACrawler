/**
 * Created by dekaihu on 2017/7/31.
 */
window.onload = function () {
  const button = document.getElementById('click');
  button.addEventListener('click', function () {
    send();
  });
}

function send() {
  fetch('/wulala', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(function (res) {
    console.log(res);
  })
}