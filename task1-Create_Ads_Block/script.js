const adsContainer = document.createElement('div').className = 'banner';

adsContainer.innerHTML = `
                    <h2>Khám Phá Công Nghệ Mới Nhất!</h2>
                    <p>Đăng ký ngay để nhận bản tin công nghệ độc quyền từ TechBit.</p>
                    <a href="#" class="banner-btn">Đóng quảng cáo</a>
                `
                
const previousPost = document.querySelector('.content .post:nth-child(2)');

function insertBanner(){
    previousPost.insertAdjacentElement("afterend", adsContainer);
}

insertBanner();

console.log(postList);






