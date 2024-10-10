# toDoList
## Project Architecture
### VUE+node.js+mysql
## Directory structure
| 文件名 | 描述 |
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

## 安装和运行
