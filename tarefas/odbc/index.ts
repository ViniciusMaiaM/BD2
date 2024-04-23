import { Pool } from "pg";

async function main() {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
  });

  const client = await pool.connect();

  // Insert new activity
  await client.query(
    `INSERT INTO atividade (descricao, projeto, data_inicio, data_fim) VALUES ('Nova Atividade', 1, '2024-04-12', '2024-05-12')`
  );

  // Update project leader
  await client.query(`UPDATE projeto SET responsavel = 3 WHERE codigo = 1`);

  // List all projects and their activities
  const result = await client.query(
    `SELECT p.nome AS projeto, a.descricao AS atividade FROM projeto p INNER JOIN atividade a ON p.codigo = a.projeto`
  );

  console.log("Projetos e suas atividades:");
  result.rows.forEach((row: any) => {
    console.log(`Projeto: ${row.projeto}, Atividade: ${row.atividade}`);
  });

  client.release();
}

main().catch(console.error);
