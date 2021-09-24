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
import DownloadFreeBook from './landingPage/downloadFreeBook'
import BannerTop from './resourcesPage/banner'
import BannerWhyTop from './whyTriiyo/bannerWhy'
import Testimonial from './landingPage/testimonial2'
import Subscribe from './landingPage/subscribe'
import IntroWhy from './whyTriiyo/introWhy'
import BenefitsWhy from './whyTriiyo/benefitsWhy'
import VideoWhy from './whyTriiyo/videoWhy'
import ContactForm from './contactUs/contactForm'
import BannerContactTop from './contactUs/contactBannerTop'
import ContactIcons from './contactUs/contactIcons'
import BookNow from './contactUs/bookNow'
import BookBannerTop from './bookDemo/bookBannerTop'
import BookDemoForm from './bookDemo/bookDemoForm'
import BookSuccess from './bookDemo/success'
import ContactSuccess from './contactUs/contactSuccess'
import BlogBannerTop from './blogs/blogBannerTop'
import AboutStory from './aboutUs/story'
import AboutMission from './aboutUs/mission'
import AboutBannerTop from './aboutUs/topBanner'
import BannerCareerTop from './careers/creersBannerTop'
import WorkWithUs from './careers/workwithus'
import Jobs from './careers/jobs'
import Perks from './careers/perks'
import KnowYou from './careers/knowYou'
import BeingYou from './careers/beingYou'
import NetEngineer from './careers/netEngineer'
import AccountExecutive from './careers/accountExecutive'
import UxDesigner from './careers/uxDesigner'
import Values from './aboutUs/values'
import Culture from './aboutUs/culture'
import GetStarted from './whyTriiyo/getStarted'
import WhyUse from './whyTriiyo/whyUse'
import ContactBook from './contactUs/book'
import Privacy from './privacy/privacy'
import TermsConditions from './termsConditions/termsConditions'
import Media from './contactUs/media'
// Blog Structure
import BlogHeader from './blogs/blogHeader'
import VideoBlog from './VideoBlog'
import VideoBlogNew from './VideoBlogPage'
import Videos from './blogs/videos'


const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'blogpost': BlogPost,
  'videoBlog': VideoBlog,
  'videoBlogNew': VideoBlogNew,
  'slide': Slide,
  'article-teaser': ArticleTeaser,
  'featured-articles': FeaturedArticles,
  'posts-list': PostsList,
  'heroCarousel': HeroCarousel,
  'textImageRight': TextImageRight,
  'downloadFreeBook': DownloadFreeBook,
  'about': About,
  'whyTriiyo': WhyTriiyo,
  'whatSupport': WhatSupport,
  'partners': Partners,
  'bannerTop': BannerTop,
  'bannerWhyTop': BannerWhyTop,
  'whyUse': WhyUse,
  'subscribe': Subscribe,
  'introWhy': IntroWhy,
  'benefitsWhy': BenefitsWhy,
  'videoWhy': VideoWhy,
  'contactForm': ContactForm,
  'bannerContactTop': BannerContactTop,
  'bookNow': BookNow,
  'contactIcons': ContactIcons,
  'bookBannerTop': BookBannerTop,
  'bookDemoForm': BookDemoForm,
  'bookSuccess': BookSuccess,
  'contactSuccess': ContactSuccess,
  'blogBannerTop': BlogBannerTop,
  'aboutStory': AboutStory,
  'aboutMission': AboutMission,
  'aboutBannerTop': AboutBannerTop,
  'bannerCareerTop': BannerCareerTop,
  'workWithUs': WorkWithUs,
  'jobs': Jobs,
  'perks': Perks,
  'values': Values,
  'culture': Culture,
  'getStarted': GetStarted,
  'contactBook': ContactBook,
  'privacy': Privacy,
  'termsConditions': TermsConditions,
  'knowYou': KnowYou,
  'beingYou': BeingYou,
  'netEngineer': NetEngineer,
  'accountExecutive': AccountExecutive,
  'uxDesigner': UxDesigner,
  'testimonial': Testimonial, 
  'media': Media,
  'blogHeader': BlogHeader,
  'videos': Videos
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid}/>
  }
 
  return  blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default DynamicComponent
