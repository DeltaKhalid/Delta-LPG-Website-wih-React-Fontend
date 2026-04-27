// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { fetchFaqData } from '../api/apiCall'; 
// import './Faq.css'; // Optional CSS for styling

// const faqs = [
//   {
//     question: 'What is LPG?',
//     answer:
//       'LPG stands for Liquefied Petroleum Gas, a flammable mixture of hydrocarbon gases used as fuel in heating appliances, vehicles, and more.',
//   },
//   {
//     question: 'What is LPG Dispenser?',
//     answer:
//       'An LPG dispenser is a device used to fill gas cylinders or vehicle tanks with LPG safely and accurately.',
//   },
//   {
//     question: 'What is the working pressure of a LPG dispenser?',
//     answer:
//       'LPG gas is in liquid state over 6 bars. Our systems are designed to work only over 6 bars. Under normal conditions, working pressure is between 9–12 Bars.',
//   },
//   {
//     question: 'Can we make calibration for LPG Dispenser?',
//     answer:
//       'Yes, calibration can be performed using standard procedures and certified equipment.',
//   },
//   {
//     question: 'What is the lifetime of a LPG meter?',
//     answer:
//       'LPG meters generally last 5–10 years depending on usage and maintenance.',
//   },
//   {
//     question: 'When filters of LPG Dispenser should be cleaned?',
//     answer:
//       'Filters should be cleaned every 6 months or as per usage volume.',
//   },
// ];

const Faq = () => {


    // const [activeIndex, setActiveIndex] = useState(null);
    // const toggleFAQ = (index) => {
    //     setActiveIndex(index === activeIndex ? null : index);
    // };

  /// ================================================================= API Call Area =================================================== ///

    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const getFaqs = async () => {
        try {
            const data = await fetchFaqData();

            // Convert to expected format: { question, answer }
            const formattedData = data.map(item => ({
            question: item.faq_question,
            answer: item.faq_answer
            }));

            setFaqs(formattedData);
        } catch (error) {
            console.error('Error fetching FAQ data:', error);
        } finally {
            setLoading(false);
        }
        };

        getFaqs();
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    if (loading) return <p className="text-center">Loading FAQs...</p>;


    // const [FaqListData, setFaqListData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const getFaqData = async () => {
    //     try {
    //         const data = await fetchFaqData();
    //         setFaqListData(data);
    //         console.log('Faq question ans API Call Response Data: ', data);
    //     } catch (error) {
    //         console.error('Failed to fetch FAQs:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    //     };

    //     getFaqData();
    // }, []);

    // if (loading) return <p>Loading FAQs...</p>;




  /// ================================================================= Main Return Area =================================================== ///
  return (
    <div>
        {/* /// --------------------------------------- Header Section ---------------------------------------------------- /// */}
        <section className="page-header fadeInUp">
            <div
            className="page-header-bg"
            style={{ backgroundImage: 'url(src/assets/images/backgrounds/page-header-bg.jpg)' }}>
            </div>

            <div className="container">
                <div className="page-header__inner">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span>/</span></li>
                        <li>Faq</li>
                    </ul>
                    <h2>Faq</h2>
                </div>
            </div>
        </section>

        {/* /// --------------------------------------- Faq Question and Answer Section ----------------------------------- /// */}
        <div className="container py-5 fadeInUp" >
            {faqs.map((faq, index) => (
                <div
                key={index}
                className={`faq-item mb-3 border rounded ${
                    activeIndex === index ? 'active border-success' : ''
                }`}
                >
                <div
                    className="faq-question d-flex justify-content-between align-items-center p-3"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer' }}
                >
                    <strong
                    className={`m-0 ${
                        activeIndex === index ? 'text-success' : ''
                    }`}
                    >
                    {faq.question}
                    </strong>
                    <span
                    className={`faq-toggle-icon fs-4 ${
                        activeIndex === index ? 'text-success' : 'text-dark'
                    }`}
                    >
                    {activeIndex === index ? '−' : '+'}
                    </span>
                </div>
                {activeIndex === index && (
                    <div className="faq-answer px-3 pb-3 text-secondary">
                    {faq.answer}
                    </div>
                )}
                </div>
            ))}
        </div>
    </div>
  );
};

export default Faq;
