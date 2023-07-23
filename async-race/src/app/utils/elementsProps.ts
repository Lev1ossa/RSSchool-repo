import { ElementCreatorProps, InputElementCreatorProps } from '../types/types';

export const headerProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['header'],
  textContent: '',
  listeners: null,
};

export const garageButtonProps: ElementCreatorProps = {
  tag: 'button',
  classes: ['garage-button'],
  textContent: 'To garage',
  listeners: null,
};

export const winnersButtonProps: ElementCreatorProps = {
  tag: 'button',
  classes: ['winners-button'],
  textContent: 'To winners',
  listeners: null,
};

export const footerProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['footer'],
  textContent: '',
  listeners: null,
};

export const githubProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['github'],
  textContent: '',
  listeners: null,
};

export const githubLinkProps: ElementCreatorProps = {
  tag: 'a',
  classes: ['github-link'],
  textContent: '@Lev1ossa',
  listeners: null,
};

export const thisYearProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['year'],
  textContent: '2023',
  listeners: null,
};

export const rsSchoolProps: ElementCreatorProps = {
  tag: 'img',
  classes: ['rsschool'],
  textContent: '',
  listeners: null,
};

export const rsSchoolLinkProps: ElementCreatorProps = {
  tag: 'a',
  classes: ['rsschool-link'],
  textContent: '',
  listeners: null,
};

export const dialogProps: ElementCreatorProps = {
  tag: 'dialog',
  classes: ['fav-dialog'],
  textContent: '',
  listeners: null,
};

export const formDialogProps: ElementCreatorProps = {
  tag: 'form',
  classes: [],
  textContent: '',
  listeners: null,
};

export const dialogBlockProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['fav-dialog-block'],
  textContent: '',
  listeners: null,
};

export const menuProps: ElementCreatorProps = {
  tag: 'menu',
  classes: ['fav-menu'],
  textContent: '',
  listeners: null,
};

export const closeButtonProps: ElementCreatorProps = {
  tag: 'button',
  classes: ['fav-close-button'],
  textContent: 'Close',
  listeners: null,
};

export const mainProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['main'],
  textContent: '',
  listeners: null,
};

export const garageProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['garage'],
  textContent: '',
  listeners: null,
};

export const controlPanelProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['control-panel'],
  textContent: '',
  listeners: null,
};

export const raceProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['race'],
  textContent: '',
  listeners: null,
};

export const raceTrackProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['race-track'],
  textContent: '',
  listeners: null,
};

export const inputBlockCreateProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['input-block', 'input-block-create'],
  textContent: '',
  listeners: null,
};

export const inputNameCreateProps: ElementCreatorProps = {
  tag: 'input',
  classes: ['input-name', 'input-name-create'],
  textContent: '',
  listeners: null,
};

export const inputColorCreateProps: ElementCreatorProps = {
  tag: 'input',
  classes: ['input-color', 'input-color-create'],
  textContent: '',
  listeners: null,
};

export const buttonCreateProps: ElementCreatorProps = {
  tag: 'button',
  classes: ['input-button', 'button-create'],
  textContent: '',
  listeners: null,
};

export const InputElementCreatorCreateProps: InputElementCreatorProps = {
  blockProps: inputBlockCreateProps,
  inputProps: inputNameCreateProps,
  inputColorProps: inputColorCreateProps,
  buttonProps: buttonCreateProps,
  buttonName: 'Create',
};

export const inputBlockUpdateProps: ElementCreatorProps = {
  tag: 'div',
  classes: ['input-block', 'input-block-update'],
  textContent: '',
  listeners: null,
};

export const inputNameUpdateProps: ElementCreatorProps = {
  tag: 'input',
  classes: ['input-name', 'input-name-update'],
  textContent: '',
  listeners: null,
};

export const inputColorUpdateProps: ElementCreatorProps = {
  tag: 'input',
  classes: ['input-color', 'input-color-update'],
  textContent: '',
  listeners: null,
};

export const buttonUpdateProps: ElementCreatorProps = {
  tag: 'button',
  classes: ['input-button', 'button-update'],
  textContent: '',
  listeners: null,
};

export const InputElementCreatorUpdateProps: InputElementCreatorProps = {
  blockProps: inputBlockUpdateProps,
  inputProps: inputNameUpdateProps,
  inputColorProps: inputColorUpdateProps,
  buttonProps: buttonUpdateProps,
  buttonName: 'Update',
};
