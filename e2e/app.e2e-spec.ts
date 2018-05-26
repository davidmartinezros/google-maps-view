import { GoogleMapsView2Page } from './app.po';

describe('google-maps-view2 App', () => {
  let page: GoogleMapsView2Page;

  beforeEach(() => {
    page = new GoogleMapsView2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
