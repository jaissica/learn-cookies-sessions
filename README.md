# Cookies and Sessions

## Cookies

Run `npm install`.

1. Run the cookies/insecure.js using Node. Load localhost:8000/home in your browser.
2. Navigate to localhost:8000/start?id=stacy. You should see the cookies being set in the browser's console.
3. Navigate to localhost:8000/home. You should see a different message from 1.
4. Run the cookies/mal.js using Node and load localhost:8001/malhome in your browser in a different tab.
5. Navigate to localhost:8000/home. You should see the same message as 1. Not the cookie value.

Why did this happen? Repeat the experiment with cookies/secure.js and see if the same thing happens.
# If we change the httpOnly: true then ever after running mal.js the localhost:8000/home does not change.

## Sessions

Run `npm install`

1. Run the session/insecure.js using Node. Load localhost:8000/ in your browser.
2. Enter name and click submit. You will see a session being created and stored in a cookie. See the console.
3. Run the session/mal.js using Node. Load localhost:8001/malhome in your browser. Will the session ID be displayed in the console?
4. Explore the code in sessions/insecure.js. Identify all potential vulnerabilities.

## Static Analysis

1. Setup CodeQL for this repository and inspect the report.
2. [CSRF tokens](https://www.npmjs.com/package/lusca).