/* Card Functions
==================================
   Name                Author    Date        Notes
   ------------------  --------  ----------  --------------------------------------------------
   muInfoModalToggle   JMM       2025-04-16  Used in conjunction with HTML and CSS to create a Modal overlay on a card to display additional information about the card
*/
export function muInfoModalToggle(
  button = '.mu--info-corner',
  target = '.mu--info-modal',
  label = '.mu--info-label',
  hideIcon = 'close',
  showIcon = 'question_mark'
) {
  let infoStatus = 0; //Pseudo-Boolean to toggle modal
  const infoElement = document.querySelector(button);
  const infoContainer = document.querySelector(target);
  const infoLabel = document.querySelector(label);
  infoElement.addEventListener('click', function () {
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
