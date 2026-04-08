
// /services/productoService.ts

import { api } from "../api"
import { ActualizarProductoDTO, CrearProductoDTO, Producto } from "../types/producto"


// 🔹 Crear producto
export const crearProducto = async (dataProducto: CrearProductoDTO): Promise<Producto> => {
  const {data} = await api.post("/productos", dataProducto)
  return data
}


// 🔹 Listar productos
export const listarProductos = async (): Promise<Producto[]> => {
  const {data} = await api.get("/productos")
  return data
}


// 🔹 Obtener producto por ID
export const obtenerProducto = async (id: string): Promise<Producto> => {
  const {data} = await api.get(`/productos/${id}`) 
  return data

}
export const actualizarProducto = async (
  id: string,
  dataActualizar: ActualizarProductoDTO
): Promise<Producto> => {
  const {data} = await api.put(`/productos/${id}`, dataActualizar)
  return data
}


// 🔹 Eliminar producto
export const eliminarProducto = async (id: string): Promise<void> => {
  await api.delete(`/productos/${id}`)
}