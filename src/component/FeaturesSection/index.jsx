import React from 'react'
import { FeatureItem, MainBody, TitleText } from './FeaturesSection.styles'
import featureImg1 from '../../assets/features_icons/1.png'
import featureImg2 from '../../assets/features_icons/2.png'
import featureImg3 from '../../assets/features_icons/3.png'
import featureImg4 from '../../assets/features_icons/4.png'
import './style.css';
const FeaturesSection = () => {
  return (
    <div className='MainBody'>
        <div className='FeatureItem'>
            <img className='img1' src={featureImg4} alt="featureImg4" />
            <span className='TitleText1'>Great Value</span>
        </div>
        <div className='FeatureItem'>
            <img className='img1' src={featureImg1} alt="featureImg1" />
            <span className='TitleText1'>Safe Payment</span>
        </div>
        <div className='FeatureItem'>
            <img className='img1' src={featureImg3} alt="featureImg3" />
            <span className='TitleText1'>Shop Confidence</span>
        </div>
        <div className='FeatureItem'>
            <img className='img1' src={featureImg2} alt="featureImg2" />
            <span className='TitleText1'>24/7 Help Center</span>
        </div>
    </div>
  )
}

export default FeaturesSection