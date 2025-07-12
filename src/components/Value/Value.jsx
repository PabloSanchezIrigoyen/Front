import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion.jsx'
import './Value.css'
import { useState } from 'react'

const Value = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* Lado izquierdo */}
        <div className='v-left'>
          <div className='image-container'>
            <img src='./cabin4.jpg' alt='Valor cabañas' />
          </div>
        </div>

        {/* Lado derecho */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>Nuestros Valores</span>
          <span className='primaryText'>¿Por qué elegir nuestras cabañas?</span>
          <span className='secondaryText'>
            Siempre estamos listos para brindarte el mejor servicio posible.
            <br />
            Creemos que una buena cabaña puede hacer tu estadía inolvidable.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null)
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                        }
                      </AccordionItemState>
                      <div className='flexCenter icon'>{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
