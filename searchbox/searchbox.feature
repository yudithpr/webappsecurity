Feature: searchbox scenario

    As a user
    I want to search "free" on searchbox and get the result
    Scenario: user seacrh "free" in searchbox and get the result
        Given user visit the website
        When user type "free" on searchbox
      
        Then user will see the result page