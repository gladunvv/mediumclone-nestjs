import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1634491951546 implements MigrationInterface {
  name = 'SeedDb1634491951546';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nest.js')`,
    );

    // password: 12345
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('vladislav', 'vlad@gmail.com', '$2b$10$LHgnUN/J.EMUFxLEly5KZuqOAGhqEFWlSO1ZFT0T/Dy3uN1p6FU.2')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article description', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article description', 'second article body', 'dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
