import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewOnboardingEmployee.css'
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

init("user_bHKMO9GQVCsP8lcERPJk2");


export default function NewOnboardingEmployee() {

    function sendEmail(){
        emailjs.send("service_1k6a397", "template_fry4iqs")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
    }

    function handleSubmit(){
        alert('Employee has been registered');
    }

    return (
        <div class="container align-self-center">
            <main>
                <div class="col-lg-7 col-lg-8 align-self-center">
                    <h4 class="mb-4">New Onboarding Employee</h4>
                    <form class="needs-validation " novalidate onSubmit={handleSubmit}>
                    <div class="row g-2">
                        <div class="col-12">
                        <label for="fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" required/>
                        <div class="invalid-feedback">
                            Please enter employee's first name.
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="lname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lname" required/>
                        <div class="invalid-feedback">
                            Please enter employee's last name.
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="dept" class="form-label">Department</label>
                        <input type="text" class="form-control" id="dept" required/>
                        <div class="invalid-feedback">
                            Please enter employee's department.
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="team" class="form-label">Team</label>
                        <input type="text" class="form-control" id="team" required/>
                        <div class="invalid-feedback">
                            Please enter employee's team.
                        </div>
                        </div>

                        <div class="col-12">
                        <label for="jdate" class="form-label">Joining Date</label>
                        <input type="text" class="form-control" id="jdate" placeholder="DD/MM/YYYY" required/>
                        <div class="invalid-feedback">
                            Please enter employee's department.
                        </div>
                        </div>

                        <div class="col-md-5">
                        <label for="template" class="form-label">Template</label>
                        <select class="form-select" id="template" required>
                            <option value="">None</option>
                            <option>Butterfly</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid template.
                        </div>
                        </div>

                    </div>
                    <hr class="my-4"/>

                    <button class="w-100 btn btn-primary btn-lg" type="submit" onClick={sendEmail}>Register</button>
                    </form>
                </div>
            </main>
        </div>
  )
}