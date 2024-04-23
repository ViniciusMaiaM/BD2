-- CreateTable
CREATE TABLE "Atividade" (
    "codigo" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "projeto" INTEGER NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "responsavel" INTEGER NOT NULL,
    "depto" INTEGER NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_projeto_fkey" FOREIGN KEY ("projeto") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
