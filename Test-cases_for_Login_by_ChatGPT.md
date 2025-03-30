# Test Cases for WebDriver University Login Portal

## Test Case 1: Verify Login with Valid Credentials
**Test ID:** TC_001  
**Description:** Ensure that users can log in with valid credentials.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Enter a valid username.
3. Enter a valid password.
4. Click on the "Login" button.
**Expected Result:** The user is successfully logged in and redirected to the home page or a success message is displayed.

---

## Test Case 2: Verify Login with Invalid Credentials
**Test ID:** TC_002  
**Description:** Ensure that login fails when invalid credentials are used.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Enter an invalid username.
3. Enter an invalid password.
4. Click on the "Login" button.
**Expected Result:** An error message appears, stating that the login credentials are incorrect.

---

## Test Case 3: Verify Login with Blank Credentials
**Test ID:** TC_003  
**Description:** Ensure that login fails when username and password fields are left blank.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Leave the username and password fields blank.
3. Click on the "Login" button.
**Expected Result:** An error message appears indicating that both fields are required.

---

## Test Case 4: Verify Login with Only Username Entered
**Test ID:** TC_004  
**Description:** Ensure that login fails when only the username is entered.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Enter a valid username.
3. Leave the password field blank.
4. Click on the "Login" button.
**Expected Result:** An error message appears indicating that the password is required.

---

## Test Case 5: Verify Login with Only Password Entered
**Test ID:** TC_005  
**Description:** Ensure that login fails when only the password is entered.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Leave the username field blank.
3. Enter a valid password.
4. Click on the "Login" button.
**Expected Result:** An error message appears indicating that the username is required.

---

## Test Case 6: Verify Login Button Functionality
**Test ID:** TC_006  
**Description:** Ensure that the login button triggers the login process correctly.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Enter any credentials.
3. Click on the "Login" button.
**Expected Result:** The login request is processed, and an appropriate success or failure message is displayed.

---

## Test Case 7: Verify Error Message for Incorrect Credentials
**Test ID:** TC_007  
**Description:** Ensure that an appropriate error message appears for incorrect login attempts.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Enter an invalid username or password.
3. Click on the "Login" button.
**Expected Result:** A descriptive error message is displayed, informing the user of incorrect credentials.

---

## Test Case 8: Verify Page Title and URL
**Test ID:** TC_008  
**Description:** Ensure that the page title and URL are correct.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Check the page title.
3. Check the URL.
**Expected Result:** The page title should be "WebDriver | Login Portal" and the URL should match "https://www.webdriveruniversity.com/Login-Portal/index.html".

---

## Test Case 9: Verify Input Field Placeholders
**Test ID:** TC_009  
**Description:** Ensure that the input fields have appropriate placeholders.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Check the placeholder text in the username and password fields.
**Expected Result:** The username field should have a placeholder like "Username" and the password field should have "Password".

---

## Test Case 10: Verify Security of Password Field
**Test ID:** TC_010  
**Description:** Ensure that the password input field masks the entered characters.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal.
2. Enter any password in the password field.
**Expected Result:** The password characters should be hidden (masked) as dots or asterisks.

---

## Test Case 11: Verify Browser Compatibility
**Test ID:** TC_011  
**Description:** Ensure that the login portal functions correctly across different browsers.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal in Chrome, Firefox, Edge, and Safari.
2. Attempt to log in with valid and invalid credentials.
**Expected Result:** The login functionality and UI should remain consistent across browsers.

---

## Test Case 12: Verify Mobile Responsiveness
**Test ID:** TC_012  
**Description:** Ensure that the login portal is mobile-friendly.  
**Preconditions:** The login page is accessible.  
**Test Steps:**  
1. Open the login portal on a mobile device or use developer tools to simulate mobile view.
2. Check if the UI adapts correctly.
3. Attempt to log in.
**Expected Result:** The portal should be responsive and maintain functionality on mobile devices.

---

