import { GrouplinkPage } from './app.po';

describe('grouplink App', () => {
  let page: GrouplinkPage;

  beforeEach(() => {
    page = new GrouplinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
