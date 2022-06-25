<template>
  <!-- Modal -->
  <div class="modal fade" id="authModal" data-bs-backdrop="static" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
          <h5 class="modal-title mx-auto" id="exampleModalLabel">
            Log in or sign up
          </h5>
        </div>
        <div class="modal-body mb-4">
          <div class="container-fluid">
            <div class="row">
              <h4 class="text-center">
                Register as a new student
              </h4>
            </div>
            <!--Register or Login-->
            <div class="row justify-content-center my-4">
              <div class="col-5 d-grid gap-2 p-0">
                <button @click="toggleNewUser" class="btn badge rounded-pill text-bg-light py-2" :class="!newUser ? 'border border-dark bg-white' : ''">
                  Login
                </button>
              </div>
              <div class="col-5 d-grid gap-2 p-0">
                <button @click="toggleNewUser" class="btn badge rounded-pill text-bg-light py-2" :class="newUser ? 'border border-dark bg-white' : ''">
                  Sign Up
                </button>
              </div>
            </div>
            <div class="row align-items-center mt-2 fw-light" style="font-size: 0.75rem;">
              <!--Manual auth-->
              <div class="col me-4" style="font-size: 1rem;">
                <!--Full name-->
                <div v-if="newUser" class="form-floating mb-3">
                  <input type="text" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Full name
                    </small>
                  </label>
                </div>
                <!--Email-->
                <div class="form-floating mb-3">
                  <input type="email" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Username (Email Address)
                    </small>
                  </label>
                </div>
                <!--Password-->
                <div class="form-floating">
                  <input type="password" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Your Password
                    </small>
                  </label>
                </div>
                <small v-if="newUser" >
                    <strong>
                      Minimum 6 characters
                    </strong>
                  </small>
                <div class="row">
                  <label v-if="!newUser" class="text-end mt-2" style="font-size: 0.6rem;">
                    <strong>
                      Forgot password?
                    </strong>
                  </label>
                </div>
                <!--Confirm Password-->
                <div v-if="newUser" class="form-floating my-3">
                  <input type="password" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Confirm your Password
                    </small>
                  </label>
                </div>
                <!--Country-->
                <div v-if="newUser" class="form-floating">
                  <select class="form-select form-select-sm">
                    <option selected disabled>Select you country</option>
                    <option value="1">Argentina</option>
                    <option value="2">Bolivia</option>
                    <option value="3">Brazil</option>
                    <option value="4">Chile</option>
                    <option value="5">Colombia</option>
                    <option value="6">Ecuador</option>
                    <option value="8">Paraguay</option>
                    <option value="9">Peru</option>
                    <option value="10">Uruguay</option>
                    <option value="11">Venezuela</option>
                  </select>
                  <label>
                    <small>
                      Country
                    </small>
                  </label>
                </div>
                <!--Continue-->
                <div class="form-floating my-3 d-grid gap-2 p-0">
                  <button class="btn badge rounded-pill text-bg-dark py-2">
                    Continue
                  </button>
                </div>
              </div>
              Or
              <!--Third party auth-->
              <div class="col ms-5" style="font-size: 1rem;">
                <div class="row">
                  <button type="button" class="btn btn-gray d-flex my-2">
                    <i class="bi bi-linkedin ms-0"></i>
                    <label class="mx-auto">
                      Continue with Linkedin
                    </label>
                  </button>
                  <button type="button" class="btn btn-gray d-flex my-2">
                    <i class="bi bi-facebook ms-0"></i>
                    <label class="mx-auto">
                      Continue with Facebook
                    </label>
                  </button>
                  <button type="button" class="btn btn-gray d-flex my-2">
                    <i class="bi bi-instagram ms-0"></i>
                    <label class="mx-auto">
                      Continue with Instagram
                    </label>
                  </button>
                  <button type="button" class="btn btn-gray d-flex my-2">
                    <i class="bi bi-google ms-0"></i>
                    <label class="mx-auto">
                      Continue with Google
                    </label>
                  </button>
                  <label class="text-center" style="font-size: 0.6rem;">
                    <strong>
                      Protected by reCAPTCHA and Google's Privacy Policy and Terms
                    </strong>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAuthModal",
  data() {
    return {
      newUser: true
    };
  },
  methods: {
    toggleNewUser() {
      this.newUser = !this.newUser;
    }
  }
}
</script>