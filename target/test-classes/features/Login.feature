 @Login
Feature: Login to the teachers dashbord

   @Regression
  Scenario Outline: Sign In with valid credential
    When Enter the username "<username>"
    When Enter the password "<password>"
    And click on login button
    Then Verify the user name "<userid>"
    
     Examples: 
      | username | password | userid |
      | ChallengeTeacher3_1 | *8jdfD%^st1 | #Challenge3 |

  @Regression
  Scenario Outline: Sign In with valid credentials
    When Enter the username "<username>"
    When Enter the password "<password>"
    And click on login button
    Then Verify the error message "<errorMessage>"
    
     Examples: 
      | username | password | errorMessage |
      | ChallengeTeacher3_1 | " " | This field is required. |
      | " " | *8jdf%^st1 | This field is required. |
      | ChallengeTeacher3_1 | *8jdf%^st1 | Invalid Username or Password |