import pgDatabase from "../db/pgDatabase.ts";


export default class LibrosController{
// libros
async obtenerLibros({request,response}){
//select * from Libros
        const resul=await pgDatabase.query('select * from Libros')
        console.log(resul.rows)
        return response.json({MENSAJE: resul.rows})

 }

async crearLibros({ request, response }) {
    const { titulo, autor, anio_publicacion, editorial_id } = request.body();

    if (
        
        !titulo || typeof titulo !== "string" || titulo.length === 0 ||
        !autor || typeof autor !== "string" || autor.length === 0 ||
        !anio_publicacion || typeof anio_publicacion !== "number" || anio_publicacion.toString().length !== 4|| 
        !editorial_id || isNaN(editorial_id)
    ) {
        return response.status(400).json({ mensaje: "Datos inválidos o incompletos" });
    }

    try {
        const resul = await pgDatabase.query(
            `INSERT INTO libros (titulo, autor, anio_publicacion, editorial_id) VALUES ($1, $2, $3, $4)`,
            [titulo, autor, anio_publicacion, editorial_id]
        );

        if (resul.rowCount> 0) {
            return response.status(201).json({ mensaje: "Libro creado exitosamente" });
        } else {
            return response.status(500).json({ mensaje: "Error al crear el libro" });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).json({ mensaje: "Error en la base de datos" });
    }
}

async mostrarLibro({params, request,response}){
    //select*from libros where id =7;
    const id =params.id
    const resull=await pgDatabase.query('select * from Libros WHERE id= $1',[id])
    return resull.rows[0] || {mensaje: 'Producto no encontrado'}    
 }

async actualizarlibros ({params,request,response}){
    const id=params.id
    const {titulo,autor,anio_publicacion,editorial_id}=request.body()
    await pgDatabase.query('UPDATE libros SET titulo=$1, autor=$2, anio_publicacion=$3, editorial_id=$4 WHERE id =$5', [titulo,autor,anio_publicacion,editorial_id,id])
    return { mensaje: 'Prducto actualizado correctamente' }
}

async eliminarLibro({params,request,response}){
    //DELETE FROM libros WHERE id_libros=10;
    const id=params.id
    await pgDatabase.query('DELETE FROM libros WHERE id= $1',[id])
    return { mensaje:'Libro eliminado' }
 }

 async librosConPalabras({params,request,response}){
    //select*from libros where titulo like 'el%'
    const titulo=params=params.titulo;
    const resul=await pgDatabase.query('select * from libros where titulo like $1', [`%${titulo}%`]);
    console.log(resul)
    return response.json({mensaje:resul.rows})
}

async LibrosXanio({ params, response }) {
    //select*from libros where anio_publicacion='2020'
  const anio = parseInt(params.anio);

  if (isNaN(anio)) {
    return response.status(400).json({ error: 'Año no válido' });
  }

  const resul = await pgDatabase.query(
    'SELECT * FROM libros WHERE anio_publicacion = $1',
    [anio]
  );

  return response.json({ mensaje: resul.rows });
}

// editoriales 


async listarEditoriales({ response }) {
    const result = await pgDatabase.query("SELECT * FROM editoriales");
    if (result.rows.length > 0) {
      return response.status(200).json({ mensaje: result.rows });
    } else {
      return response.status(404).json({ mensaje: "No hay editoriales" });
    }
  }

async listarEditorialPorId({ params, response }) {
    const result = await pgDatabase.query("SELECT * FROM editoriales WHERE id = $1", [params.id]);
    if (result.rows.length > 0) {
      return response.status(200).json({ mensaje: result.rows });
    } else {
      return response.status(404).json({ mensaje: "Editorial no encontrada" });
    }
  }

async crearEditorial({ request, response }) {
    const { nombre, pais } = await request.body();
    const res = await pgDatabase.query("INSERT INTO editoriales (nombre, pais) VALUES ($1, $2)", [nombre, pais]);
    if (res) {
      return response.status(200).json({ mensaje: "Editorial creada con éxito" });
    } else {
      return response.status(400).json({ mensaje: "Error al crear la editorial" });
    }
  }

async actualizarEditorial({ params, request, response }) {
    const { nombre, pais } = await request.body();
    const res = await pgDatabase.query(
      "UPDATE editoriales SET nombre=$1, pais=$2 WHERE id=$3",[nombre, pais, params.id]
    );
    if (res) {
      return response.status(200).json({ mensaje: "Editorial actualizada con éxito" });
    } else {
      return response.status(404).json({ mensaje: "Editorial no encontrada" })
    }
  }

async eliminarEditorial({ params,request, response }) {
    const res = await pgDatabase.query("DELETE FROM editoriales WHERE id=$1", [params.id]);
    if (res) {
      return response.status(200).json({ mensaje: "Editorial eliminada con éxito" });
    } else {
      return response.status(404).json({ mensaje: "Editorial no encontrada" })
    }
  }

 async listarLibrosPorEditorial({ params, response }) {
    const result = await pgDatabase.query("SELECT * FROM libros WHERE editorial_id = $1",[params.id])
    if (result.rows.length > 0) {
      return response.status(200).json({ mensaje: result.rows });
    } else {
      return response.status(404).json({ mensaje: "No hay libros para esta editorial" });
    }
  }


}