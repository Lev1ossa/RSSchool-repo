import { HtmlElements } from "../types/types";
import { ElementCreator } from "./elementCreator";

export const сheckGameWin = (cssInput: ElementCreator, winSelectorElements: HtmlElements): boolean => {
  const cssInputEl = cssInput.getElement() as HTMLInputElement;
  let win = true;
  try {
    const tooltip = document.querySelector('.tooltip');
    const userSelectorElements = [...document.querySelectorAll(`.table ${cssInputEl.value}`)];
    const userSelectorElementsClean = userSelectorElements.filter((item) => item !== tooltip);
    if (winSelectorElements.length === userSelectorElementsClean.length) {
      for (let i = 0; i < winSelectorElements.length; i++) {
        if (winSelectorElements[i] !== userSelectorElementsClean[i]) {
          win = false;
        }
      }
    } else {
      win = false;
    }
  } catch {
    win = false;
  }
  return win;
}