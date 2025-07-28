import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// FontAwesome CDN (Add this in your index.html or load dynamically if needed)

const OrderNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cylinderType: '',
    qty: '',
    customerType: '',
    district: '',
    upazila: '',
    address: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSuccess(true);

    // Optional reset
    setFormData({
      name: '',
      phone: '',
      cylinderType: '',
      qty: '',
      customerType: '',
      district: '',
      upazila: '',
      address: '',
    });
  };

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header bg-light py-5">
        <div className="container text-center">
          <h2>Order Now</h2>
          <p><a href="/">Home</a> / Order Now</p>
        </div>
      </section>

      {/* Order Form */}
      <section className="services-page py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <fieldset>
                      <legend className="text-center mb-4">Order Now</legend>

                      {/* Name */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Name</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-user"></i>
                            </span>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Phone Number</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-phone"></i>
                            </span>
                            <input
                              type="text"
                              name="phone"
                              className="form-control"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Cylinder Type */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Cylinder Type</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-gas-pump"></i>
                            </span>
                            <select
                              name="cylinderType"
                              className="form-control"
                              value={formData.cylinderType}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Cylinder</option>
                              <option>12 KG Cylinder</option>
                              <option>22 KG Cylinder</option>
                              <option>35 KG Cylinder</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Quantity</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-sort-numeric-up"></i>
                            </span>
                            <input
                              type="number"
                              name="qty"
                              className="form-control"
                              placeholder="Enter Quantity"
                              value={formData.qty}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Customer Type */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Customer Type</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-users"></i>
                            </span>
                            <select
                              name="customerType"
                              className="form-control"
                              value={formData.customerType}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Customer Type</option>
                              <option>Household</option>
                              <option>Retailer</option>
                              <option>Distributor</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* District */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">District</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                            <select
                              name="district"
                              className="form-control"
                              value={formData.district}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select District</option>
                              <option>Dhaka</option>
                              <option>Gazipur</option>
                              <option>Tongi</option>
                              <option>Manikgong</option>
                              <option>Narayangong</option>
                              <option>Savar</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Upazila */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Upazila</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-map-pin"></i>
                            </span>
                            <select
                              name="upazila"
                              className="form-control"
                              value={formData.upazila}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Upazila</option>
                              <option>Dhaka</option>
                              <option>Gazipur</option>
                              <option>Tongi</option>
                              <option>Manikgong</option>
                              <option>Narayangong</option>
                              <option>Savar</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="form-group row mb-3">
                        <label className="col-md-4 col-form-label text-md-right">Address</label>
                        <div className="col-md-8">
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fas fa-pencil-alt"></i>
                            </span>
                            <textarea
                              name="address"
                              className="form-control"
                              placeholder="Your Address"
                              value={formData.address}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Success message */}
                      {success && (
                        <div className="alert alert-success mt-3" role="alert">
                          <i className="fas fa-check-circle"></i> Thanks for contacting us, we will get back to you shortly.
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="form-group row mt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                          <button type="submit" className="btn btn-warning w-100">
                            Send <i className="fas fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderNow;






/// ======================================================= Old Code =========================================================== ///
// import React from 'react';

// const OrderNow = () => {
//     return (
//         <div>
//             <div className="page-wrapper" >
//                 {/* --- Page Header --- */}
//                 <section className="page-header">
//                     <div
//                     className="page-header-bg"
//                     style={{ backgroundImage: "url(src/assets/images/backgrounds/page-header-bg.jpg)" }}>
//                     </div>
//                     <div className="container">
//                         <div className="page-header__inner">
//                             <ul className="thm-breadcrumb list-unstyled">
//                                 <li><a href="index.html">Home</a></li>
//                                 <li><span>/</span></li>
//                                 <li>Order Now</li>
//                             </ul>
//                             <h2>Order Now</h2>
//                         </div>
//                     </div>
//                 </section>

//                 {/* --- Order Now Form --- */}
//                 <section className="services-page">
//                     <div className="container">
//                         <div className="row justify-content-center">
//                             {/* <!--Services One Single Start--> */}
//                             <div className="col-md-8 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
//                                 <div className="services-one__single">
//                                     <div className="services-one__content">
//                                         <form className="well form-horizontal" action=" " method="post" id="contact_form">
//                                             <fieldset>
//                                                 {/* <!-- Form Name --> */}
//                                                 <legend className="text-center">Order Now</legend>
//                                                 {/* <!-- Text input Name--> */}
//                                                 <div className="form-group">
//                                                     <label className="col-md-12 control-label text-md-right">Name</label>
//                                                     <div className="col-md-8 inputGroupContainer">
//                                                         <div className="input-group">
//                                                             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
//                                                             <input name="first_name" placeholder="First Name" className="form-control" type="text"/>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 {/* <!-- Text input Phone--> */}
//                                                 <div className="form-group">
//                                                     <label className="col-md-4 control-label text-md-right">Phone Number</label>
//                                                     <div className="col-md-8 inputGroupContainer">
//                                                         <div className="input-group">
//                                                             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
//                                                             <input name="first_name" placeholder="Phone Number" className="form-control" type="text"/>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 {/* <!-- Select Basic --> */}
//                                                 <div className="form-group"> 
//                                                 <label className="col-md-4 control-label">Cylander Type</label>
//                                                     <div className="col-md-4 selectContainer">
//                                                     <div className="input-group">
//                                                         <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
//                                                     <select name="state" className="form-control selectpicker" >
//                                                     <option value=" " >Select Cylinder</option>
//                                                     <option>12 KG Cylinder</option>
//                                                     <option>22 KG Cylinder</option>
//                                                     <option >35 KG Cylinder</option>
//                                                     </select>
//                                                 </div>
//                                                 </div>
//                                                 </div>
//                                                 {/* <!-- Text input Qty --> */}
//                                                 <div className="form-group">
//                                                     <label className="col-md-4 control-label text-md-right">Qty</label>
//                                                     <div className="col-md-8 inputGroupContainer">
//                                                         <div className="input-group">
//                                                             <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
//                                                             <input name="first_name" placeholder="Enter Your Quentity" className="form-control" type="text"/>
//                                                         </div>
//                                                     </div>
//                                                 </div>
                                                
//                                                 {/* <!-- Select Basic --> */}
//                                                 <div className="form-group"> 
//                                                 <label className="col-md-4 control-label">Customer Type</label>
//                                                     <div className="col-md-4 selectContainer">
//                                                     <div className="input-group">
//                                                         <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
//                                                     <select name="state" className="form-control selectpicker" >
//                                                     <option value=" " >Select Cylinder</option>
//                                                     <option>Household</option>
//                                                     <option>Retailer</option>
//                                                     <option >Distributor</option>
//                                                     </select>
//                                                 </div>
//                                                 </div>
//                                                 </div>
                                                
//                                                 {/* <!-- Select Basic --> */}
//                                                 <div className="form-group"> 
//                                                 <label className="col-md-4 control-label">District</label>
//                                                     <div className="col-md-4 selectContainer">
//                                                     <div className="input-group">
//                                                         <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
//                                                     <select name="state" className="form-control selectpicker" >
//                                                     <option value=" " >Select District</option>
//                                                     <option>Dhaka</option>
//                                                     <option>Gazipur</option>
//                                                     <option>Tongi</option>
//                                                     <option>Manikgong</option>
//                                                     <option>Narayangong</option>
//                                                     <option>Savar</option>
//                                                     </select>
//                                                 </div>
//                                                 </div>
//                                                 </div>
                                                
//                                                 {/* <!-- Select Basic --> */}
//                                                 <div className="form-group"> 
//                                                 <label className="col-md-4 control-label">Upazila</label>
//                                                     <div className="col-md-4 selectContainer">
//                                                     <div className="input-group">
//                                                         <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
//                                                     <select name="state" className="form-control selectpicker" >
//                                                     <option value=" " >Select Upazila</option>
//                                                     <option>Dhaka</option>
//                                                     <option>Gazipur</option>
//                                                     <option>Tongi</option>
//                                                     <option>Manikgong</option>
//                                                     <option>Narayangong</option>
//                                                     <option>Savar</option>
//                                                     </select>
//                                                 </div>
//                                                 </div>
//                                                 </div>
                                                
//                                                 {/* <!-- Text area --> */}
//                                                 <div className="form-group">
//                                                 <label className="col-md-4 control-label">Address</label>
//                                                     <div className="col-md-4 inputGroupContainer">
//                                                     <div className="input-group">
//                                                         <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
//                                                             <textarea className="form-control" name="comment" placeholder="Project Description"></textarea>
//                                                 </div>
//                                                 </div>
//                                                 </div>
                                                
//                                                 {/* <!-- Success message --> */}
//                                                 <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

//                                                 {/* <!-- Button --> */}
//                                                 <div className="form-group">
//                                                 <label className="col-md-4 control-label"></label>
//                                                 <div className="col-md-4">
//                                                     <button type="submit" className="btn btn-warning" >Send <span className="glyphicon glyphicon-send"></span></button>
//                                                 </div>
//                                                 </div>
                                                
                                                
                                                
//                                             </fieldset>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </section>

//             </div>

//         </div>
//     );
// };

// export default OrderNow;