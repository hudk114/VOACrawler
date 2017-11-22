/**
 * Created by dekaihu on 2017/7/31.
 */
const Request = function Request(url, type, data) {
    const config = {
        method: type,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    
    if ('POST' === type && data) {
        config.body = JSON.stringify(data);
    }
    
    return fetch(url, config);
};

const send = function send() {
    Request('/trigger-crawl', 'GET').then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.error(err);
    });
};

const clear = function clear() {
    const judgeEmpty = function judgeEmpty(val) {
        return 'undefined' === typeof val || null === val || '' === val;
    };
    const val = document.getElementById('time').value;
    if (judgeEmpty(val)) {
        const result = confirm('you haven\'t select a specified time, this will delete all file, are you sure?');
        if (!result) {
            return;
        }
    }
    const body = {
        time: judgeEmpty(val) ? 'all' : val
    };
    Request('clear-crawl', 'POST', body).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.error(err);
    });
};

const bind = function bind(id, type ,callback) {
    document.getElementById(id).addEventListener(type, callback);
};

window.onload = function () {
    bind('trigger', 'click', send);
    bind('clear', 'click', clear);
};

