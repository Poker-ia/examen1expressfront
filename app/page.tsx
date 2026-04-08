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
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Button onClick={() => { setSelected(null); setOpen(true) }}>
          Nuevo Producto
        </Button>
      </div>

      <ProductoTable
        productos={productos}
        onEdit={(p) => { setSelected(p); setOpen(true) }}
        onDelete={handleDelete}
      />

      <ProductoModal
        open={open}
        setOpen={setOpen}
        producto={selected}
        refresh={fetchProductos}
      />
    </div>
  )
}