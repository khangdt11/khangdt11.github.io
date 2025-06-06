const container = document.createElement('section');
container.id = 'containerScrollTask';
container.innerHTML = `
    <header id = 'scroll-header'>
    <h1>Hướng dẫn viết blog hiệu quả</h1>
    <p class="meta">Đăng bởi <strong>Nguyễn Văn A</strong> – 6 Tháng 6, 2025</p>
    
  </header>

  <article>
    <p>Viết blog không chỉ là sở thích mà còn là một cách tuyệt vời để chia sẻ kiến thức, xây dựng thương hiệu cá nhân và thu hút độc giả. Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo ra một bài viết blog hấp dẫn và có giá trị.</p>

    <h2>1. Chọn chủ đề đúng</h2>
    <p>Chủ đề là linh hồn của bài viết. Hãy chọn những chủ đề bạn có kiến thức và độc giả đang quan tâm. Đừng cố viết những thứ bạn không thực sự hiểu rõ.</p>

    <h2>2. Cấu trúc rõ ràng</h2>
    <p>Một bài viết nên có:</p>
    <ul style = 'list-style-type: none'>
      <li><strong>Tiêu đề hấp dẫn</strong> để thu hút người đọc.</li>
      <li><strong>Mở bài</strong> rõ ràng, nêu vấn đề.</li>
      <li><strong>Thân bài</strong> chia sẻ chi tiết, có ví dụ minh họa.</li>
      <li><strong>Kết bài</strong> tóm tắt và kêu gọi hành động.</li>
    </ul>

    <h2>3. Sử dụng hình ảnh và trích dẫn</h2>
    <p>Hình ảnh giúp bài viết sinh động hơn. Trích dẫn tăng độ tin cậy và chiều sâu cho nội dung.</p>
    <blockquote>"Nếu bạn không viết để người khác đọc, thì tại sao bạn lại viết?" – Ernest Hemingway</blockquote>

    <h2>4. Tối ưu SEO</h2>
    <p>Đừng quên tối ưu từ khóa, đặt thẻ meta hợp lý và sử dụng heading đúng cách để bài viết thân thiện với công cụ tìm kiếm.</p>

    <h2>5. Đừng quên chỉnh sửa</h2>
    <p>Hãy dành thời gian đọc lại, sửa lỗi chính tả và đảm bảo mạch nội dung logic. Một bài viết tốt cần được chỉnh sửa kỹ lưỡng.</p>

    <h2>Kết luận</h2>
    <p>Viết blog là một hành trình dài. Hãy bắt đầu từ những bài viết đơn giản, dần dần bạn sẽ cải thiện kỹ năng và xây dựng cộng đồng độc giả trung thành.</p>
  </article>

  <section class="comments">
    <h3>Bình luận</h3>
    <div class="comment">
      <p class="comment-author">Lê Bảo</p>
      <p class="comment-time">6/6/2025, 10:12 sáng</p>
      <p>Bài viết rất hay và hữu ích. Cảm ơn bạn đã chia sẻ!</p>
    </div>
    <div class="comment">
      <p class="comment-author">Minh Ngọc</p>
      <p class="comment-time">6/6/2025, 1:45 chiều</p>
      <p>Mình rất cần những tip như vậy để cải thiện blog cá nhân. Tuyệt vời!</p>
    </div>
  </section>
`;

document.querySelector('#box-scroll-ad .exercise-body').appendChild(container);


let checkAd = true;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const currentPlace = (scrollY + viewHeight) / fullHeight;
    if(!document.querySelector('#ad-banner-scroll')) {
        if(!checkAd && currentPlace >= 0.5) {
            const adContainer = document.createElement('div');
            adContainer.id = 'ad-banner-scroll'
            adContainer.innerHTML = `<h2>Đây là banner quảng cáo</h2>`;
            document.getElementById('scroll-header').appendChild(adContainer);
            checkAd = true;
        }       
        checkAd = false;      
    } else {
        if(!checkAd && currentPlace < 0.5) {
            document.querySelector('#ad-banner-scroll').remove();
        } 
    }
}); 

