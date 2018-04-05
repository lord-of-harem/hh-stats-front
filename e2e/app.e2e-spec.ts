import { HhStatsFrontPage } from './app.po';

describe('hh-stats-front App', () => {
  let page: HhStatsFrontPage;

  beforeEach(() => {
    page = new HhStatsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
