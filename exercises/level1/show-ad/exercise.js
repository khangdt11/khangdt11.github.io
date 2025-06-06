// const btnShow = document.getElementById('show-ad-btn');

// btnShow.addEventListener('click', () => {
//     btnShow.disabled = true;
//     const adContainer = document.createElement('div');
//     adContainer.id = 'ad-banner';
//     adContainer.innerHTML = `<h2>Đây là quảng cáo đơn giản</h2>
//     `
//     document.querySelector('#box-show-ad .exercise-body').appendChild(adContainer);

//     setTimeout(() => {
//         adContainer.remove();
//         btnShow.disabled = false;
//     }, 5000);
// })


//Jquery
$('#show-ad-btn').click(() => {
    $('#show-ad-btn').attr('disabled', 'disabled');
    const adContainer = `<div id = "ad-banner">
        <h2>Đây là quảng cáo đơn giản</h2>
    </div>`;
    $('#box-show-ad .exercise-body').append(adContainer);
    setTimeout(() => {
        $('#ad-banner').hide();
        $('#show-ad-btn').removeAttr('disabled');
    }, 5000);
});