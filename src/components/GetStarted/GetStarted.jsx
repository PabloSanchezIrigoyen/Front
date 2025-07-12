import './GetStarted.css'

const GetStarted = () => {
  // Enlace directo a la ubicación en Google Maps
  const mapsUrl = 'https://maps.app.goo.gl/56VurTa6WdC6XpJQ7'

  return (
    <section className='g-wrapper'>
      <div className='paddings innerWidth g-container'>
        <div className='flexColCenter inner-container'>
          <span className='primaryText'>Empieza tu aventura en cabañas</span>
          <span className='secondaryText'>
            Explora nuestras cabañas con las mejores vistas y precios. <br />
            ¡Encuentra la tuya y visítanos hoy mismo!
          </span>

          <button className='button'>
            <a href={mapsUrl} target='_blank' rel='noopener noreferrer'>
              Ver ubicación en el mapa
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
