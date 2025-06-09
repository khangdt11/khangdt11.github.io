localStorage.setItem('adClosed', 'false');
window.addEventListener('scroll', () => {
    let adClosed = localStorage.getItem('adClosed');
    if(adClosed === 'true') {
        return;
    } else {
        if(scrollY > 200 && !document.querySelector('#ad-floating')) {
            const adFloatContainer = document.createElement('div');
            adFloatContainer.id = 'ad-floating';
            adFloatContainer.innerHTML = `
                <h2>FLOATING ADS</h2>
                <button id = "btn-close"> Đóng </button>`;
            document.querySelector('body').appendChild(adFloatContainer);

            const buttonClose = adFloatContainer.querySelector('#btn-close');
            buttonClose.addEventListener('click', () => {
                adFloatContainer.remove();
                // Set adClosed = true, lúc này trình duyện không hiện quảng cáo này nữa.
                localStorage.setItem('adClosed', 'true');
                console.log(localStorage);
            });
        }
    }
});
