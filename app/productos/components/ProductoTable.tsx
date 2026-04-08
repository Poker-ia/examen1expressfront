"use client"

import { Producto } from "../../types/producto"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props {
  productos: Producto[]
  onEdit: (p: Producto) => void
  onDelete: (id: string) => void
}

export default function ProductoTable({
  productos,
  onEdit,
  onDelete
}: Props) {
  return (
    <div className="border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th className="text-right p-3">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.nombre}</td>
              <td>S/ {p.precio}</td>
              <td>{p.stock}</td>
              <td>{p.categoria}</td>

              <td className="p-3 flex gap-2 justify-end">
                <Link href={`/detalle/${p.id}`}>
                  <Button variant="outline">Ver</Button>
                </Link>

                <Button onClick={() => onEdit(p)}>
                  Editar
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => onDelete(p.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}