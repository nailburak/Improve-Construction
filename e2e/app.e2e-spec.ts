import { ImproveConstructionPage } from './app.po';

describe('improve-construction App', () => {
  let page: ImproveConstructionPage;

  beforeEach(() => {
    page = new ImproveConstructionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
