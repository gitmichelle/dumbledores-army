import { DumbledoresArmyPage } from './app.po';

describe('dumbledores-army App', function() {
  let page: DumbledoresArmyPage;

  beforeEach(() => {
    page = new DumbledoresArmyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
