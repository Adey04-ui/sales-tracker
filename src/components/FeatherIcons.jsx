import Header from './Header'
import Iconsdiv from './Icons'
import Footer from './Footer'

function FeatherIcons({show, theme}) {

  return (
    <div className={`full-container ${!show && 'full' }`}>
      <Header theme={theme} show={show} />
      <Iconsdiv theme={theme} show={show} />
      <Footer theme={theme} />
    </div>
  )
}

export default FeatherIcons