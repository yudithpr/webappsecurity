const URL = 'http://zero.webappsecurity.com/'
const SEARCH = '#searchTerm'


class SearchboxPage{
    static visit() {
        cy.visit(URL)
    }
    static search(free) {
        cy.get(SEARCH).type(free)
    }
 }
 export default SearchboxPage