import router from "@adonisjs/core/services/router";
import LibrosController from "../../app/controller/LibrosController.ts";


const Libros= new LibrosController();
//libros 

router.get('/ObtenerLibros', Libros.obtenerLibros);
router.get('/obteneriniciales/:titulo', Libros.librosConPalabras);
router.get('/obtenerlibrosXanio/:anio',Libros.LibrosXanio);
router.get('/mostrarlibros/:id', Libros.mostrarLibro);
router.post('/crearlibros', Libros.crearLibros);
router.put('/actLibros/:id', Libros.actualizarlibros);
router.delete('/delete/:id', Libros.eliminarLibro);



// editoriales 

router.get('/obtenerEdit', Libros.listarEditoriales);
router.get('/inicialesEditoriales/:id', Libros.listarEditorialPorId);
router.post('/crearEdito', Libros.crearEditorial);
router.put('/actEdito/:id', Libros.actualizarEditorial);
router.delete('/deleteedito/:id',Libros.eliminarEditorial);
