

# MongoDB 
## Getting Started
1.  start mongo db
`$ mongod`
2. start mongo driver/shell
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

---

## Server steps from this section: 
From the mongo shell
1. `use ChartsDB`
2. `db.charts.insert( {   labels: ["Math", "English", "Spanish", "history", "Philosophy", "Sports", "Science"],   datasets: [     {       label: 'James',       backgroundColor: "rgba(179,181,198,0.2)",       borderColor: "rgba(179,181,198,1)",       pointBackgroundColor: "pink",       pointBorderColor: "white",       pointHoverBackgroundColor: "#efefef",       pointHoverBorderColor: "red",       data: [93,88,93,99,100,70,92]     },     {       label: 'Larry',       backgroundColor: "rgba(179,181,198,0.2)",       borderColor: "rgba(179,181,198,1)",       pointBackgroundColor: "pink",       pointBorderColor: "white",       pointHoverBackgroundColor: "#efefef",       pointHoverBorderColor: "red",       data: [63,98,23,79,80,70,12]     }   ] } )`
3. `db.charts.find()`
4. We copied the objectid and put it in server.js

---
## Steps from this section:
Goal is to setup and create NodeJS with Express and MongoJS to create a server.
NodeJS is server technology, Express is a lib that helps facilitate easy interactions with NodeJS server, and MongoJS enables us to communicate with MongoDB to fetch the information that we need.

Express helps us create interfaces for server more easily.
MongoJS is easiest driver for mongo
Main file is called `server.js` this time, not webpack.

1. run `npm install` to install packages from package.json (although I think I already did)
2. run `node server` to start node server at port 3001 (make sure you have your mongo server `mongod` running)
3. in browser, go to http://localhost:3001/chart.json to see that we have access to our chart object

