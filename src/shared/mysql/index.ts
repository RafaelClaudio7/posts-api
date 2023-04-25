import mysql from "mysql";

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: "",
  user: "root",
  password: "",
  database: "projetos_pessoais",
});
