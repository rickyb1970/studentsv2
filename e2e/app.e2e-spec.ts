import { Studentsv2Page } from './app.po';

describe('studentsv2 App', () => {
  let page: Studentsv2Page;

  beforeEach(() => {
    page = new Studentsv2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
