<template>
  <!-- Modal -->
  <div class="modal fade" id="enrollModal" data-bs-backdrop="static" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body mb-4">
          <div class="container-fluid">
            <!--Course name-->
            <div class="row">
              <h4 class="text-center">
                Application Process - {{ course.name }}
              </h4>
            </div>
            <!--Steps-->
            <div class="row justify-content-between my-4 d-flex">
              <div class="col d-inline-flex">
                <button class="btn badge rounded-pill text-bg-dark me-2">
                  1
                </button>
                Personal Information
                <button class="btn badge rounded-pill bg-gray text-white ms-auto me-2">
                  3
                </button>
                Payment Plan
              </div>
            </div>
            <!--Dates-->
            <div class="row bg-gray border border-gray border-0 rounded py-2">
              <label class="col-12 text-center">
                Start: May '21 | Graduation: Dec '21
              </label>
            </div>
            <!--Step name-->
            <div class="row">
              <label class="text-center text-dark my-2">
                {{ stepName() }}
              </label>
              <label class="text-center text-muted">
                <small>
                  Have questions about the application? Want some more info? Call us! 65170024
                </small>
              </label>
            </div>
            <div v-if="step===1">
              <!--Personal inputs-->
              <div class="row align-items-center mt-4 fw-light" style="font-size: 0.75rem;">
                <!--Date of Birth-->
                <div class="col-md">
                  <div class="form-floating">
                    <input v-model="user.birthDate" type="date" class="form-control" placeholder="x">
                    <label>Date of birth</label>
                  </div>
                </div>
                <!--Gender-->
                <div class="col-md">
                  <div class="form-floating">
                    <select v-model="user.gender" class="form-select">
                      <option selected disabled>Select an option</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                    <label>Gender</label>
                  </div>
                </div>
              </div>
              <!--Address-->
              <div class="row align-items-center mt-4 fw-light" style="font-size: 0.75rem;">
                <div class="col-md">
                  <div class="form-floating">
                    <input v-model="user.address" type="text" class="form-control" placeholder="x">
                    <label>Address</label>
                  </div>
                </div>
              </div>
              <!--Phone Number-->
              <div class="row align-items-center mt-4 fw-light" style="font-size: 0.75rem;">
                <div class="col-md">
                  <div class="form-floating">
                    <input v-model="user.phone" type="text" class="form-control" placeholder="x">
                    <label>Phone Number</label>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-4 mb-5 fw-light" style="font-size: 0.75rem;">
              <!--Preferred Language-->
              <div class="col-md">
                <div class="form-floating">
                  <select  v-model="user.preferredLanguage" class="form-select">
                    <option selected disabled>Select an option</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Other">Other</option>
                  </select>
                  <label>Preferred Language</label>
                </div>
              </div>
              <!--Education Level-->
              <div class="col-md">
                <div class="form-floating">
                  <select v-model="user.educationLevel" class="form-select">
                    <option selected disabled>Select an option</option>
                    <option value="Bachelor Degree">Bachelor Degree</option>
                    <option value="Master Degree">Master Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <label>Education Level</label>
                </div>
              </div>
            </div>
            </div>
            <div v-if="step===2">
              <div class="row">
                <div @click="setPayment(1)" class="col border border-dark rounded-4 m-2 p-3 text-center payment-option" :class="paymentOption==1?'bg-gray':''" >
                  <h5>
                    PIF (pay in full)
                  </h5>
                  <label class="text-muted">
                    <small>
                      $6795
                    </small>
                  </label>
                  <h5>
                    <strong>
                      $4795
                    </strong>
                  </h5>
                  <hr class="text-muted">
                  <h6>
                    Save $1500 in tuition <br>
                    No processing fees
                  </h6>
                </div>
                <div @click="setPayment(2)" class="col border border-dark rounded-4 m-2 p-3 text-center payment-option" :class="paymentOption==2?'bg-gray':''" >
                  <h5>
                    16 installments
                  </h5>
                  <label class="text-muted">
                    <small>
                      of $399 / Month
                    </small>
                  </label>
                  <hr class="text-muted">
                  <h6>
                    Save $500 in tuition <br>
                    No processing fees <br>
                    0% interest rate
                  </h6>
                </div>
              </div>
              <div class="row">
                <div @click="setPayment(3)" class="col border border-dark rounded-4 m-2 p-3 text-center payment-option" :class="paymentOption==3?'bg-gray':''" >
                  <h5>
                    24 installments
                  </h5>
                  <label class="text-muted">
                    <small>
                      of $299 / Month
                    </small>
                  </label>
                  <hr class="text-muted">
                  <h6>
                    Save $250 in tuition <br>
                    No processing fees <br>
                    5.99% interest rate
                  </h6>
                </div>
                <div @click="setPayment(4)" class="col border border-dark rounded-4 m-2 p-3 text-center payment-option" :class="paymentOption==4?'bg-gray':''">
                  <h5>
                  48 installments
                </h5>
                <label class="text-muted">
                  <small>
                    of $199 / Month
                  </small>
                </label>
                <hr class="text-muted">
                <h6>
                  No processing fees <br>
                  11.99% interest rate
                </h6>
              </div>
              </div>
            </div>
            <!--Steps-->
            <div class="row justify-content-between mt-5 d-flex border-top border-gray pt-3">
              <div class="col d-inline-flex">
                <button v-if="step==1" id="enrollModalClose" class="btn rounded-pill btn-dark" data-bs-dismiss="modal">
                  Close
                </button>
                <button v-else @click="prevStep" class="btn rounded-pill btn-dark">
                  Back
                </button>
                <button v-if="step==2" @click="nextStep" class="btn rounded-pill btn-dark ms-auto" data-bs-dismiss="modal">
                  Submit Enrollment
                </button>
                <button v-else-if="step==3" id="enrollModalClose" class="btn rounded-pill btn-dark ms-auto" data-bs-dismiss="modal">
                  Submit Enrollment
                </button>
                <button v-else @click="nextStep" class="btn rounded-pill btn-dark ms-auto">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AppEnrollModal",
  data() {
    return {
      step: 1,
      paymentOption: 0,
    };
  },
  methods: {
    toggleNewUser() {
      this.newUser = !this.newUser
    },
    nextStep() {
      if(this.step === 1){
        this.$store.dispatch("updateUser", this.user);
      }
      if(this.step === 2){
        this.step++;
        this.$store.dispatch("enroll", this.course.id).then(() => {
          this.step=1;
          let close = document.getElementById("enrollModalClose");
          close.click();
        })
      }
      if (this.step < 2) {
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    stepName() {
      switch (this.step) {
        case 1:
          return "Personal Information";
        case 2:
          return "Payment Plan";
      }
    },
    setPayment(paymentOption) {
      this.paymentOption = paymentOption;
    },
  },
  computed: {
    ...mapGetters({
      course: "courseToEnroll",
      user: "user",
    }),
  }
}
</script>