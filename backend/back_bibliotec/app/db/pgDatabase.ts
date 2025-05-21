import {Client} from 'pg'

const pgDatabase=new Client({
    host:'localhost',
    port:5433,
    user:'postgres',
    password:'root',
    database:'libraryy'
})

pgDatabase.connect()
export default pgDatabase; 