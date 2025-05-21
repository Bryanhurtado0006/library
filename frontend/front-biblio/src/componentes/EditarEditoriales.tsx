import { useEffect, useState } from "react"
import { useNavigate,useLocation } from "react-router-dom"


const EditarEditoriales=()=>{
    const navigate=useNavigate()
    const location=useLocation()
    const [id,setId]=useState<number>(0)
    const [nombre,setNombre]=useState<string>('')
    const [pais,setPais]=useState<string>('')
    const {ids}=location.state as {ids:string}
    useEffect(()=>{
        traereditorial()

    },[])
    const traereditorial=async()=>{
        const respuesta = await fetch(`http://localhost:3333/inicialesEditoriales/$ids`)
        const obj=await respuesta.json()
        console.log(obj.id)
        setId(obj.mensaje[0].id)
        setNombre(obj.mensaje[0].nombre)
        setPais(obj.mensaje[0

        ].pais)
        
    }
    const actualizar=async()=>{
       await fetch(`http://localhost:3333/actEdito/$ids`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({nombre,pais})


        })
        navigate('/ListarEditorial')
    }
        return(

            <div>
                <input type="text" value={id}/>
                <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <input type="text" value={pais} onChange={(e)=>setPais(e.target.value)}/>
                <button onClick={actualizar}>Actualizar</button>



            </div>
        )
}
export default EditarEditoriales