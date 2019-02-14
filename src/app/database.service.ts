import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

 //para abrir ou criar um banco dados
  public getDB(){
  this.sqlite.create({
  name: 'produtoDB.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));


  })
  .catch(e => console.log(e));
  }

  private  createTables(db: SQLiteObject){
  	db.sqlBatch([
  		['CREATE TABLE IF NOT EXISTS categories(id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
  		['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, price REAL, duedata DATE, active integer, FOREIGN KEY(categories_id) REFERENCES categories(id))']

  		])
  	  .then(() => console.log('Tabelas Criadas'))
      .catch(e => console.error("Erro na criação das tabelas", e));
  }

  private  insertDefao


}
