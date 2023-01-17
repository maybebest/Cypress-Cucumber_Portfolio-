class YouPage {
    HistoryTabLink = 'div.MeRoute div.KWTabs__content div.KWTabs__text:contains("History")'
    YourAccountTabLink = 'div.MeRoute div.KWTabs__content div.KWTabs__text:contains("Your Account")'
    CoBuyerTabLink = 'div.MeRoute div.KWTabs__content div.KWTabs__text:contains("Co-buyer")'
    BetaFeaturesTabLink = 'div.MeRoute div.KWTabs__content div.KWTabs__text:contains("Beta Features")'
    SignOutButton = 'div.MeRoute div.MeRoute__signOut:contains("Sign Out")'
    UserAvatar = 'div.MeRoute div.MeHeader div.MeHeader__name'
}

export default new YouPage()