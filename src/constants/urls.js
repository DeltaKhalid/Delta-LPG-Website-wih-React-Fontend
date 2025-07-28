// src/constants/urls.js

class Urls {
//   static baseUrl = 'http://192.168.1.170:4000/api';
  static baseUrl = 'http://127.0.0.1:8000/api';

  // --- Auth (login url) --- //
  static login = `${Urls.baseUrl}/auth/login`;

  // --- About (Test API) --- //
  // static aboutUs = `${Urls.baseUrl}/about-us`;
//   static aboutUs2 = 'http://127.0.0.1:8000/api/about-us/';

  // More APIs can go here...
  // static products = `${Urls.baseUrl}/products`;
  // static contact = `${Urls.baseUrl}/contact`;

  // --- Product List --- //
  static productList = `${Urls.baseUrl}/product-list/`;
  // --- Header Info --- //
  // http://127.0.0.1:8000/api/header-info/
  static headerInfo = `${Urls.baseUrl}/header-info/`;
  // --- Footer API --- //
  static footer = `${Urls.baseUrl}/footer/`;
  // --- Contact API --- //
  static contactPage = `${Urls.baseUrl}/contact-page`;
  // --- Distribution Page API --- //
  static distributionPage = `${Urls.baseUrl}/distribution-page/`;
  // --- Cylinder Page API --- //
  static cylinderPage = `${Urls.baseUrl}/cylinder-page/`;
  // --- Bulk Page API --- //
  static bulkPage = `${Urls.baseUrl}/bulk-page/`;
  // --- Reticulation Page API --- //
  static reticulationPage = `${Urls.baseUrl}/reticulation-page/`;
  // --- About us Page Contert --- //
  static aboutUs = `${Urls.baseUrl}/about-us-page/`;
  // --- Mission and Vision Page API --- //
  static missionVision = `${Urls.baseUrl}/mission-vision/`;
  // --- Home Page APIs --- //
  static homePromotionalVideo = `${Urls.baseUrl}/home-promotional-video/`;
  // --- Home Slider Below Section --- //
  static sliderBelowSection = `${Urls.baseUrl}/slider-below-section/`;
  // --- Home About Us API --- //
  static homeAboutUs = `${Urls.baseUrl}/home-about-us/`;
  // --- Home Products --- //
  static homeProducts = `${Urls.baseUrl}/home-products/`;
  // --- Home Slider API --- //
  static homeSlider = `${Urls.baseUrl}/sliders/`;
  // --- Board Of Directors API --- //
  static boardOfDirectors = `${Urls.baseUrl}/board-of-directors`;
  // --- Faq Question and Answer API --- //
  static faq = `${Urls.baseUrl}/faq-add/`;



}

export default Urls; 
