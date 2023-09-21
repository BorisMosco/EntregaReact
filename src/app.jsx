import './App.css'
import NavBar from './assets/components/NavBar/NavBar'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'


const App = () => {


  return (
    <div>
      <NavBar />
      <div className='Products'>
      <ItemListContainer
          img="https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          name="Collar Venecia"
          description="Collar de cuero ecológico y herrajes de acero inoxidable antialérgicos. Varios colores según disponibilidad. 
        Tamaño: S, M, L, XL"
          price="$7.000" />
          <ItemListContainer
          img="https://images.unsplash.com/photo-1686890120766-304709b7594d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          name="Bandana Hawaii"
          description="Pañuelo bandana estampado con elástico en la parte trasera. Varios colores según disponibilidad.
        Tamaño: S, M, L, XL"
          price="$5.000" />
        <ItemListContainer
          img="https://images.unsplash.com/photo-1581888475780-27b6b0bc3690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
          name="Cama Roma"
          description="Cama rectangular en tela gabardina con manta reversible gabardina & polar.
        Tamaño: S, M, L, XL"
          price="$27.000" />
      </div>

    </div>

  )
}

export default App