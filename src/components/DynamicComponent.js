import React from 'react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import BlogPost from './BlogPost'
import Slide from './Slide'
import Placeholder from './Placeholder'
import ArticleTeaser from './ArticleTeaser'
import FeaturedArticles from './FeaturedArticles'
import PostsList from './PostsList'
import About from './landingPage/about'
import HeroCarousel from './landingPage/heroCarousel'
import TextImageRight from './landingPage/textImageRight'
import WhatSupport from './landingPage/whatSupport'
import Partners from './landingPage/partners'
import WhyTriiyo from './landingPage/whyTriiyo'
import BannerTop from './resourcesPage/banner'
import BannerWhyTop from './whyTriiyo/bannerWhy'
import Subscribe from './landingPage/subscribe'
import IntroWhy from './whyTriiyo/introWhy'
import BenefitsWhy from './whyTriiyo/benefitsWhy'
import VideoWhy from './whyTriiyo/videoWhy'
import ContactForm from './contactUs/contactForm'
import BannerContactTop from './contactUs/contactBannerTop'
import ContactIcons from './contactUs/contactIcons'
import BookBannerTop from './bookDemo/bookBannerTop'
import BookDemoForm from './bookDemo/bookDemoForm'
import BookSuccess from './bookDemo/success'
import ContactSuccess from './contactUs/contactSuccess'
import BlogBannerTop from './blogs/blogBannerTop'
import AboutStory from './aboutUs/story'
import AboutMission from './aboutUs/mission'
import AboutBannerTop from './aboutUs/topBanner'



const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'blogpost': BlogPost,
  'slide': Slide,
  'article-teaser': ArticleTeaser,
  'featured-articles': FeaturedArticles,
  'posts-list': PostsList,
  'heroCarousel': HeroCarousel,
  'textImageRight': TextImageRight,
  'about': About,
  'whyTriiyo': WhyTriiyo,
  'whatSupport': WhatSupport,
  'partners': Partners,
  'bannerTop': BannerTop,
  'bannerWhyTop': BannerWhyTop,
  'subscribe': Subscribe,
  'introWhy': IntroWhy,
  'benefitsWhy': BenefitsWhy,
  'videoWhy': VideoWhy,
  'contactForm': ContactForm,
  'bannerContactTop': BannerContactTop,
  'contactIcons': ContactIcons,
  'bookBannerTop': BookBannerTop,
  'bookDemoForm': BookDemoForm,
  'bookSuccess': BookSuccess,
  'contactSuccess': ContactSuccess,
  'blogBannerTop': BlogBannerTop,
  'aboutStory': AboutStory,
  'aboutMission': AboutMission,
  'aboutBannerTop': AboutBannerTop

}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid}/>
  }
 
  return  blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default DynamicComponent
