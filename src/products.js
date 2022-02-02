
const mysql = require('mysql2');

// import credentials.js HERE

// const query = `SELECT * FROM Products`;

// connection.query(query, (err, results, fields) => {

//     if (err) {
//         console.log(err)
//     }

//     console.log(results)

// })

// connection.end() // closes connection

const getAllProducts = async () => {
    const query = `SELECT * FROM Products`;
    const [results, fields] = await connection.promise().query(query)

    // same as the line above:
    // const res = await connection.promise().query(query)
    // const err = res[0]
    // const results = res[1]
    // const fields = res[2]

    console.log(results);
    return results;

}

const createProduct = async (product) => {

    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.description}', '${product.sku}', ${product.userId})`

    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)

    return results

}

getAllProducts()

// createProduct({
//     description: "Peter new Product",
//     sku: "Peter1234",
//     userId: 1
// })

connection.end();
