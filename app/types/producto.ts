// Para crear
export interface CrearProductoDTO {
  nombre: string
  descripcion: string
  precio: number
  stock: number
  categoria: string
}

// Para actualizar
export interface ActualizarProductoDTO {
  nombre?: string
  descripcion?: string
  precio?: number
  stock?: number
  categoria?: string
}

export interface Producto {
  id: string
  nombre: string
  descripcion: string
  precio: number
  stock: number
  categoria: string
  createdAt: string
}
