// exercises/level1/ad-simple/exercise.js
/*
const adContainer = document.createElement('div');
adContainer.id = 'ad-banner';
adContainer.innerHTML = `<h2>Đây là quảng cáo đơn giản</h2>
    <button id = 'close-ad-btn'>Đóng quảng cáo</button>
`
document.querySelector('#box-ad-simple .exercise-body').appendChild(adContainer);

const btnClose = document.getElementById('close-ad-btn');

btnClose.addEventListener('click', () => {
    adContainer.remove();
}) */


//Jquery
const adContainer = `<div id = "ad-banner">
    <h2>Đây là quảng cáo đơn giản</h2>
    <button id = 'close-ad-btn'>Đóng quảng cáo</button>
</div>`

$('#box-ad-simple .exercise-body').append(adContainer);

$('#close-ad-btn').click(() => {
    $('#ad-banner').hide();
})

