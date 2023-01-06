import { useState } from 'react'
import {Container, Flex} from "@chakra-ui/react"
import products from '../products.json'
import ProductCard from './components/ProductCard'



function App() {
  const [productos,setProductos] = useState ([])
  return (
    <Container>
      <Flex>

        <Button colorScheme="green" onClick={()=> setProductos(products)}>Mostrar Productos</Button>
        <Button colorScheme="green" onClick={()=> setProductos(products)}>Ocultar Productos</Button>
      </Flex>
       {productos.map((producto)=> {
        return 
          <ProductCard key={producto.id} image=  {producto.image} title= {producto.title} price= {producto.price} />
        
        })}
    </Container>
  )
}

export default App
