// Create Function with Parameter is an Object having Config

// const config = {
//      position: 'bottom', //bottom
//      timeout: 5000, //5s
//      content: '<div class = "ad-banner"><h2> Quảng cáo từ SDK</h2></div>'
// };

function showAd(config) {
     const adContainer = document.createElement('div');
     adContainer.classList.add('ad-container');

     const adBanner = document.createElement('div');
     adBanner.className = 'ad-banner';
     adBanner.innerHTML = `${config.content}`;
     adContainer.appendChild(adBanner);

     if(config.position === 'topAd') {
          adContainer.classList.add('topAd');
          document.querySelector('header').insertAdjacentElement("afterend", adContainer);
     } else {
          adContainer.classList.add('bottomAd');
          document.querySelector('footer').insertAdjacentElement("beforebegin", adContainer);
     }

     setTimeout(() => {
          adContainer.remove();
     }, config.timeout);

}

document.getElementById('submit').addEventListener('click', (e) => {
     e.preventDefault();
     
     const position = document.querySelector('input[name="position"]:checked')?.value;
     const timeout = parseInt(document.getElementById("timeout").value);
     const content = document.getElementById("content").value;

     const config = {
          position: position,
          timeout: timeout,
          content: content,
     };
     console.log(config);
     if(!document.querySelector(`.${position}`)) {
          showAd(config);
     } else {
          alert(`${position} not available`);
     }
});

