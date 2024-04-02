import connection from "../config/connectDB";

let getHomepage = (reg, res) => {
    /*logic*/
    let data = [];
    //simple query
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
            console.log('>>>check mysql')
            console.log(results);
            results.map((row) => {
                data.push({
                    ID: row.ID,
                    Email: row.Email,
                    Address: row.Address,
                    LastName: row.LastName,
                    FirstName: row.FirstName
            })
        });

            return res.render('index.ejs', {dataUser: data, test: 'abc string test'})
        }
    );
    console.log('>>>check data: ',typeof (data), data)

    
}

module.exports = {
    getHomepage
}