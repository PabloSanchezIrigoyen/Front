import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {/* Lado izquierdo */}
        <div className='flexColStart c-left'>
          <span className='orangeText'>Contáctanos</span>
          <span className='primaryText'>Fácil de contactarnos</span>
          <span className='secondaryText'>
            Siempre estamos listos para ayudarte brindando los mejores servicios. Creemos que un buen lugar para vivir puede mejorar tu vida.
          </span>

          <div className='flexColStart contactModes'>
            {/* Primera fila */}
            <div className='flexStart row'>
              {/* Llamada */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>

                  <div className='flexColStart detail'>
                    <span className='primaryText'>Llamada</span>
                    <span className='secondaryText'>618 110 1379</span>
                  </div>
                </div>
                <div className='flexCenter button'>Llamar ahora</div>
              </div>

              {/* Chat */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className='flexColStart detail'>
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>618 110 1379</span>
                  </div>
                </div>
                <div className='flexCenter button'>Chatear ahora</div>
              </div>
            </div>
            {/* Fin primera fila */}

            {/* Segunda fila */}
            <div className='flexStart row'>
              {/* Videollamada */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className='flexColStart detail'>
                    <span className='primaryText'>Video llamada</span>
                    <span className='secondaryText'>618 110 1379</span>
                  </div>
                </div>
                <div className='flexCenter button'>Videollamar ahora</div>
              </div>

              {/* Mensaje */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <HiChatBubbleBottomCenter size={25} />
                  </div>

                  <div className='flexColStart detail'>
                    <span className='primaryText'>Mensaje</span>
                    <span className='secondaryText'>618 110 1379</span>
                  </div>
                </div>
                <div className='flexCenter button'>Enviar mensaje</div>
              </div>
            </div>
            {/* Fin segunda fila */}
          </div>
        </div>

        {/* Lado derecho */}
        <div className='c-right'>
          <div className='image-container'>
            <img src='./cabin1.jpeg' alt='Contacto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
