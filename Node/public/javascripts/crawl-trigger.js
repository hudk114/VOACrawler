/**
 * Created by dekaihu on 2017/7/31.
 */

const send = function send() {
    fetch('/trigger-crawl', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.err(err);
    });
};

window.onload = function () {
    const button = document.getElementById('click');
    button.addEventListener('click', function () {
        send();
    });
}

