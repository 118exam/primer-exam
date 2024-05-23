import {pool} from "../config/db.mysql.js";

export const mostrarFactura = async(req, res) =>{

    let id = req.params['id'];

    try {
        const respuesta = await pool.query(`CALL sp_MostrarFactura(${id});`);
        res.json({ "res" : respuesta})
    } catch (error) {
        res.json({ "error" : error })
    }
    
}

export const ListarFactura = (req, res) =>{
    
}

export const crearFactura = (req, res) =>{
    
}

export const modificarFactura = (req, res) =>{
    
}

export const eliminarFactura = (req, res) =>{
    
}