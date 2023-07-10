import {Link} from 'react-router-dom'
import Image from '../images/aing.png'
import {FiExternalLink} from 'react-icons/fi'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Halo👋, Saya Helmi Salsabila</h4>
          <h1>Lulusan Mahasiswa Teknik Informatika di Universitas Logistik dan Bisnis Internasional</h1>
          <p>"Saya percaya bahwa melakukan apa yang kita sukai dan mengubahnya menjadi bisnis adalah kunci kesuksesan."</p>
          {/* <Link to="/about" className="btn lg">Lihat Detail</Link> */}
          <a href="https://portal.helmisalsabila.com" className='btn lg' target='_blank' rel='noreferrer noopener'>Lihat Portal <FiExternalLink/></a>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader