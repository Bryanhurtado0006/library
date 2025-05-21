import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
interface Editorial{id:number; nombre:string; pais:string }


const ListarEditorial:React.FC=()=>{
    const naviagte=useNavigate
    const [editoriales,setEditoriales]=useState<Editorial[]>([])
    useEffect(()=>{
        listar()
    },[editoriales])

    
    const listar= async()=>{
       const resp=await fetch('http://localhost:3333/obtenerEdit')
       const datos=await resp.json()
       console.log(datos)
        console.log(resp)
        setEditoriales(datos.mensaje)
    }
    useEffect(()=>{
            listar()
    },[editoriales])
    const eliminar=async(id:number)=>{
        
        console.log(id)
       const resonse =await fetch(`http://localhost:3333/deleteedito/${id}`,{
        method:'DELETE'
       })
       const msje =await resonse.json()
        console.log(msje)
    }
    const llevar=(id:number)=>{
        naviagte('/EditarEditorial',{state:id})
    }
    useEffect(()=>{
        listar()

    },[editoriales])
    
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>nombre </th>
                            <th>pais</th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        editoriales.map((index)=>(
                            <tr>
                                <td>{index.id}</td>
                                <td>{index.nombre}</td>
                                <td>{index.pais}</td>
                                <td><button onClick={()=>eliminar(index.id)}>Eliminar</button></td>
                                <button onClick={()=>llevar}>Actualizar</button>
                                </tr>
                            ))
                            
                            }
                    </tbody>
                </table>  
            </div>

        )
}

export default ListarEditorial;