import { ElementCreatorProps } from '../../types/types';
import { ElementCreator } from '../../utils/elementCreator';
import { AppView } from '../appView';
import './footer.css';

export class FooterView extends AppView {
  constructor() {
    const props: ElementCreatorProps = {
      tag: 'div',
      classes: ['footer'],
      textContent: '',
      listeners: null,
    };
    super(props);
    this.constructView();
  }

  constructView(): void {
    const githubProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['github'],
      textContent: '',
      listeners: null,
    }

    const github = new ElementCreator(githubProps);

    const githubLinkProps: ElementCreatorProps = {
      tag: 'a',
      classes: ['github-link'],
      textContent: '@Lev1ossa',
      listeners: null,
    }

    const githubLink = new ElementCreator(githubLinkProps);
    githubLink.setElementAttributes([
      {
        attribute: 'href',
        value: 'https://github.com/Lev1ossa',
      },
    ]);

    github.addElement(githubLink.getElement());
    this.elementCreator.addElement(github.getElement());

    const thisYearProps: ElementCreatorProps = {
      tag: 'div',
      classes: ['year'],
      textContent: '2023',
      listeners: null,
    }

    const thisYear = new ElementCreator(thisYearProps);
    this.elementCreator.addElement(thisYear.getElement());

    const rsSchoolProps: ElementCreatorProps = {
      tag: 'img',
      classes: ['rsschool'],
      textContent: '',
      listeners: null,
    }

    const rsSchool = new ElementCreator(rsSchoolProps);

    rsSchool.setElementAttributes([
      {
        attribute: 'src',
        value: 'https://rs.school/images/rs_school_js.svg',
      },
      {
        attribute: 'alt',
        value: 'RSS logo',
      },
    ]);

    const rsSchoolLinkProps: ElementCreatorProps = {
      tag: 'a',
      classes: ['rsschool-link'],
      textContent: '',
      listeners: null,
    }

    const rsSchoolLink = new ElementCreator(rsSchoolLinkProps);
    rsSchoolLink.setElementAttributes([
      {
        attribute: 'href',
        value: 'https://rs.school/js/',
      }
    ]);

    rsSchoolLink.addElement(rsSchool.getElement());
    this.elementCreator.addElement(rsSchoolLink.getElement());
  }
}
