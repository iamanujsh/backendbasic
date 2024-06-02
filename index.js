import express from "express";
import "dotenv/config";

const app = express();

// const port = 3000;

const git_data = {
  repository: {
    name: "dummy-repo",
    owner: "dummy-user",
    url: "https://github.com/dummy-user/dummy-repo",
  },
  commits: [
    {
      commit_id: "a1b2c3d4",
      author: "dummy-user",
      date: "2024-01-01T12:00:00Z",
      message: "Initial commit",
      files_changed: ["README.md", "main.py"],
      insertions: 10,
      deletions: 0,
    },
    {
      commit_id: "b2c3d4e5",
      author: "dummy-contributor",
      date: "2024-01-02T14:30:00Z",
      message: "Added new feature",
      files_changed: ["feature.py"],
      insertions: 50,
      deletions: 5,
    },
    {
      commit_id: "c3d4e5f6",
      author: "dummy-user",
      date: "2024-01-03T16:45:00Z",
      message: "Fixed bug",
      files_changed: ["main.py"],
      insertions: 5,
      deletions: 3,
    },
  ],
  branches: [
    {
      name: "main",
      commit_id: "c3d4e5f6",
      last_commit_message: "Fixed bug",
    },
    {
      name: "feature-branch",
      commit_id: "b2c3d4e5",
      last_commit_message: "Added new feature",
    },
  ],
  pull_requests: [
    {
      pr_id: 1,
      title: "Add new feature",
      author: "dummy-contributor",
      status: "merged",
      merge_date: "2024-01-02T15:00:00Z",
      source_branch: "feature-branch",
      target_branch: "main",
    },
  ],
  issues: [
    {
      issue_id: 101,
      title: "Bug in main.py",
      author: "dummy-user",
      status: "closed",
      creation_date: "2024-01-01T10:00:00Z",
      close_date: "2024-01-03T17:00:00Z",
      comments: [
        {
          author: "dummy-user",
          date: "2024-01-01T12:30:00Z",
          message: "I found a bug in main.py",
        },
        {
          author: "dummy-contributor",
          date: "2024-01-02T13:00:00Z",
          message: "I'm working on a fix",
        },
      ],
    },
  ],
};

app.get("/", (req, res) => {
  res.send("Hello Baby  i am listing");
});

app.get("/twitter", (req, res) => {
  res.send("iamanujsh");
});

app.get("/login", (req, res) => {
  res.send("please Enter Your Email and password");
});

app.get("/signup", (req, res) => {
  res.send("Welcome to sign up page");
});

app.get("/chai", (req, res) => {
  res.send("<h1>wow tea</h1>");
});

app.get("/github", (req, res) => {
  res.json(git_data);
});

app.listen(process.env.PORT, () => {
  console.log("I am listing at port 300");
});
