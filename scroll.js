
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight * 0.8 &&
    rect.bottom >= 0
  );
}

function checkVisibility() {
  const headers = document.querySelectorAll('.section-header');
  const cards = document.querySelectorAll('.reel-card');
  const button = document.querySelector('.view-all-btn');
  
  const mapTitle = document.querySelector('.map-section .section-title');
  const mapDescription = document.querySelector('.map-section .section-description');
  const mapContainer = document.querySelector('.map-container');
  const mapPoints = document.querySelectorAll('.map-point');
  
  headers.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
  
  cards.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
  
  if (mapTitle && isElementInViewport(mapTitle)) {
    mapTitle.classList.add('visible');
    
    setTimeout(() => {
      if (mapDescription) {
        mapDescription.classList.add('visible');
      }
      
      setTimeout(() => {
        if (mapContainer) {
          mapContainer.classList.add('visible');
          
          setTimeout(() => {
            mapPoints.forEach(point => {
              point.classList.add('visible');
            });
          }, 600);
        }
      }, 300);
    }, 300);
  }
  
  if (button && isElementInViewport(button)) {
    button.classList.add('visible');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  checkVisibility();
});

let scrollTimeout;
window.addEventListener('scroll', function() {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(checkVisibility, 50);
});

window.addEventListener('resize', checkVisibility);

setTimeout(checkVisibility, 100);