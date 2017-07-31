import { TemplatinkPage } from './app.po';

describe('templatink App', () => {
  let page: TemplatinkPage;

  beforeEach(() => {
    page = new TemplatinkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
