import './Hero.css'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        {/* Lado izquierdo */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='verde-oliva-circle' />
            <motion.h1
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: 'spring' }}
            >
              Descubre <br />
              Las Mejores <br />
              Cabañas para Ti
            </motion.h1>
          </div>

          <div className='flexColStart hero-des'>
            <span className='secondaryText'>
              Encuentra cabañas únicas en lugares increíbles
            </span>
            <span className='secondaryText'>
              Reserva fácil, vive la naturaleza sin complicaciones
            </span>
          </div>

          {/* Estadísticas */}
          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={0} end={5} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'> Cabañas disponibles </span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={0} end={100} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'> Clientes felices </span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={12} />
                <span>+</span>
              </span>
              <span className='secondaryText'> Lugares únicos </span>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src='/cabin3.jpg' alt='Cabaña destacada' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
