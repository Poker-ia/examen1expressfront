"use client"

import { useForm } from "react-hook-form"
import {
  crearProducto,
  actualizarProducto
} from "../../service/productos"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categorias = ["Electronica", "Ropa", "Alimentos"]

type FormValues = {
  nombre: string
  descripcion: string
  precio: number
  stock: number
  categoria: string
}

export default function ProductoForm({
  producto,
  close,
  refresh
}: {
  producto: any
  close: () => void
  refresh: () => void
}) {
  const {
    register,
    handleSubmit
  } = useForm<FormValues>({
    defaultValues: producto || {}
  })

  const onSubmit = async (data: FormValues) => {
    const formattedData = {
      ...data,
      precio: Number(data.precio),
      stock: Number(data.stock)
    }

    if (producto) {
      await actualizarProducto(producto.id, formattedData)
    } else {
      await crearProducto(formattedData)
    }

    refresh()
    close()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <Input placeholder="Nombre" {...register("nombre")} />

      <Input
        placeholder="Descripción"
        {...register("descripcion")}
      />

      <Input
        type="number"
        placeholder="Precio"
        {...register("precio")}
      />

      <Input
        type="number"
        placeholder="Stock"
        {...register("stock")}
      />

      <select
        {...register("categoria")}
        className="w-full border rounded-md px-3 py-2"
      >
        <option value="">Selecciona una categoría</option>

        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <Button type="submit" className="w-full">
        Guardar
      </Button>
    </form>
  )
}