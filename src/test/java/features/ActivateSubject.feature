 @ActivateSubject
Feature: Activate Subject in Teacher Dashbord

   @Regression
  Scenario Outline: Activate Subject
    When Login to application
    When click on activate subject link
    And  select a Subject "<subject>"
    And  click on next button
    And  click on next button
    And  select a subject group "<subjectGroup>"    
    And  click on activate subject button
    Then Verify the added subject "<subjecttitle>" 
    
     Examples: 
      | subject | subjectGroup | subjecttitle |
      | Taal | A. Staal Grammatica, gr 4 | Taal |
      
      
      


   @EditActivateSubject
   @Regression
  Scenario Outline: Edit the Activated Subject
    When Login to application
    And  click on edit button "<subjectheading>"
    And  change the subject name "<subjecName>" 
    And  click on save button    
    Then Verify the added subject "<subjecName>" 
    
     Examples: 
       | subjectheading | subjecName |
       | Taal |  TaalEdited |
       
       
       