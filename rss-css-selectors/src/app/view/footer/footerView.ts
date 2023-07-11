import { ElementCreator } from '../../utils/elementCreator';
import { footerProps, githubLinkProps, githubProps, rsSchoolLinkProps, rsSchoolProps, thisYearProps } from '../../utils/elementsProps';
import { AppView } from '../appView';
import './footer.css';

export class FooterView extends AppView {
  constructor() {
    super(footerProps);
    this.constructView();
  }

  constructView(): void {
    const github = new ElementCreator(githubProps);

    const githubLink = new ElementCreator(githubLinkProps);
    githubLink.setElementAttributes([
      {
        attribute: 'href',
        value: 'https://github.com/Lev1ossa',
      },
    ]);

    github.addElement(githubLink.getElement());
    this.elementCreator.addElement(github.getElement());

    const thisYear = new ElementCreator(thisYearProps);
    this.elementCreator.addElement(thisYear.getElement());

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
