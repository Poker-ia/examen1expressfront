// components/productos/ProductoModal.tsx
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import ProductoForm from "./ProductoForm"

export default function ProductoModal({
  open,
  setOpen,
  producto,
  refresh
}: any) {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent >
        <DialogHeader>
          <DialogTitle>
            {producto ? "Editar Producto" : "Nuevo Producto"}
          </DialogTitle>
        </DialogHeader>

        <ProductoForm 
          producto={producto}
          close={() => setOpen(false)}
          refresh={refresh}
        />
      </DialogContent>
    </Dialog>
  )
}