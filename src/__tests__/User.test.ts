import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("User", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able t create a new user", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@ecampl.com",
            name: "Nome Sobrenome"
        })
        expect(response.status).toBe(201);
    });

    it("Should be able t create user with exists email", async () => {
        const response = await request(app).post("/users")
        .send({
            email: "user@ecampl.com",
            name: "Nome Sobrenome"
        })
        expect(response.status).toBe(400);
    })

})