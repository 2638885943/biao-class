# article

## 列出文章 `/api/article/list`

### 请求参数

- 可为空，默认返回最近10条文章

| 键 | 值 | 说明 |
|:------|:------|------:|
|`page`|`integer`|第几页|
|`limit`|`integer`|每页几条,<=30
|`star`|`boo;ean`|优质文章|

#### 响应成功示例

`/api/article/list？limit=15`
```
{
"ok":true,
"data":{
    "des":"...."，
    "content":"YO，我叫王花花",
   "view_count":10
}
}