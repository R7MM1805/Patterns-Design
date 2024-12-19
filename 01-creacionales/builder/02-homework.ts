//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

import { COLORS } from "../../helpers/colors.ts";

class Query{
    public table: string = 'Table is not defined';
    public fields: string[] = [];
    public condition: string[] = [];
    public orderBy: string[] = [];
    public limit?: number;

    showSelect(){
        const fields = this.fields.length > 0 ? this.fields.join(', ') : '*';
        const where = this.condition.length > 0 ? `Where ${this.condition.join(' AND ')}` : ' ';
        const order = this.orderBy.length > 0 ? `${this.orderBy.join(', ')}` : ' ';
        const limit = this.limit ? `LIMIT ${this.limit}` : '';
        console.log(`Query:
        SELECT ${fields} From ${this.table} ${where} ${order} ${limit}
        `);
    }
}

class QueryBuilder{
    private query: Query;

    constructor(){
        this.query = new Query();
    }

    setTable(table: string) {
        this.query.table = table;
        return this;
    }

    setSelect(...fields: string[]) {
        this.query.fields = fields;
        return this;
    }

    setWhere(condition: string){
        this.query.condition.push(condition);
        return this;
    }

    setOrderBy(order: string, direction: 'ASC' | 'DESC' = 'ASC'){
        this.query.orderBy.push(`order by ${order} ${direction}`);
        return this;
    }

    setLimit(limit: number){
        this.query.limit = limit;
        return this;
    }

    execute(){
        return this.query;
    }
}

function main(){
    const select_1 = new QueryBuilder()
    .setTable('user')
    .setSelect('id', 'name', 'lastname')
    .setWhere(`name like '%Rica%'`)
    .setWhere('age > 18')
    .setOrderBy('lastname', 'DESC')
    .setOrderBy('name', 'ASC')
    .setLimit(10)
    .execute();

    console.log('%cFirst Select:', COLORS.blue);
    select_1.showSelect();
}

main();