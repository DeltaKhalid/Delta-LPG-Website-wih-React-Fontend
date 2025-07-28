// src/api/aboutApi.js

import Urls from '../constants/urls';
import networkCallRequest from '../services/network';

// export const fetchAboutUsContent = async () => {
//   return await networkCallRequest(Urls.aboutUs);
// //   return await request(Urls.aboutUs2);
// };

// --- Product List --- //
export const fetchProductList = async () => {
  return await networkCallRequest(Urls.productList);
};

// --- Header Info --- //
export const fetchHeaderInfo = async () => {
  return await networkCallRequest(Urls.headerInfo);
};
// --- Footer Info --- //
export const fetchFooterInfo = async () => {
  return await networkCallRequest(Urls.footer);
};
// --- Contact Page API --- //
export const fetchContactPage = async () => {
  return await networkCallRequest(Urls.contactPage);
};
// --- Distribution Page API --- //
export const fetchDistributionPage = async () => {
  return await networkCallRequest(Urls.distributionPage);
};
// --- Cylinder Page API --- //
export const fetchCylinderPage = async () => {
  return await networkCallRequest(Urls.cylinderPage);
};
// --- Bulk Page API --- //
export const fetchBulkPage = async () => {
  return await networkCallRequest(Urls.bulkPage);
};
// --- Reticulation Page API --- //
export const fetchReticulationPage = async () => {
  return await networkCallRequest(Urls.reticulationPage);
};
// --- About Us Page API --- //
export const fetchAboutPageContent = async () => {
  return await networkCallRequest(Urls.aboutUs);
};
// --- Mission and Vision Page API --- //
export const fetchMissionVisionContent = async () => {
  return await networkCallRequest(Urls.missionVision);
};
// --- Home Page Promotion Video --- //
export const fetchHomePagePromotionVideo = async () => {
  return await networkCallRequest(Urls.homePromotionalVideo);
};
// --- Home Slider Below Section --- //
export const fetchSliderBelowSection = async () => {
  return await networkCallRequest(Urls.sliderBelowSection);
};
// --- Home About Us API --- //
export const fetchHomeAboutUsSection = async () => {
  return await networkCallRequest(Urls.homeAboutUs); 
};
// --- Home Products API --- //
export const fetchHomeProducts = async () => {
  return await networkCallRequest(Urls.homeProducts);
};
// --- Home Slider API --- //
export const fetchHomeSlider = async () => {
  return await networkCallRequest(Urls.homeSlider);
};
// --- Board Of Directors --- //
export const fetchBoardOfDirectors = async () => {
  return await networkCallRequest(Urls.boardOfDirectors);
};
// --- Faq Question Answer API --- //
export const fetchFaqData = async () => {
  return await networkCallRequest(Urls.faq);
};


