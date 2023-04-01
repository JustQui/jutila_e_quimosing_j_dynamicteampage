let heroButtons = document.querySelectorAll('.team_members a'),
    lightBox = document.querySelector('#lightbox'),
    LBdesign = document.querySelector('.lightbox-des'),
    exitButton = document.querySelector('.lightbox-close');

function loadHeroData() {
  lightBox.querySelector('h3').textContent = members[this.dataset.member].headline;
  lightBox.querySelector('p').textContent = members[this.dataset.member].bio;
  LBdesign.style.backgroundImage = `url(${members[this.dataset.member].avatar})`;
      
  lightBox.classList.add('lightbox-active');
}

function closeLightbox(event) {
    event.preventDefault();
    lightBox.classList.remove('lightbox-active');
  }

heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));
exitButton.addEventListener('click', closeLightbox);
