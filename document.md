# Task 1: Tạo khối quảng cáo đơn giản (Ad Simple)
---
- Tạo một element mới trong DOM.
- Thêm code hiển thị trong ad bằng innerHTML. (nhiều cách)
- Thêm element vào bằng các appendChild(). (có thể dùng insertAdjacentElement)
- addEventListenr cho sự kiện click vào button đóng quảng cáo => remove element vừa tạo

# Task 2:  Click để hiện quảng cáo (Show Ad)
---
- Lắng nghe sự kiện click button hiện quảng cáo
- Thực hiện tương tự như Task 1
- Một hàm setTimeout để tự động remove quảng cáo.

# Task3: Chèn quảng cáo khi scroll tới 50% trang
---
- Chèn thêm content cho page đủ dài để demo như task 1 task 2
- Lắng nghe sự kiện scroll của đối tượng window
- Check currentPlace bằng công thức: ```currentPlace = (scrollY + viewHeight) / fullHeight```
- Thêm một biến ```checkAd``` để giữ trạng thái của Ad.  
- Nếu nhỏ lớn hơn hoặc bằng 0.5 thì hiển thị add, tương tự Task 1.

# Task 5: Floating Ad – Quảng cáo nổi bên phải
---
- Khi scroll đến hơn 200px, hiển thị ad ở góc phải bên dưới. CSS bằng cách      
    - position: fixed; 
    - right: 0;
    - bottom: 0;
- Kiểm tra xem adClosed ở localStorage có đang là true hay không, nếu không thì mới hiển thị.
- Khi click vào đóng quảng cáo, ```localStorage.setItem('adClosed', 'true');``` và sẽ không hiển thị nữa nếu load lại trình duyệt.

# Task 6: Video Ad – Autoplay + Unmute on click
---
- Thêm một element vào DOM có chức năng như container chứa video.
- Thêm video vào bằng thẻ <video> như cách task 1 với những thuộc tính trong thẻ bao gồm: autoplay, muted và loop để video phát lại khi đã chiếu hết.
- Thêm sự kiện khi click vào video: ```video.muted = false``` bật âm thanh.

# Task 7: Viết function showAd(config) – SDK đơn giản
---
- Tạo một form để chọn các config về position, timeout và content cho quảng cáo
- Lắng nghe sự kiện click của button submit form ```e.preventDefault``` để ngăn gửi form đi.
- Viết hàm showAd(x) param x là một Object chứa các config từ form. Truy xuất data từ x rồi hiển thị như Task 1.
- Check xem có tồn tại quảng cáo tại ví trí đó chưa, nếu chưa thì showAd(), đã tồn tại thì alert.
