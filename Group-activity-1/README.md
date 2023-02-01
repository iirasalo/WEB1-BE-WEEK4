## Tasks

> Work in group to solve these tasks.

## Task 1/3: Review

> Refer to the instruction in [GitHub Workflow](../github.md)

- Clone today's repo
- Create a new branch e.g answers
- Create a repository in GitHub
- Change remote to point to your repo
- make some changes and push to GitHub

## Task 2/3: Review

- Test the code in `./src/index.js`. follow these steps
  - `npm init -y`
  - `npm install express`
  - Add at least two scripts to `package.json` e.g start
- Test the endpoints with **POSTMAN**
- Document the results
  --> If endpoint unkown: "{
    "error": "unknown endpoint"
}"
  --> POSTMAN at root: Hello world!
  --> POSTMAN at /api/notes: {
        "id": 1,
        "content": "HTML is easy",
        "date": "2022-01-10T17:30:31.098Z",
        "important": true
    },
    {
        "id": 2,
        "content": "Browser can execute only Javascript",
        "date": "2022-01-10T18:39:34.091Z",
        "important": false
    },
    {
        "id": 3,
        "content": "GET and POST are the most important methods of HTTP protocol",
        "date": "2022-01-10T19:20:14.298Z",
        "important": true
    }
]
  ( Same: --> Browser at root: Hello World!
  --> Vrowser at /api/notes: [{"id":1,"content":"HTML is easy","date":"2022-01-10T17:30:31.098Z","important":true},{"id":2,"content":"Browser can execute only Javascript","date":"2022-01-10T18:39:34.091Z","important":false},{"id":3,"content":"GET and POST are the most important methods of HTTP protocol","date":"2022-01-10T19:20:14.298Z","important":true}]

## Task 3/3: Open feedback

- What problems did you face? - No problems
- What went well in this exercise - All ok.
- Other comments? - Simple exercise. Good for repeating very basic but essential things learned previously.
