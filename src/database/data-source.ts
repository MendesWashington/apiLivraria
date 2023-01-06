import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'Alex',
    password: '{@l3x}',
    database: 'api_livraria',
    port: 3306,
    logging: true,
    synchronize: true,
    entities: ["../entities/*.ts"],
})
