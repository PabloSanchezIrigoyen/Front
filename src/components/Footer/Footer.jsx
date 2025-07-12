import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>
        {/* Lado izquierdo */}
        <div className='flexColStart f-left'>
          <img src='./logo.png' alt='Logo' width={120} />
          <span className='secondaryText'>
            Nuestra misión es ofrecer experiencias inolvidables <br />
            en cabañas rodeadas de naturaleza.
          </span>
        </div>

        {/* Lado derecho */}
        <div className='flexColStart f-right'>
          <span className='primaryText'> Información </span>
          <span className='secondaryText'>
            Sierra Madre, Zona EcoTurística, México
          </span>

          <div className='flexCenter f-menu'>
            <span>Cabañas</span>
            <span>Servicios</span>
            <span>Reseñas</span>
            <span>Sobre Nosotros</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
