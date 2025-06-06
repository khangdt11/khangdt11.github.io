// assets/exercise-loader.js

/**
 * 1. Load file instructions.html và inject vào đúng container.
 */
async function loadExerciseHTML(level, id, container) {
    // Đường dẫn tới thư mục lưu exercise tương ứng
    const path = `exercises/level${level}/${id}/instructions.html`;
    try {
      const resp = await fetch(path);
      if (!resp.ok) throw new Error(`Không tìm thấy ${path}`);
      const html = await resp.text();
      // Tạo wrapper để chứa nội dung hướng dẫn
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      container.appendChild(wrapper);
    } catch (err) {
      container.innerHTML = `<p style="color:red">Lỗi load nội dung: ${err.message}</p>`;
    }
  }
  
  /**
   * 2. Load file exercise.css nếu tồn tại.
   */
  function loadExerciseCSS(level, id) {
    const cssLink = document.getElementById("exercise-css");
    const href = `exercises/level${level}/${id}/exercise.css`;
    // Dùng HEAD request để kiểm tra xem file CSS có tồn tại không
    fetch(href, { method: "HEAD" })
      .then(r => {
        if (r.ok) {
          cssLink.href = href;
          cssLink.disabled = false;
        } else {
          cssLink.removeAttribute("href");
          cssLink.disabled = true;
        }
      })
      .catch(() => {
        cssLink.removeAttribute("href");
        cssLink.disabled = true;
      });
  }
  
  /**
   * 3. Load file exercise.js—append <script> vào body để chạy logic.
   */
  function loadExerciseJS(level, id) {
    return new Promise((resolve, reject) => {
      // Nếu đã từng load script trước đó, remove để tránh chồng
      const prevScript = document.getElementById("exercise-script");
      if (prevScript) prevScript.remove();
  
      const script = document.createElement("script");
      script.id = "exercise-script";
      script.src = `exercises/level${level}/${id}/exercise.js`;
      script.type = "module"; // Hoặc omit nếu không dùng ES module
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Không load JS: level${level}/${id}`));
      document.body.appendChild(script);
    });
  }
  
  /**
   * 4. Main: Khi DOMContentLoaded, scan mọi .exercise-container và lần lượt load
   *    instructions.html, exercise.css, exercise.js.
   */
  document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".exercise-container");
    containers.forEach(container => {
      const level = container.getAttribute("data-level");
      const id = container.getAttribute("data-id");
  
      // 4.1 Load nội dung hướng dẫn (HTML)
      loadExerciseHTML(level, id, container);
  
      // 4.2 Load CSS riêng (nếu có)
      loadExerciseCSS(level, id);
  
      // 4.3 Load JS logic
      loadExerciseJS(level, id).catch(err => {
        console.error(err);
        // Nếu muốn hiển thị lỗi trong container, có thể uncomment:
        // container.insertAdjacentHTML('beforeend', `<p style="color:red">${err.message}</p>`);
      });
    });
  });
  