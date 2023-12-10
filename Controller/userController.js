const UserService = require("../routes/student")
const UserController = {
  addUser: (req, res, next) => {
    res.send({
      code:200,
      msg:'新增成功',
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
}
 
module.exports=UserController