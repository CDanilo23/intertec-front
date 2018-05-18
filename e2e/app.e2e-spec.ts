import { IntertecFrontPage } from './app.po';

describe('intertec-front App', function() {
  let page: IntertecFrontPage;

  beforeEach(() => {
    page = new IntertecFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
