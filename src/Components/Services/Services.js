import React from 'react'
import style from './Services.module.css'
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Skincare from '../Images/skincare.png'
import Body from '../Images/body-massage.png'
import Spa from '../Images/spa.png'
function Services() {
  return (
      <div className={style.ServicesContainer}>
          <h1>Our Services</h1>

          
          <div className={style.gridContainer}>
              <div className={style.gridItem}><i><ContentCutIcon style={{color:"#2196F3" , fontSize:"5rem"}} /></i> 
                  <span>Haircut & Styling</span></div>
  <div className={style.gridItem}><i><img  src='https://cdn-icons-png.flaticon.com/512/823/823045.png'/></i><span>Makeup</span></div>
  <div className={style.gridItem}><i><img src='https://cdn-icons-png.flaticon.com/512/2025/2025191.png'/></i><span>Manicure & Pedicure</span></div>  
              <div className={style.gridItem}><i><img src={ Skincare} /></i><span>SkinCare</span></div>
  <div className={style.gridItem}><i><img src={ Body} /></i><span>Body Treatments</span></div>
  <div className={style.gridItem}><i><img src={ Spa} /></i><span>Massage</span></div>  

</div>
    </div>
  )
}

export default Services