document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const categoryText = document.getElementById('categoryText');
  
    dropdownItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedCategory = item.getAttribute('data-value');
        categoryText.textContent = selectedCategory;
      });
    });
  });
  
  // Function to add hover images dynamically
  document.querySelectorAll('.cake-item').forEach(item => {
  const images = JSON.parse(item.getAttribute('data-images')); // Parse the data-images attribute
  const hoverImagesContainer = item.querySelector('.hover-images');
  
  images.forEach(imageSrc => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('hover-image-item');
  
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Topping';
  
    const imageName = document.createElement('span');
    imageName.classList.add('image-name');
    imageName.textContent = imageSrc.split('-')[1].replace('.png', ''); // Example: Extract 'hover1' from 'c1-hover1.png'
  
    imageItem.appendChild(img);
    imageItem.appendChild(imageName);
    hoverImagesContainer.appendChild(imageItem);
  });
  });
  
  