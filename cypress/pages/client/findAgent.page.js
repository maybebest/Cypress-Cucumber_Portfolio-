class FindAgentPage {
    FindAgentSection = '.FindAgentRoute'
    AgentCard = `${this.FindAgentSection} .AgentCard`
    AgentCardLocation = `${this.AgentCard} .AgentCard__location`
    SearchAgentInput = '.AgentSearchAutoComplete .KWSearchInput__input';
    SearchButton = '.AgentSearchAutoCompleteByNameOrLocation__submitSearchButton';
    FindAgentTitle = '.FindAgentRoute__title'
    getSearchAutocompleteSection(section) {
        return `div.KWSearchPopup div.KWSearchSection:contains("${section}") div.KWSearchSection__content`
    }
}

export default new FindAgentPage();