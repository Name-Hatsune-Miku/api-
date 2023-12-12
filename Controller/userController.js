// var express = require('express')
const fs=require('fs')
const path=require('path')
let file=path.join(__dirname,'../data/data.json')
// const UserService = require("../routes/student")
// let app=express()

const list=(req,res)=>{
  res.json(readCarlist())
}
const readCarlist=()=>{
  let data=fs.readFileSync(file,'utf-8')
  return JSON.parse(data).list
}
/* const UserController = {
  addUser: (req, res, next) => {
    res.send({
      code:200,
      msg:'新增成功',98 99 100 101 102
      id:'003',
    })
    next()
  },
  delUser: (req, res, next) => {
     res.send({
      code:200,
      msg:'删除成功',
    })
    next()
  },
  putUser: (req, res, next) => {
    res.send({
      code:200,
      msg:'修改成功',
    })
  },
  getUser:async (req, res, next) => {
    res.send({
      code:200,
      msg:'获取成功',
      data:{
                idcard: '2',
                brand: '奔驰',
                model: 'C200',
                year: '2019',
                color: '黑色',
                thumbnail: 'https://img1.baidu.com/it/u=1054209633,2776264710&fm=26&fmt=auto&gp=0.jpg',
                createTime: '2021-04-01',
                updateTime: '2021-04-01',
                deleteTime: '2021-04-01'
            }
    })
    next()
  }
} */

const add=(req,res)=>{
  let params=req.body
  console.log(params);
  let data=fs.readFileSync(file,'utf-8')
  // data=JSON.parse('data')
  // data.unshift(fs.writeFileSync(file,JSON.stringify({list:data})))
  // let data=readCarlist()
  let dates= res.json(JSON.parse(writeData(data)))
  // let nwedata=JSON.parse(writeData(data))
  // console.log(dates);
  // let nw=json(nwedata)
  data.unshift(dates)
}
const writeData=(data)=>{
  fs.writeFileSync(file,JSON.stringify({list:data}))
}
const edit=(req,res)=>{
  let id=req.params.idcard
  let data=req.body
  console.log(id,data);
  let list=readCarlist()
  let index=list.findIndex((item)=>{
    item.idcard==id
  })
  if(index==-1){
    res.json({
      code:404,
      msg:'未找到数据'
    })
  }
  list[index]={
    ...list[index],
    ...data,
  }
  writeData(list)
}
const del=(req,res)=>{
  let data=fs.readFileSync(file,'utf-8')
  let dates= res.json(JSON.parse(writeData(data)))
  data.splice(dates)
}
module.exports={
  // UserController,
  list,
  add,
  edit,
  del,
}