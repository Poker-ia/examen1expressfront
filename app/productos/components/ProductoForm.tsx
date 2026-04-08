// components/productos/ProductoForm.tsx
"use client"

import { useForm } from "react-hook-form"
import {
  crearProducto,
  actualizarProducto
} from "../../service/productos"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProductoForm({ producto, close, refresh }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: producto || {}
  })

  const onSubmit = async (data: any) => {
    if (producto) {
      await actualizarProducto(producto.id, data)
    } else {
      await crearProducto(data)
    }

    refresh()
    close()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <Input placeholder="Nombre" {...register("nombre")} />
      <Input placeholder="Descripción" {...register("descripcion")} />
      <Input type="number" placeholder="Precio" {...register("precio")} />
      <Input type="number" placeholder="Stock" {...register("stock")} />
      <Input placeholder="Categoría" {...register("categoria")} />

      <Button type="submit" className="w-full">
        Guardar
      </Button>
    </form>
  )
}