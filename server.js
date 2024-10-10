//This is a node service used to provide backend interfaces

const mysql = require("mysql"); // 引入mysql模块
const express = require("express"); //引入express模块
const app = express(); //创建app实例对象
const tools = require('./tools');
const db = require('./db');

// node的app.js
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//node解决跨域问题（app文件）
app.all("*",(req,res,next)=>{
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  res.header("Access-Control-Allow-Headers","X-Requested-With,accept,origin,content-type,Authorization");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  res.header("Content-Type","application/json;charset=utf-8");
 
  if (req.method.toLowerCase() == 'options')
      res.sendStatus(200);  //让options尝试请求快速结束
  else
      next();
})

const connection = mysql.createConnection(db.dbConfig);






//getTaskList
app.get('/getTaskList',(req,res) => {
    const status = req.query.status;
    console.log(status);
    let sqlStr ="select * from tasks order by update_time desc";
    if(status==0 || status==1){
      sqlStr = "select * from tasks  where  status="+status +"  order by update_time desc";
    }
    console.log(sqlStr);
    connection.query(sqlStr,(err,result) => {
      if (err) {
        return res.status(500).send("fail");
      } else {
        res.status(200).json({message:'success',data:result})
      }
    })
  })

  //getTaskById
  app.get('/getTaskById/:id',(req,res) => {
    const id = req.params.id;
    const sqlStr = "select * from tasks where id=?  order by update_time desc";
    connection.query(sqlStr,[id],(err,result) => {
      if (err) {
        return res.status(500).send("fail");
      } else {
        res.status(200).json({message:'success',data:result})
      }
    })
  })

//addTask
app.post('/addTask', (req, res) => {
  console.log(req.body);
    const title = req.body.title;
    const description = req.body.description;
    const sqlStr = "INSERT INTO tasks(title, description,status,update_time) VALUES (?,?,?,?)";
    console.log(123,tools.getCurrentTime());
    connection.query(sqlStr,[title,description,0,tools.getCurrentTime()], (err, result) => {
      if (err) {
        return res.status(500).send("fail");
      } else {
        res.status(200).json({message:'success',data:{}})
      }
    });
});

// updateTask
app.post("/updateTask", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const sqlStr = "update tasks set title = ?, description = ?, update_time = ? where id = ?";
    connection.query(sqlStr, [title, description,tools.getCurrentTime(), id], (err, result) => {
      if (err) {
        return res.status(500).send("fail");
      }else{
        res.status(200).json({message:'success',data:{}})
      }
    });
  });

  //deleteTask
  app.get("/deleteTask/:id", (req, res) => {
    const id = req.params.id;
    const sqlStr = "delete from tasks where id = ?";
    connection.query(sqlStr, [id], (err, result) => {
      if (err) {
        return res.status(500).send("fail");
      }else{
        res.status(200).json({message:'success',data:{}})
      }
    });
  });

  //finnishTask
  app.get("/finnishTask/:id", (req, res) => {
    const id = req.params.id;
    const sqlStr = "update tasks set status = 1  where id = ?";
    connection.query(sqlStr, [id], (err, result) => {
      if (err) {
        return res.status(500).send("fail");
      }else{
        res.status(200).json({message:'success',data:{}})
      }
    });
  });



//db
connection.connect((err) => {
  if (err) {
    console.log("Database connection failed, reason：", err);
  } else {
    console.log("Database connection successful！");
    app.listen(3001, () => {
      console.log("The service is enabled on port 3001");
    });
  }
});




