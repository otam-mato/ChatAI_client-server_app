# Client-Server-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma


## Re-engineering the app to use client-server architecture for the improved security and scalability

<img width="1000" alt="Screenshot 2024-02-02 at 23 12 44" src="https://github.com/fac30/Client-Server-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma/assets/113034133/28a1ecc2-4b00-49f1-9346-8bc2f1ea283a">
<img width="1000" alt="Screenshot 2024-02-02 at 19 32 38" src="https://github.com/fac30/Client-Server-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma/assets/113034133/a788a7c5-b3e5-4ff4-9433-7fe5ae21ec24">
<img width="1000" alt="Screenshot 2024-02-02 at 19 30 43" src="https://github.com/fac30/Client-Server-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma/assets/113034133/498d2c09-9e41-4201-a11f-714b6dee5be5">

<br><br>

Re-engineering the app initially developed as a front-end-only solution available here: https://github.com/fac30/Front-end-ChatGPT-clone-workshop--Oleg-Jack-Elena-Emma.git

This project entails migrating key functionalities, such as API key storage, handling HTTP requests, and interfacing with the API, to a backend powered by Node.js. The shift aims to enhance security, efficiency, and overall system architecture.

<br>

---

<br>

## Here's an overview of the **Node.js** script:

1. **Dependencies**: It uses several Node.js packages, including `dotenv` for managing environment variables, `express` for creating the server, `body-parser` for parsing request bodies, `node-fetch` for making HTTP requests, and `cors` to enable Cross-Origin Resource Sharing.

2. **Configuration**: The server loads environment variables from a `.env` file using `dotenv`. It sets up an Express app, uses `body-parser` and `cors`, and serves static files from the 'public' directory.

3. **API Key and Question History**: It retrieves the OpenAI API key from the environment variables and initializes `questionHistory` as an empty array.

4. **Endpoint `/api/chat`**: Listens for POST requests on the '/api/chat' endpoint. It expects a JSON payload containing a `conversation` property, which is an array of messages. The server then makes a request to the OpenAI GPT-3.5 API with the provided conversation and logs the request and response data.

5. **Handling OpenAI API Response**: If the API request is successful, it extracts the answer from the response and includes the `questionHistory` in the server response. If the API request fails, it logs an error and sends a 500 Internal Server Error response.

6. **Server Start**: Finally, the server listens on the specified port, and a message is logged indicating the server is running.

<br>

---

<br>

## Here's a summary of how client-side interaction of the site works:

1. **Client-Side (`index.html` and embedded JavaScript)**:
   - The user interacts with the chat interface in the browser.
   - The client-side JavaScript code maintains a local variable `questionHistory` to keep track of the conversation history within the user's browser.
   - When a user submits a question through the form, the client-side code sends this question, along with the current `questionHistory`, to the server for processing.

2. **Server-Side (`server.js`)**:
   - The server (server.js) starts with Express.
   - It loads environment variables from the .env file using dotenv.
   - API Key Extraction (openaiApiKey):
   - The server extracts the OpenAI API key from the process environment variables using process.env.OPENAI_API_KEY.
   - The server receives incoming requests to the `/api/chat` endpoint.
   - It extracts the conversation history (`conversation` array) from the request body.
   - The server makes a call to the OpenAI GPT-3.5 API using the provided conversation history.
   - The OpenAI API generates a response, and the server processes this response.
   - The server may log information, handle errors, and then constructs a response containing the answer from the OpenAI API and the `questionHistory`.

4. **Client-Side (Response Handling)**:
   - The client-side JavaScript code receives the response from the server.
   - It updates the `questionHistory` variable on the client side with the new question and answer from the user and OpenAI API.
   - It updates the displayed conversation history on the webpage.

The `questionHistory` on the client side is primarily used for maintaining context, providing a better user experience, and persisting the conversation across page reloads. It's not directly used on the server side for processing requests but is included in the request payload to provide context to the OpenAI GPT-3.5 API. The server then sends the updated `questionHistory` back to the client in the response.

<br>

---

<br>

## To launch the app:

```
npm init -y
npm install express body-parser node-fetch@2.6.11 cors dotenv
node server.js
```

<br>

---

<br>

## Using ESLint to check JavaScript code for potential errors and enforce a coding style. The steps:

1. **Install ESLint:**
   Open your terminal and run the following command to install ESLint globally on your machine:

   ```bash
   npm install -g eslint
   ```

2. **Create ESLint Configuration File:**
   In your project's root directory, create an ESLint configuration file. You can create it manually or use the following command to generate a configuration file:

   ```bash
   npx eslint --init
   ```

   Follow the prompts to configure ESLint according to your preferences. This will generate a `.eslintrc.js` file.

3. **Install ESLint Plugins (if needed):**
   Depending on your project and the features you want ESLint to check, you might need to install additional ESLint plugins. For example, if you're using ESLint with Node.js and browser code, you might want to install the following plugins:

   ```bash
   npm install eslint-plugin-node eslint-plugin-browser --save-dev
   ```

   Add these plugins to your `.eslintrc.js` file if needed.

4. **Run ESLint:**
   Once ESLint is configured, you can run it on your project by executing the following command in your terminal:

   ```bash
   eslint path/to/your/files
   ```

   Replace `path/to/your/files` with the actual path or file names you want ESLint to check. For example, you can run it on all JavaScript files in your project:

   ```bash
   eslint .
   ```

   ESLint will output any errors or warnings it finds in your code.

5. **Automate ESLint with NPM Scripts:**
   You can add ESLint as a script in your `package.json` file to make it easy to run. Add the following lines to your `package.json`:

   ```json
   "scripts": {
     "lint": "eslint ."
   }
   ```

   Now you can run ESLint by executing:

   ```bash
   npm run lint
   ```

   This will run ESLint on your entire project.

By following these steps, you can integrate ESLint into your project and use it to check and enforce coding standards in your JavaScript code. 
