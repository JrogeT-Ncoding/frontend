<template>
  <!-- Modal -->
  <div class="modal fade" id="authModal" data-bs-backdrop="static" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <button id="authModalClose" type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
          <h5 class="modal-title mx-auto" id="exampleModalLabel">
            Log in or sign up
          </h5>
        </div>
        <div class="modal-body mb-4">
          <div class="container-fluid">
            <div class="row">
              <h4 class="text-center">
                {{ newUser ? 'Register as a new student' : 'Are you an existing student?' }}
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
                  <input v-model="user.fullName" type="text" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Full name
                    </small>
                  </label>
                </div>
                <!--Email-->
                <div class="form-floating mb-3">
                  <input v-model="user.email" type="email" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Username (Email Address)
                    </small>
                  </label>
                </div>
                <!--Password-->
                <div class="form-floating">
                  <input v-model="user.password" type="password" class="form-control form-control-sm" placeholder="x">
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
                  <input v-model="user.passwordConfirmation" type="password" class="form-control form-control-sm" placeholder="x">
                  <label>
                    <small>
                      Confirm your Password
                    </small>
                  </label>
                </div>
                <!--Country-->
                <div v-if="newUser" class="form-floating">
                  <select v-model="user.country" class="form-select form-select-sm">
                    <option selected disabled>Select you country</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                  </select>
                  <label>
                    <small>
                      Country
                    </small>
                  </label>
                </div>
                <!--Continue-->
                <div class="form-floating my-3 d-grid gap-2 p-0">
                  <button @click="authenticate" class="btn badge rounded-pill text-bg-dark py-2">
                    Continue
                  </button>
                </div>
              </div>
              Or
              <!--Third party auth-->
              <div class="col ms-5" style="font-size: 1rem;">
                <div class="row">
                  <button type="button" class="btn bg-gray d-flex my-2">
                    <i class="bi bi-linkedin ms-0"></i>
                    <label class="mx-auto">
                      Continue with Linkedin
                    </label>
                  </button>
                  <button type="button" class="btn bg-gray d-flex my-2">
                    <i class="bi bi-facebook ms-0"></i>
                    <label class="mx-auto">
                      Continue with Facebook
                    </label>
                  </button>
                  <button type="button" class="btn bg-gray d-flex my-2">
                    <i class="bi bi-instagram ms-0"></i>
                    <label class="mx-auto">
                      Continue with Instagram
                    </label>
                  </button>
                  <button type="button" class="btn bg-gray d-flex my-2">
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
      newUser: false,
      user: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        country: "Bolivia"
      }
    };
  },
  methods: {
    toggleNewUser() {
      this.newUser = !this.newUser
    },
    authenticate() {
      if (this.newUser) {
        if (this.user.password !== this.user.passwordConfirmation) {
          alert("Passwords do not match");
          return;
        }
        this.$store.dispatch("register", this.user);
      } else {
        this.$store.dispatch("login", this.user);
      }
      let close = document.getElementById("authModalClose");
      close.click();
    }
  }
}
</script>