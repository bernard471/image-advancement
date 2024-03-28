const tryMenuItems = document.querySelectorAll('.try-menu li');

tryMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    tryMenuItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');

    function showPreview(file) {
      if (file) {
        const reader = new FileReader();
        reader.onload = function () {
          uploadPreviewImg.src = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        uploadPreviewImg.src = 'upload-icon.svg';
      }
    }
  });
});