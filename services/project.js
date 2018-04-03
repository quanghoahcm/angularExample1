
// const getAllProject = (sql) => {
//     return new Promise((res, rej) => {
//         var request = new sql.Request();
//         request.query('select * from Project', function (err, recordset) {
//             if (err) {
//                 console.log(err);
//                 rej(err);
//             }
//             res(recordset)
//         });
//     })
// }

const getAllProject = async (sql) => {
     var request = new sql.Request();
     await request.query('select * from Project', function (err, recordset) {
        if (err) {
            console.log(err);
            return err;
        }
        return recordset
    }); 
}

const updateProject = (sql, id, project) => {
    return new Promise((res, rej) => {
        var request = new sql.Request();
        request
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, project.name)
            .input('imageUrl', sql.NVarChar, project.imageUrl)
            .query('UPDATE Project SET name = @name, imageUrl =@imageUrl  WHERE id = @id')
            .then(recordset => {
                res({ msg: "Update " + recordset.rowsAffected + " projects" })
            },
            err => {
                console.log(err);
                rej(err);
            }
            )
    });
}
const addProject = (sql, project) => {
    return new Promise((res, rej) => {
        const request = new sql.Request();     
        request.input('name', sql.NVarChar, project.name)
            .input('imageUrl', sql.NVarChar, project.imageUrl)
            .query('INSERT INTO [Project] (name,imageUrl) VALUES (@name, @imageUrl)')
            .then(recordset => {
                res({
                    msg: "Insert " + recordset.rowsAffected + "project"
                },
                err=> {
                    console.log(err);
                    rej(err);
                })
            })
        
    });
}
const deleteProject =(sql,id)=>{
    return new Promise((res,rej)=>{
        const request = new sql.Request();
        request.input('id',sql.NVarChar,id)
               .query('DELETE  FROM [Project] WHERE id = @id').then(
                   res( {
                       msg:"Delete successful " + 'project id:'+ id 
                   },err=>{
                       rej(rej);
                   }
                )
               )
    })
}
const searchProject =(sql,term)=>{
    return new Promise((res,rej)=>{
        const request = new sql.Request();
        console.log(term)
        request.input('term',sql.NVarChar,term)
               .query("SELECT * FROM [Project] WHERE name LIKE @term",function(err,recordset){
                    if(err){
                        console.log(err);
                        rej(err)
                    }                
                    res(recordset)
               })               
    })
}

module.exports = { getAllProject, updateProject, addProject, deleteProject, searchProject }
