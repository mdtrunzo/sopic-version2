import { useState, useRef } from 'react'
import LetterSize from '../actions/LetterSize'
import Rotate from '../actions/Rotate'
import Color from '../actions/Color'
import Replace from '../actions/Replace'
import KidsUno from './templates/kids/KidsUno'
import { toast } from 'react-toastify'
import {
  TransformComponent,
  TransformWrapper,
} from '@pronestor/react-zoom-pan-pinch'
import ZoomBar from './ZoomBar'
import { PDFExport } from '@progress/kendo-react-pdf'

function Template({ item }) {
  const [id, setId] = useState('')
  const [type, setType] = useState('')
  const container = useRef(null)
  const pdfExportComponent = useRef(null)

  const handleId = (id, type) => {
    setId(id)
    setType(type)
  }

  const showError = () => {
    toast.error(`No aceptamos más de 10 mb 🥺`, {
      autoClose: 1500,
      position: 'top-left',
    })
  }
  const showSuccess = () => {
    toast.success(`Imagen cargada 😎`, {
      autoClose: 1500,
      position: 'top-left',
    })
  }
  const showErrorLess = () => {
    toast.error(`No aceptamos menos de 2 mb 🥺`, {
      autoClose: 1500,
      position: 'top-left',
    })
  }

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save()
    }
  }

  return (
    <div>
      <div className="page-template">
        <TransformWrapper>
          {({ zoomIn, zoomOut, ...rest }) => (
            <>
              <ZoomBar zoomIn={zoomIn} zoomOut={zoomOut} />
              <TransformComponent>
                <PDFExport
                  ref={pdfExportComponent}
                  paperSize="auto"
                  margin={40}
                  fileName={`Plantilla`}
                >
                  {item.id === 1 && (
                    <KidsUno
                      handleId={handleId}
                      item={item}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                </PDFExport>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
      <div className="panel">
        <div className="navbar-footer-top">
          <Replace id={id} type={type} />
          <Rotate id={id} type={type} />
        </div>
        <div className="navbar-footer-bottom">
          <LetterSize id={id} type={type} />
          <Color id={id} type={type} />
        </div>
      </div>
      <button onClick={exportPDFWithComponent}>EXPORTAR A PDF</button>
    </div>
  )
}

export default Template
