/* Card Functions
==================================
   Name                Author    Date        Notes
   ------------------  --------  ----------  --------------------------------------------------
   muInfoModalToggle   JMM       2025-04-16  Used in conjunction with HTML and CSS to create a Modal overlay on a card to display additional information about the card
   muModalLinks        JMM       2025-04-21  Used to turn link buttons on a card into modal controlling toggles
*/
export function muInfoModalToggle(button = '.mu--info-corner', target = '.mu--info-modal', label = '.mu--info-label', hideIcon = 'close', showIcon = 'question_mark') {
  let infoStatus = 0; //Pseudo-Boolean to toggle modal
  const infoElement = document.querySelector(button);
  const infoContainer = document.querySelector(target);
  const infoLabel = document.querySelector(label);

  const elementPosition = infoElement.infoElement.addEventListener('click', function () {
    infoStatus = Math.abs(infoStatus - 1); // Status Toggle for 0 -> 1 -> 0

    if (infoStatus == 1) {
      // Show the Modal
      infoContainer.style.visibility = 'visible';
      infoContainer.style.opacity = '1.0';
      infoContainer.style.backgroundColor = 'rgba( 0,0,0,0.5)';
      infoLabel.textContent = hideIcon;
    } else {
      //Hide the Modal
      infoContainer.style.visibility = 'hidden';
      infoContainer.style.opacity = '0';
      infoContainer.style.backgroundColor = 'rgba( 0,0,0,0)';
      infoLabel.textContent = showIcon;
    }
  });
}

export function muModalLinks() {
  const shade = document.querySelector('#modal-shade');
  const indicator = document.querySelector('.mu--indicator');
  const modals = document.querySelectorAll('.mu--modals');
  modals.forEach(modalPrep);
  shade.addEventListener('click', closeModals()); //Allows clicking on the shade to close all the open modals

  function closeModals() {
    const openModals = document.querySelectorAll('[data-open]');
    openModals.forEach(function (modal) {
      modal.toggleAttribute('data-open');
      modal.toggleAttribute('data-closed');
      const content = document.querySelector(`#${modal.id}-modal`);
      shade.classList.add('mu--modal-shade-closed');
      shade.classList.add('mu--modal-closed');
      shade.classList.remove('mu--modal-shade-open');
      shade.classList.remove('mu--modal-open');
      content.classList.add('mu--modal-closed');
      content.classList.remove('mu--modal-open');
      indicator.classList.add('mu--modal-closed');
      indicator.classList.remove('mu--modal-open');
    });
  }

  function openModal(id) {
    const modal = document.querySelector(`#${id}`);
    modal.toggleAttribute('data-closed');
    modal.toggleAttribute('data-open');
    const content = document.querySelector(`#${modal.id}-modal`);
    shade.classList.remove('mu--modal-shade-closed');
    shade.classList.remove('mu--modal-closed');
    shade.classList.add('mu--modal-shade-open');
    shade.classList.add('mu--modal-open');
    content.classList.remove('mu--modal-closed');
    content.classList.add('mu--modal-open');
    indicator.classList.remove('mu--modal-closed');
    indicator.classList.add('mu--modal-open');
    setIndicator(id);
  }

  function setIndicator(id) {
    const modal = document.querySelector(`#${id}`);
    const modalLocation = modal.getBoundingClientRect();
    if ((indicator.className = 'mu--indicator')) {
      // Top indicator
      const posTop = modalLocation.bottom;
      const posLeft = modalLocation.left + (modalLocation.right - modalLocation.left) / 2 - parseFloat(getComputedStyle(indicator).borderLeftWidth);
      indicator.style.top = posTop + 'px';
      indicator.style.left = posLeft + 'px';
    }
  }

  function modalPrep(modal) {
    const iconSpan = document.createElement('span');
    iconSpan.className = 'material-symbols-outlined';
    iconSpan.textContent = modal.id;
    modal.appendChild(iconSpan);
    modal.toggleAttribute('data-closed');
    closeModals();
    modal.addEventListener('click', function () {
      if (modal.hasAttribute('data-closed')) {
        closeModals();
        openModal(modal.id);
      } else {
        closeModals();
      }
    });
  }
}
