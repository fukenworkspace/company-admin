### Development
### 删除远程连接
git remote rm origin
```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

#### 数据库查询语句
```javascript
// 本地用sql语句查询
1、查询所有数据
const DataTableName = require('../../config/dbname')
this.app.mysql.select(DataTableName.USER_TABLE)

2、条件查询
this.app.mysql.selert(DateTableName.USER_TABLE, {
  where: {id: 2}
})；

this.app.mysql.get(DateTableName.USER_TABLE, {
  where: {id: 2}
})

3、分页查询并排序（先条件查询在分页排序）
this.app.mysql.select(dataTableName.USER_TABLE, {
  where: { id: 2 },
  columns: ['author', 'title'], // 要查询的表字段
  orders: [['cTime', 'desc'], [......]], // 排序方式
  limit: 10, // 返回数据量
  offset: 0, // 数据偏移量
})

4、删除数据
this.app.mysql.delete(dataTableName.USER_TABLE, { id })


5、增加数据
this.app.mysql.insert(dataTableName.USER_TABLE,{username:"lisi",password:"1234"}) // body

6、更新数据
let result = await this.app.mysql.update(dataTableName.USER_TABLE,{ id:2, username:'赵四' });
//修改数据的第二种方式：通过 sql 来修改数据
let results=await this.app.mysql.query('update user set username = ? where id = ?',["王五",2]);

7、模糊查询
async query( auth ) {
        const TABLE_NAME = 'auth';
        const QUERY_STR = 'id, authName, authValue, createTime, updateTime';
        let sql = `select ${QUERY_STR} from ${TABLE_NAME} where authName like "%${auth.authName}%"`;
        const row = await this.app.mysql.query(sql);
        return row;
    }
8、连表查询

(1)关联表查询（查询评价表，关联用户表头像和昵称）
select evaluate.*, user.name, user.figureurl from evaluate 
left join user on evaluate.userId = user.id where cId = 123
```