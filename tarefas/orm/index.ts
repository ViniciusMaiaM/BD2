import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    const projeto = await prisma.projeto.create({
      data: {
        nome: "Projeto 1",
        descricao: "Descrição do projeto 1",
        responsavel: 1,
        depto: 1,
      },
    })
    const novaAtividade = await prisma.atividade.create({
      data: {
        descricao: "Nova Atividade",
        projeto_id: {
          connect: { id: 1 },
        },
        data_inicio: new Date("2024-04-12"),
        data_fim: new Date("2024-05-12"),
      },
    });
    console.log("Atividade inserida:", novaAtividade);

    const projetoAtualizado = await prisma.projeto.update({
      where: { id: 1 },
      data: {
        responsavel: 3,
      },
    });
    console.log("Projeto atualizado:", projetoAtualizado);

    const projetosComAtividades = await prisma.projeto.findMany({
      include: { atividades: true },
    });
    console.log("Projetos e suas atividades:", projetosComAtividades);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
  await prisma.$disconnect();
}

main();
