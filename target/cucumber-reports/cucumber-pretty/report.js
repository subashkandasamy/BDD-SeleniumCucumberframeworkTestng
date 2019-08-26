$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ActivateSubject.feature");
formatter.feature({
  "line": 2,
  "name": "Activate Subject in Teacher Dashbord",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ActivateSubject"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Activate Subject",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord;activate-subject",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Login to application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on activate subject link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "select a Subject \"\u003csubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a subject group \"\u003csubjectGroup\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on activate subject button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the added subject \"\u003csubjecttitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord;activate-subject;",
  "rows": [
    {
      "cells": [
        "subject",
        "subjectGroup",
        "subjecttitle"
      ],
      "line": 16,
      "id": "activate-subject-in-teacher-dashbord;activate-subject;;1"
    },
    {
      "cells": [
        "Taal",
        "A. Staal Grammatica, gr 4",
        "Taal"
      ],
      "line": 17,
      "id": "activate-subject-in-teacher-dashbord;activate-subject;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20336805600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Activate Subject",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord;activate-subject;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ActivateSubject"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Login to application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on activate subject link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "select a Subject \"Taal\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select a subject group \"A. Staal Grammatica, gr 4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on activate subject button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the added subject \"Taal\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ActivateSubjectDefinition.login_to_application()"
});
formatter.result({
  "duration": 8238076100,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_activate_subject_link()"
});
formatter.result({
  "duration": 335549500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taal",
      "offset": 18
    }
  ],
  "location": "ActivateSubjectDefinition.select_a_Subject(String)"
});
formatter.result({
  "duration": 2729854500,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_next_button()"
});
formatter.result({
  "duration": 323003200,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_next_button()"
});
formatter.result({
  "duration": 468391300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A. Staal Grammatica, gr 4",
      "offset": 24
    }
  ],
  "location": "ActivateSubjectDefinition.select_a_subject_group(String)"
});
formatter.result({
  "duration": 374291800,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_activate_subject_button()"
});
formatter.result({
  "duration": 398632700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taal",
      "offset": 26
    }
  ],
  "location": "ActivateSubjectDefinition.verify_the_added_subject(String)"
});
formatter.result({
  "duration": 3457385300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 4023173100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Edit the Activated Subject",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord;edit-the-activated-subject",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@EditActivateSubject"
    },
    {
      "line": 24,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Login to application",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on edit button \"\u003csubjectheading\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "change the subject name \"\u003csubjecName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the added subject \"\u003csubjecName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord;edit-the-activated-subject;",
  "rows": [
    {
      "cells": [
        "subjectheading",
        "subjecName"
      ],
      "line": 33,
      "id": "activate-subject-in-teacher-dashbord;edit-the-activated-subject;;1"
    },
    {
      "cells": [
        "Taal",
        "TaalEdited"
      ],
      "line": 34,
      "id": "activate-subject-in-teacher-dashbord;edit-the-activated-subject;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18859696100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Edit the Activated Subject",
  "description": "",
  "id": "activate-subject-in-teacher-dashbord;edit-the-activated-subject;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ActivateSubject"
    },
    {
      "line": 24,
      "name": "@Regression"
    },
    {
      "line": 23,
      "name": "@EditActivateSubject"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Login to application",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on edit button \"Taal\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "change the subject name \"TaalEdited\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the added subject \"TaalEdited\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ActivateSubjectDefinition.login_to_application()"
});
formatter.result({
  "duration": 7867630600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taal",
      "offset": 22
    }
  ],
  "location": "ActivateSubjectDefinition.click_on_edit_button(String)"
});
formatter.result({
  "duration": 586745600,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003cstrong class\u003d\"elipsis-1-lines\"\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NLLR4000510436\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20190717172542, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 46820, moz:profile: C:\\Users\\C38039\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b5fb5e25-b987-4cf0-a9f6-ce33c39262a2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat pages.ActivateSubjectPage.clickonEditButton(ActivateSubjectPage.java:101)\r\n\tat stepDefinitions.ActivateSubjectDefinition.click_on_edit_button(ActivateSubjectDefinition.java:52)\r\n\tat ✽.And click on edit button \"Taal\"(ActivateSubject.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "TaalEdited",
      "offset": 25
    }
  ],
  "location": "ActivateSubjectDefinition.change_the_subject_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TaalEdited",
      "offset": 26
    }
  ],
  "location": "ActivateSubjectDefinition.verify_the_added_subject(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 4143620400,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to the teachers dashbord",
  "description": "",
  "id": "login-to-the-teachers-dashbord",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Enter the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the user name \"\u003cuserid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "userid"
      ],
      "line": 12,
      "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credential;;1"
    },
    {
      "cells": [
        "ChallengeTeacher3_1",
        "*8jdfD%^st1",
        "#Challenge3"
      ],
      "line": 13,
      "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18927308900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Enter the username \"ChallengeTeacher3_1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter the password \"*8jdfD%^st1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify the user name \"#Challenge3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ChallengeTeacher3_1",
      "offset": 20
    }
  ],
  "location": "LoginPageDefinition.enter_the_username(String)"
});
formatter.result({
  "duration": 122639500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*8jdfD%^st1",
      "offset": 20
    }
  ],
  "location": "LoginPageDefinition.enter_the_password(String)"
});
formatter.result({
  "duration": 102284300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 281685500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#Challenge3",
      "offset": 22
    }
  ],
  "location": "LoginPageDefinition.verify_the_user_name(String)"
});
formatter.result({
  "duration": 10147309400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 3939316500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Enter the username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 23,
      "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ChallengeTeacher3_1",
        "\" \"",
        "This field is required."
      ],
      "line": 24,
      "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "\" \"",
        "*8jdf%^st1",
        "This field is required."
      ],
      "line": 25,
      "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;3"
    },
    {
      "cells": [
        "ChallengeTeacher3_1",
        "*8jdf%^st1",
        "Invalid Username or Password"
      ],
      "line": 26,
      "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18456114400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Enter the username \"ChallengeTeacher3_1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the password \"\" \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the error message \"This field is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ChallengeTeacher3_1",
      "offset": 20
    }
  ],
  "location": "LoginPageDefinition.enter_the_username(String)"
});
formatter.result({
  "duration": 105285300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginPageDefinition.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required.",
      "offset": 26
    }
  ],
  "location": "LoginPageDefinition.verify_the_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 3681228800,
  "status": "passed"
});
formatter.before({
  "duration": 18376897500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Enter the username \"\" \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the password \"*8jdf%^st1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the error message \"This field is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "*8jdf%^st1",
      "offset": 20
    }
  ],
  "location": "LoginPageDefinition.enter_the_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageDefinition.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required.",
      "offset": 26
    }
  ],
  "location": "LoginPageDefinition.verify_the_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 3675454900,
  "status": "passed"
});
formatter.before({
  "duration": 18917177100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "login-to-the-teachers-dashbord;sign-in-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Enter the username \"ChallengeTeacher3_1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Enter the password \"*8jdf%^st1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the error message \"Invalid Username or Password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ChallengeTeacher3_1",
      "offset": 20
    }
  ],
  "location": "LoginPageDefinition.enter_the_username(String)"
});
formatter.result({
  "duration": 127408200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*8jdf%^st1",
      "offset": 20
    }
  ],
  "location": "LoginPageDefinition.enter_the_password(String)"
});
formatter.result({
  "duration": 96964800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 283149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username or Password",
      "offset": 26
    }
  ],
  "location": "LoginPageDefinition.verify_the_error_message(String)"
});
formatter.result({
  "duration": 83550900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 3725489300,
  "status": "passed"
});
});