import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddTableUsers1720263036988 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "username",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
