class GuidePage {
    TabSwitcher = '.KWTabs__tab'
    SellingTabUnAuth = 'div.KWTabs__tab.GuideRoute__tab.selling'
    MarkStepAsCompleteButton = 'button.KWButton span:contains("Mark step as Completed")'
    FindAnAgent = '.KWButton:contains("Find an Agent")'
    GuideStep = '.GuideListItem'
    GuideStepCheckBox = '.GuideListItem__checkbox'

    BuyingTab = {
        Title: 'div.GuideIntro div.GuideIntro__title',
        TitleUnAuth: '.GuideRoute__description__header',
        DescriptionUnAuth: '.GuideRoute__description_text',
        Description: 'div.GuideIntro div.GuideIntro__text',
        GetStartedButton: 'button[data-testid="GuideIntro__getStartedButton"]'
    };

    SellingTab = {
        GuideTitle: '.Guide__banner__header',
        UserAvatar: 'div[data-testid="avatar"]',
        GuideButtonLink: 'div.KWNavigation a:contains("Guide")',
        Title: 'div.GuideIntro div.GuideIntro__title',
        TitleUnAuth: '.GuideRoute__description__header',
        DescriptionUnAuth: '.GuideRoute__description_text',
        Description: 'div.GuideIntro div.GuideIntro__text',
        GetStartedButton: 'button[data-testid="GuideIntro__getStartedButton"]'
    };

    BuyingStep = {
        Buying: '.KWTabs__tab:contains("Buying")',
    }

    SellingStep = {
        Selling: '.KWTabs__tab:contains("Selling")',
    }
}

export default new GuidePage();