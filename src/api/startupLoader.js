import {
  fetchAboutPageContent,
  fetchActiveProducts,
  fetchBoardOfDirectors,
  fetchBulkPage,
  fetchContactPage,
  fetchCylinderLpgProducts,
  fetchCylinderPage,
  fetchDistributionPage,
  fetchFaqData,
  fetchFooterInfo,
  fetchHeaderInfo,
  fetchHomeAboutUsSection,
  fetchHomePagePromotionVideo,
  fetchHomeProducts,
  fetchHomeSlider,
  fetchMissionVisionContent,
  fetchProductList,
  fetchReticulationPage,
  fetchSliderBelowSection,
} from './apiCall';

const startupRequests = [
  ['headerInfo', fetchHeaderInfo],
  ['footerInfo', fetchFooterInfo],
  ['homeSlider', fetchHomeSlider],
  ['homePromotionalVideo', fetchHomePagePromotionVideo],
  ['sliderBelowSection', fetchSliderBelowSection],
  ['homeAboutUs', fetchHomeAboutUsSection],
  ['homeProducts', fetchHomeProducts],
  ['activeProducts', fetchActiveProducts],
  ['productList', fetchProductList],
  ['contactPage', fetchContactPage],
  ['distributionPage', fetchDistributionPage],
  ['cylinderPage', fetchCylinderPage],
  ['bulkPage', fetchBulkPage],
  ['reticulationPage', fetchReticulationPage],
  ['aboutPage', fetchAboutPageContent],
  ['missionVision', fetchMissionVisionContent],
  ['boardOfDirectors', fetchBoardOfDirectors],
  ['faq', fetchFaqData],
  ['cylinderLpgProducts', fetchCylinderLpgProducts],
];

let startupPromise;
let startupSettled = false;
const preloadedApiData = new Map();

export const preloadSiteApis = () => {
  if (!startupPromise) {
    startupPromise = Promise.allSettled(startupRequests.map(([, request]) => request())).then((results) => {
      results.forEach((result, index) => {
        const [key] = startupRequests[index];

        if (result.status === 'fulfilled') {
          preloadedApiData.set(key, result.value);
        }
      });

      startupSettled = true;

      const failedRequests = results.filter((result) => result.status === 'rejected');

      if (failedRequests.length > 0) {
        console.error('Startup API prefetch completed with failures:', failedRequests);
      }

      return results;
    });
  }

  return startupPromise;
};

export const getPreloadedApiData = (key) => preloadedApiData.get(key);

export const hasSitePreloadCompleted = () => startupSettled;