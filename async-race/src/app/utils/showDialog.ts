export const showDialog = (dialogContent: string): void => {
  const cancelButton = document.querySelector('.fav-close-button') as HTMLElement;
  const favDialog = document.querySelector('.fav-dialog') as HTMLDialogElement;
  const dialogBlock = document.querySelector('.fav-dialog-block') as HTMLElement;
  if (dialogBlock) {
    dialogBlock.innerHTML = '';

    const favDialogText = document.createElement('p');
    favDialogText.innerHTML = dialogContent;
    dialogBlock.appendChild(favDialogText);

    favDialog.showModal();

    cancelButton.addEventListener('click', () => {
      favDialog.close();
    });
  }
};
