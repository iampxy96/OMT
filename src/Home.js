import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>

      <div class="container px-7 py-7" id="custom-cards">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <a href='/newonboardingemployee'>
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url(' + require('./newonboardingemployee.png') + ')'}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-2">
                <h2 class="pt-5 mt-5 mb-4 display-7 lh-1 fw-bold">New Onboarding Employee</h2>
              </div>
            </div>
          </div>
          </a>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url(' + require('./onboardingtemplate.png') + ')'}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-7 lh-1 fw-bold">Onboarding Template</h2>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url(' + require('./onboardingtasks.jpg') + ')'}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-2">
                <h2 class="pt-5 mt-5 mb-4 display-7 lh-1 fw-bold">Onboarding Tasks</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
