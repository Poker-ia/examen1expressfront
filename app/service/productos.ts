
// /services/productoService.ts

import { api } from "../api"
import { ActualizarProductoDTO, CrearProductoDTO, Producto } from "../types/producto"


// 🔹 Crear producto
export const crearProducto = async (data: CrearProductoDTO): Promise<Producto> => {
  const res = await api.post("/productos", data)
  return res.data
}


// 🔹 Listar productos
export const listarProductos = async (): Promise<Producto[]> => {
  const res = await api.get("/productos")
  return res.data
}


// 🔹 Obtener producto por ID
export const obtenerProducto = async (id: string): Promise<Producto> => {
  const res = await api.get(`/productos/${id}`)
  return res.data
}


// 🔹 Actualizar producto
export const actualizarProducto = async (
  id: string,
  data: ActualizarProductoDTO
): Promise<Producto> => {
  const res = await api.put(`/productos/${id}`, data)
  return res.data
}


// 🔹 Eliminar producto
export const eliminarProducto = async (id: string): Promise<void> => {
  await api.delete(`/productos/${id}`)
}