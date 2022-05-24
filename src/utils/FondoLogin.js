import Fondo from '../assets/fondoinventario.jpg'
const FondoLogin = () => {
  return (
    <div className='hidden lg:flex lg:w-1/2 max-h-screen'>
      <img className='object-cover min-h-screen' src={Fondo} alt="inventario" />
    </div>
  )
}

export default FondoLogin