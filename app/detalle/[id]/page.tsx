"use client"

import React, { useEffect, useState, use } from "react"
import { obtenerProducto } from "../../service/productos"

type Producto = {
  nombre: string
  descripcion: string
  precio: number
  stock: number
  categoria: string
}

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params) // ✅ aquí se unwrapea la Promise

  const [producto, setProducto] = useState<Producto | null>(null)

  useEffect(() => {
    const fetchProducto = async () => {
      const data = await obtenerProducto(id)
      setProducto(data)
    }

    fetchProducto()
  }, [id])

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Cargando producto...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-12 space-y-8">

        <p className="text-sm text-gray-400 uppercase tracking-widest">
          {producto.categoria}
        </p>

        <h1 className="text-4xl font-bold text-gray-900">
          {producto.nombre}
        </h1>

        <p className="text-gray-600 leading-relaxed">
          {producto.descripcion}
        </p>

        <div className="text-3xl font-semibold text-gray-900">
          S/ {producto.precio}
        </div>

        <div className="grid grid-cols-2 gap-6 pt-6">
          <div className="bg-gray-100 rounded-xl p-5">
            <p className="text-xs text-gray-500">Stock</p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              {producto.stock}
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-5">
            <p className="text-xs text-gray-500">Categoría</p>
            <p className="text-lg font-semibold text-gray-800 mt-1">
              {producto.categoria}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page