// const content = `<header id = 'scroll-header'>
//     <h1>Hướng dẫn viết blog hiệu quả</h1>
//     <p class="meta">Đăng bởi <strong>Nguyễn Văn A</strong> – 6 Tháng 6, 2025</p>
    
//   </header>

//   <article>
//     <p>Viết blog không chỉ là sở thích mà còn là một cách tuyệt vời để chia sẻ kiến thức, xây dựng thương hiệu cá nhân và thu hút độc giả. Trong bài viết này, chúng ta sẽ tìm hiểu cách tạo ra một bài viết blog hấp dẫn và có giá trị.</p>

//     <h2>1. Chọn chủ đề đúng</h2>
//     <p>Chủ đề là linh hồn của bài viết. Hãy chọn những chủ đề bạn có kiến thức và độc giả đang quan tâm. Đừng cố viết những thứ bạn không thực sự hiểu rõ.</p>

//     <h2>2. Cấu trúc rõ ràng</h2>
//     <p>Một bài viết nên có:</p>
//     <ul style = 'list-style-type: none'>
//       <li><strong>Tiêu đề hấp dẫn</strong> để thu hút người đọc.</li>
//       <li><strong>Mở bài</strong> rõ ràng, nêu vấn đề.</li>
//       <li><strong>Thân bài</strong> chia sẻ chi tiết, có ví dụ minh họa.</li>
//       <li><strong>Kết bài</strong> tóm tắt và kêu gọi hành động.</li>
//     </ul>

//     <h2>3. Sử dụng hình ảnh và trích dẫn</h2>
//     <p>Hình ảnh giúp bài viết sinh động hơn. Trích dẫn tăng độ tin cậy và chiều sâu cho nội dung.</p>
//     <blockquote>"Nếu bạn không viết để người khác đọc, thì tại sao bạn lại viết?" – Ernest Hemingway</blockquote>

//     <h2>4. Tối ưu SEO</h2>
//     <p>Đừng quên tối ưu từ khóa, đặt thẻ meta hợp lý và sử dụng heading đúng cách để bài viết thân thiện với công cụ tìm kiếm.</p>

//     <h2>5. Đừng quên chỉnh sửa</h2>
//     <p>Hãy dành thời gian đọc lại, sửa lỗi chính tả và đảm bảo mạch nội dung logic. Một bài viết tốt cần được chỉnh sửa kỹ lưỡng.</p>

//     <h2>Kết luận</h2>
//     <p>Viết blog là một hành trình dài. Hãy bắt đầu từ những bài viết đơn giản, dần dần bạn sẽ cải thiện kỹ năng và xây dựng cộng đồng độc giả trung thành.</p>
//   </article>

//   <section class="comments">
//     <h3>Bình luận</h3>
//     <div class="comment">
//       <p class="comment-author">Lê Bảo</p>
//       <p class="comment-time">6/6/2025, 10:12 sáng</p>
//       <p>Bài viết rất hay và hữu ích. Cảm ơn bạn đã chia sẻ!</p>
//     </div>
//     <div class="comment">
//       <p class="comment-author">Minh Ngọc</p>
//       <p class="comment-time">6/6/2025, 1:45 chiều</p>
//       <p>Mình rất cần những tip như vậy để cải thiện blog cá nhân. Tuyệt vời!</p>
//     </div>
//   </section>`;

// $('#box-scroll-ad .exercise-body').append(content);

// $(window).scroll(() => {
//   let adCheck = true;
//   const scrollY = window.scrollY;
//   const viewHeight = window.innerHeight;
//   const fullHeight = document.documentElement.scrollHeight;
//   const currentPlace = (scrollY + viewHeight) / fullHeight; 
//   if (!$('#ad-banner-scroll')) {
//     if(!adCheck && currentPlace >= 0.5) {
//       const adContainer = `<div id = 'ad-banner-scroll'>
//         <h2>Đây là banner quảng cáo</h2>
//       </div>`;
//       $('#scroll-header').append(adContainer);
//       adCheck = true;
//     }
//       adCheck = false;
//   } else {
//     if(!adCheck && currentPlace < 0.5) {
//           $('#ad-banner-scroll').remove();
//         } 
//   }
// })

