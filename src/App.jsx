import { useState } from 'react'
import './App.css'

function App() {

  const productos = {

  "Bebidas": [
    "Horchata",
    "Jamaica",
    "Té",
    "Calpico",
    "Clamato",
    "Agua natural embotellada"
  ],

  "Salsas y Complementos": [
    "Siracha",
    "Preparado para micheladas",
    "Vainilla",
    "Águila",
    "Azúcar"
  ],

  "Desechables y Utensilios": [
    "Servilletas",
    "Ohachis",
    "Palillos",
    "Popotes"
  ],

  "Extras": [
    "Dulces"
  ]

}

  const [seleccionados, setSeleccionados] = useState([])

  const toggleProducto = (producto) => {

    console.log('CLICK EN:', producto)

    if (seleccionados.includes(producto)) {

      console.log('REMOVIDO:', producto)

      setSeleccionados(
        seleccionados.filter(item => item !== producto)
      )

    } else {

      console.log('AGREGADO:', producto)

      setSeleccionados([
        ...seleccionados,
        producto
      ])
    }
  }

  const copiarAlClipboard = async () => {

    const texto = seleccionados.join('\n')

    console.log('COPIANDO:')
    console.log(texto)

    await navigator.clipboard.writeText(texto)

    alert('Lista copiada al portapapeles')
  }

  return (
    <div className='container'>

      <h1 className='titulo'>Lista de Productos</h1>

      {
        Object.entries(productos).map(([categoria, items]) => (

          <div key={categoria} className='categoria'>

            <h2 className='categoriaTitulo'>
              {categoria}
            </h2>

            <div className='productosGrid'>

              {
                items.map((producto) => (

                  <div
                    key={producto}
                    className={`producto ${seleccionados.includes(producto) ? 'seleccionado' : ''}`}
                    onClick={() => toggleProducto(producto)}
                  >
                    {producto}
                  </div>
                ))
              }

            </div>

          </div>
        ))
      }

      <button
        className='botonCopiar'
        onClick={copiarAlClipboard}
      >
        Copiar al portapapeles
      </button>

    </div>
  )
}

export default App
