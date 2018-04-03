var express = require('express');

var bodyParser = require('body-parser')
var app = express();

var sql = require("mssql");

// config for your database
var connectString = require('./models/config')
// connect to your database
var results = [];

import { getAllProject, updateProject, addProject, deleteProject, searchProject } from "./services/project"

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

sql.connect(connectString.config, function (err) {

    if (err) console.log(err);
    console.log("Connected database");
    startApp();
    // // query to the database and get the records
    // request.query('select * from Project', function (err, recordset) {

    //     if (err) console.log(err)

    //     // send records as a response
    //     res.send(recordset);
    //     console.log(recordset);

    // });
});

// Our handler function is passed a request and response object
app.get('/', function (req, res) {
    getAllProject(sql).then(results => {
        res.send(results);
    });
});

app.use(bodyParser.json({ type: 'application/json' }));
var projectRouter = express.Router();


projectRouter.get('', function (req, res) {
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    request.query('select * from Project', function (err, recordset) {
        if (err) console.log(err)
        recordset.totalElements = recordset.recordset.length //total record;          
        var page = parseInt(req.query['page']);
        var pagesize = parseInt(req.query['pagesize']);
        if (req.query['page'] && req.query['pagesize']) {
            recordset.recordset = recordset.recordset.slice((page) * pagesize, (page + 1) * pagesize);
        }
        if (err) console.log(err)
        return res.json(recordset)
    });

});

projectRouter.get('/:id', function (req, res) {

    const request = new sql.Request();
    request.input('id', sql.Int, req.params.id).query('select * from Project  where id = @id').then(results => {
        // console.log(results)
        if (results.recordset.length > 0)
            res.project = results.recordset[0];
        res.json(res.project);
    },
        err => {
            res.send({ error: "Can't query" });
        })

});
// Update Project with parameter name, imageUrl
projectRouter.post('/:id', function (req, res) {
    if (req.params.id)
        updateProject(sql, req.params.id, req.body).then(results => {
            res.json(results);
        })
});
// Insert Project into database
projectRouter.put('/add', function (req, res) {
    console.log('----project add start  --------')
    console.log(req.body);
    console.log('----project add end --------')
    addProject(sql, req.body).then(results => {
        res.json(results);
    })
});

// Delete Project from Database
projectRouter.delete('/delete/:id', function (req, res) {
    console.log('----project delete start  --------')
    console.log(req.id);
    console.log('----project delete end --------')
    if (req.params.id)
        deleteProject(sql, req.params.id).then(results => {
            res.json(results);
        })
})
// Search Project from Database
projectRouter.get('/search/:term', function (req, res) {
    console.log('----project search start  --------')
    console.log(req.params.term);
    console.log('----project search end --------')
    if (req.params.term)
        searchProject(sql, req.params.term).then(results => {
            res.json(results);
            console.log(results)
        });
})

// Attach the routers for their respective paths
app.use('/projects', projectRouter);

// Start listening for HTTP requests
const startApp = () => {
    var server = app.listen(3000, function () {
        // var host = server.address().address;
        // var port = server.address().port;
        console.log('Example app listening at http://localhost:3000');
    });
}