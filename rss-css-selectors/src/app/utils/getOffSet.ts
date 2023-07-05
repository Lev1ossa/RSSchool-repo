export const getOffSet = (tableElement: HTMLElement | null): number => {
  const table = document.querySelector(('.table'));
  let offsetSum = 0;
  while (tableElement) {
    offsetSum += tableElement.offsetLeft;
    tableElement = tableElement.parentElement === table ? null : tableElement.parentElement; 
  }
  return offsetSum;
}