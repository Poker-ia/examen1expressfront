// app/productos/page.tsx
"use client"

import { useEffect, useState } from "react"
import { listarProductos, eliminarProducto } from "./service/productos"
import { Producto } from "./types/producto"
import ProductoTable from "./productos/components/ProductoTable"
import ProductoModal from "./productos/components/ProductoModal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Producto | null>(null)

  const fetchProductos = async () => {
    const data = await listarProductos()
    setProductos(data)
  }

  useEffect(() => {
    fetchProductos()
  }, [])

  const handleDelete = async (id: string) => {
    await eliminarProducto(id)
    fetchProductos()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-[80%] py-10 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Gestión de Productos</h1>
            <p className="text-sm text-gray-500 mt-1">
              Administra, edita y elimina productos fácilmente
            </p>
          </div>

          <Button
            className="px-5 py-2 text-sm rounded-xl shadow-md"
            onClick={() => {
              setSelected(null)
              setOpen(true)
            }}
          >
            + Nuevo Producto
          </Button>
        </div>

        {/* Tabla */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <ProductoTable
            productos={productos}
            onEdit={(p) => {
              setSelected(p)
              setOpen(true)
            }}
            onDelete={handleDelete}
          />
        </div>

        {/* Modal */}
        <ProductoModal 
          open={open}
          setOpen={setOpen}
          producto={selected}
          refresh={fetchProductos}
        />
      </div>
    </div>
  )
}