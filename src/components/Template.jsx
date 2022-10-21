import { useState, useRef } from 'react'
import LetterSize from '../actions/LetterSize'
import Rotate from '../actions/Rotate'
import Color from '../actions/Color'
import Replace from '../actions/Replace'
import KidsUno from './templates/kids/KidsUno'
import KidsTwo from './templates/kids/KidsTwo'
import { toast } from 'react-toastify'
import {
  TransformComponent,
  TransformWrapper,
} from '@pronestor/react-zoom-pan-pinch'
import ZoomBar from './ZoomBar'
import { PDFExport } from '@progress/kendo-react-pdf'
import KidsThree from './templates/kids/KidsThree'
import KidsFour from './templates/kids/KidsFour'
import KidsFive from './templates/kids/KidsFive'
import CollageOne from './templates/collages/CollageOne'
import CollageFour from './templates/collages/CollageFour'
import CollageFive from './templates/collages/CollageFive'
import CollageTwo from './templates/collages/CollageTwo'
import CollageThree from './templates/collages/CollageThree'
import AventuraOne from './templates/aventura/AventuraOne'
import AventuraTwo from './templates/aventura/AventuraTwo'
import AventuraThree from './templates/aventura/AventuraThree'
import AventuraFour from './templates/aventura/AventuraFour'
import AventuraFive from './templates/aventura/AventuraFive'
import MemoriasOne from './templates/memorias/MemoriasOne'
import MemoriasTwo from './templates/memorias/MemoriasTwo'
import MemoriasThree from './templates/memorias/MemoriasThree'
import MemoriasFour from './templates/memorias/MemoriasFour'
import MemoriasFive from './templates/memorias/MemoriasFive'
import MemoriasSix from './templates/memorias/MemoriasSix'
import MemoriasSeven from './templates/memorias/MemoriasSeven'
import MemoriasEight from './templates/memorias/MemoriasEight'
import MemoriasNine from './templates/memorias/MemoriasNine'
import MemoriasTen from './templates/memorias/MemoriasTen'

function Template({ arr }) {
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
                  {arr.id === 1 && (
                    <KidsUno
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 2 && (
                    <KidsTwo
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 3 && (
                    <KidsThree
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 4 && (
                    <KidsFour
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 5 && (
                    <KidsFive
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 6 && (
                    <CollageOne
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 7 && (
                    <CollageTwo
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 8 && (
                    <CollageThree
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 9 && (
                    <CollageFour
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 10 && (
                    <CollageFive
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 11 && (
                    <AventuraOne
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 12 && (
                    <AventuraTwo
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 13 && (
                    <AventuraThree
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 14 && (
                    <AventuraFour
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 15 && (
                    <AventuraFive
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 16 && (
                    <MemoriasOne
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 17 && (
                    <MemoriasTwo
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 18 && (
                    <MemoriasThree
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 19 && (
                    <MemoriasFour
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 20 && (
                    <MemoriasFive
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 21 && (
                    <MemoriasSix
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 22 && (
                    <MemoriasSeven
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 23 && (
                    <MemoriasEight
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 24 && (
                    <MemoriasNine
                      handleId={handleId}
                      arr={arr}
                      showError={showError}
                      showErrorLess={showErrorLess}
                      showSuccess={showSuccess}
                      ref={container}
                    />
                  )}
                  {arr.id === 25 && (
                    <MemoriasTen
                      handleId={handleId}
                      arr={arr}
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
