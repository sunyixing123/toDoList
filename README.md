# toDoList
## Project Architecture
### VUE+node.js+mysql
## Directory structure
| file name | description |
| --- | --- |
| `/README.md ` |  |
| `/db.js` | Database parameter configuration module |
| `/index.html` | Front end page |
| `/package.json` | package dependency version management file |
| `/server.js` | Node.js service, providing API interface |
| `/tools.js` | Utils |
## Frontend
## Backend
## Database
### This project currently only uses one table
### table: tasks
field name | type | description
--- | --- | ---
id | INT | Unique identifier for the task
title | VARCHAR | Task Title
description | VARCHAR | Task Description
status | INT | Task status,0:incomplete,1:complete
update_time | VARCHAR | update_time


## Online address of webpage


## How to run locally
### 1、Please ensure that Node.js and MySQL are installed in your local computer environment. If not, please install them first
### 2、git clone project code or downloaded locally, open it  from the command console (windows: cmd, mac: Terminal), or directly using the vscode tool to open the project file directory.Execute the 'npm install' command in the current project directory command console,After the command is executed, if the 'node_modules' folder appears in the project root directory, it indicates successful execution.
### 3、Enter your MySQL database, create the local database 'task_demo', and create a table named 'tasks' using the following SQL:
```sql
CREATE TABLE tasks (
  id int(0) NOT NULL AUTO_INCREMENT,
  title varchar(255),
  description varchar(500),
  status int(0),
  update_time varchar(500) ,
  PRIMARY KEY (id)
)
```
### 4、Modify the project 'db.js' file, change the user and password of dbConfig to the username and password set by your MySQL, and then save the file
### 5、After ensuring that all four points are completed, execute 'node server.js' in the project root directory. If the console prompts "Database connection successful! The service is enabled on port 3001", it means that the interface service has been started. If not, please check the first four items.
### 6、Open the 'index.html' file with a browser (recommended Google) to start using the website.



