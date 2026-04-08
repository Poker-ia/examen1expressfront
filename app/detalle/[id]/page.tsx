"use client"

import React, { useEffect, useState } from "react"
import { obtenerProducto } from "../../service/productos"

type Producto = {
  nombre: string
  descripcion: string
  precio: number
  stock: number
  categoria: string
}

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [producto, setProducto] = useState<Producto | null>(null)

  useEffect(() => {
    const fetchProducto = async () => {
      const { id } = await params  // ✅ Await params
      const data = await obtenerProducto(id)
      setProducto(data)
    }

    fetchProducto()
  }, [params])

  if (!producto) return <p className="p-6">Cargando...</p>

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="border rounded-xl p-6 shadow-sm space-y-3">
        <h1 className="text-2xl font-bold">{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm text-gray-500">Precio</p>
            <p className="font-semibold">S/ {producto.precio}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Stock</p>
            <p className="font-semibold">{producto.stock}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Categoría</p>
            <p className="font-semibold">{producto.categoria}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page