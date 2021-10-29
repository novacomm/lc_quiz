import { browser, element, by, ElementFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

const expectedH1 = 'Quiz';
const expectedTitle = `${expectedH1}`;
const targetQuestion = { id: 15, name: 'Magneta' };
const targetQuestionDashboardIndex = 3;
const nameSuffix = 'X';
const newQuestionName = targetQuestion.name + nameSuffix;

class Question {
    id: number;
    name: string;

    // Factory methods

    // Get question from s formatted as '<id> <name>'.
    static fromString(s: string): Question {
        return {
            id: +s.substr(0, s.indexOf(' ')),
            name: s.substr(s.indexOf(' ') + 1),
        };
    }

    // Get question id and name from the given detail element.
    static async fromDetail(detail: ElementFinder): Promise<Question> {
        // Get question id from the first <div>
        const id = await detail.all(by.css('div')).first().getText();
        // Get name from the h2
        const name = await detail.element(by.css('h2')).getText();
        return {
            id: +id.substr(id.indexOf(' ') + 1),
            name: name.substr(0, name.lastIndexOf(' '))
        };
    }
}

describe('Tutorial part 5', () => {

  beforeAll(() => browser.get(''));

  function getPageElts() {
    const navElts = element.all(by.css('app-root nav a'));

    return {
      navElts,

      appDashboardHref: navElts.get(0),
      appDashboard: element(by.css('app-root app-dashboard')),
      topQuestions: element.all(by.css('app-root app-dashboard > div h4')),

      appQuestionsHref: navElts.get(1),
      appQuestions: element(by.css('app-root app-questions')),
      allQuestions: element.all(by.css('app-root app-questions li')),
      questionDetail: element(by.css('app-root app-question-detail > div'))
    };
  }

  describe('Initial page', () => {

    it(`has title '${expectedTitle}'`, () => {
        expect(browser.getTitle()).toEqual(expectedTitle);
    });

    it(`has h1 '${expectedH1}'`, () => {
        expectHeading(1, expectedH1);
    });

    const expectedViewNames = ['Dashboard', 'Questions'];
    it(`has views ${expectedViewNames}`, () => {
      const viewNames = getPageElts().navElts.map((el: ElementFinder) => el.getText());
      expect(viewNames).toEqual(expectedViewNames);
    });

    it('has dashboard as the active view', () => {
      const page = getPageElts();
      expect(page.appDashboard.isPresent()).toBeTruthy();
    });

  });

  describe('Dashboard tests', () => {

    beforeAll(() => browser.get(''));

    it('has top questions', () => {
      const page = getPageElts();
      expect(page.topQuestions.count()).toEqual(4);
    });

    it(`selects and routes to ${targetQuestion.name} details`, dashboardSelectTargetQuestion);

    it(`updates question name (${newQuestionName}) in details view`, updateQuestionNameInDetailView);

    it(`saves and shows ${newQuestionName} in Dashboard`, () => {
      element(by.buttonText('go back')).click();
      const targetQuestionElt = getPageElts().topQuestions.get(targetQuestionDashboardIndex);
      expect(targetQuestionElt.getText()).toEqual(newQuestionName);
    });

  });

  describe('Questions tests', () => {

    beforeAll(() => browser.get(''));

    it('can switch to Questions view', () => {
      getPageElts().appQuestionsHref.click();
      const page = getPageElts();
      expect(page.appQuestions.isPresent()).toBeTruthy();
      expect(page.allQuestions.count()).toEqual(10, 'number of questions');
    });

    it('can route to question details', async () => {
      getQuestionLiEltById(targetQuestion.id).click();

      const page = getPageElts();
      expect(page.questionDetail.isPresent()).toBeTruthy('shows question detail');
      const question = await Question.fromDetail(page.questionDetail);
      expect(question.id).toEqual(targetQuestion.id);
      expect(question.name).toEqual(targetQuestion.name.toUpperCase());
    });

    it(`updates question name (${newQuestionName}) in details view`, updateQuestionNameInDetailView);

    it(`shows ${newQuestionName} in Questions list`, () => {
      element(by.buttonText('go back')).click();
      const expectedText = `${targetQuestion.id} ${newQuestionName}`;
      expect(getQuestionLiEltById(targetQuestion.id).getText()).toEqual(expectedText);
    });

  });

  async function dashboardSelectTargetQuestion() {
    const targetQuestionElt = getPageElts().topQuestions.get(targetQuestionDashboardIndex);
    expect(targetQuestionElt.getText()).toEqual(targetQuestion.name);
    targetQuestionElt.click();

    const page = getPageElts();
    expect(page.questionDetail.isPresent()).toBeTruthy('shows question detail');
    const question = await Question.fromDetail(page.questionDetail);
    expect(question.id).toEqual(targetQuestion.id);
    expect(question.name).toEqual(targetQuestion.name.toUpperCase());
  }

  async function updateQuestionNameInDetailView() {
    // Assumes that the current view is the question details view.
    addToQuestionName(nameSuffix);

    const page = getPageElts();
    const question = await Question.fromDetail(page.questionDetail);
    expect(question.id).toEqual(targetQuestion.id);
    expect(question.name).toEqual(newQuestionName.toUpperCase());
  }

});

function addToQuestionName(text: string): promise.Promise<void> {
  const input = element(by.css('input'));
  return input.sendKeys(text);
}

function expectHeading(hLevel: number, expectedText: string): void {
    const hTag = `h${hLevel}`;
    const hText = element(by.css(hTag)).getText();
    expect(hText).toEqual(expectedText, hTag);
}

function getQuestionLiEltById(id: number) {
  const spanForId = element(by.cssContainingText('li span.badge', id.toString()));
  return spanForId.element(by.xpath('..'));
}
