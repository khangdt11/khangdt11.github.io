const btnShow = document.getElementById('show-ad-btn');

btnShow.addEventListener('click', () => {
    btnShow.disabled = true;
    const adContainer = document.createElement('div');
    adContainer.id = 'ad-banner';
    adContainer.innerHTML = `<h2>Đây là quảng cáo đơn giản</h2>
    `
    document.querySelector('#box-show-ad .exercise-body').appendChild(adContainer);

    setTimeout(() => {
        adContainer.remove();
        btnShow.disabled = false;
    }, 5000);
})
