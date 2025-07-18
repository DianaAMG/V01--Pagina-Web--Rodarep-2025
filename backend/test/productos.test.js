const request = require("supertest");
const app = require("../server");

// Mocks opcionales si no quieres acceder a la base real
jest.mock('@prisma/client', () => {
  const mPrisma = {
    user_contact: {
      findMany: jest.fn().mockResolvedValue([
        { id: 1, name: "Diana", email: "diana@correo.com", phone: "12345", message: "Hola" }
      ]),
      create: jest.fn().mockResolvedValue({
        id: 2, name: "Test", email: "test@correo.com", phone: "98765", message: "Mensaje"
      })
    },
    bearing: {
      findMany: jest.fn().mockResolvedValue([
        { id: 1, d__internal: 10, d__external: 20, b__width: 5, code: "6201", type: "rodamiento" }
      ]),
      create: jest.fn().mockResolvedValue({
        id: 2, d__internal: 15, d__external: 25, b__width: 6, code: "6202", type: "rodamiento"
      })
    }
  };
  return { PrismaClient: jest.fn(() => mPrisma) };
});

describe("Rutas del backend", () => {
  test("GET /contactos debe retornar contactos", async () => {
    const res = await request(app).get("/contactos");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("name");
  });

  test("POST /creacion debe crear contacto", async () => {
    const res = await request(app).post("/creacion").send({
      name: "Diana",
      email: "diana@example.com",
      phone: "123456789",
      message: "Hola desde test"
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.contacto).toHaveProperty("name", "Test");
  });

  test("GET /bearing debe retornar rodamientos", async () => {
    const res = await request(app).get("/bearing");
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toHaveProperty("code");
  });

  test("POST /new_bearing debe crear rodamiento", async () => {
    const res = await request(app).post("/new_bearing").send({
      d__internal: 10,
      d__external: 20,
      b__width: 5,
      code: "6201",
      type: "simple"
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.rodamiento).toHaveProperty("code", "6202");
  });

});