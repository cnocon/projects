

# MongoDB 
## Getting Started
1.  start mongo db
`$ mongod`
2. start mongo driver
`$ mongo`

## Terminology 

## 3 main types of data:
A database houses your data
MongoDB is a server that can host many databases
* A collection is similar to tables
* A document is similar to a row

From driver shell, run db.version() to get the version.

MongoDB stores information in JSON. 
You know which db you're in currently, type `$ db` in shell.
`test` is the default database

to change your db, `use NEW `
(will create NEW if it doesn't already exist)

to create a 'chart' collectio n(which is like a table) and insert documents (like rows)

`$ db.chart.insert({name: 'Cristin'})`
`$ db.chart.find().pretty();`

MongoDB auto assigns unique iDs. But ONLY on items directly inserted into the collection. So if you do `db.chart.insert({name:'Cristin', skills: ['js','html','ruby']})` then the document looks like:

```json
{
  "_id" : ObjectId("59ff66afd793241f99f94ba0"),
  "name" : "Cristin",
  "skills" : [
    "js",
    "html",
    "ruby"
  ]
}
```
