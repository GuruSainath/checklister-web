<template>
<div>
    <div class="container" style="padding: 20px 0px;">
        <h1>ds </h1>
        <FacebookSignInButton onlogin="checkFacebookLoginState()">
            <span class="social-icon">
            <!-- <font-awesome-icon :icon="['fab','facebook']" style="color: #4C69BA; width: 19px; height: 19px;"  /> -->
            </span>
            <span class="social-text">
            Sign in with Facebook
            </span>
        </FacebookSignInButton>
    </div>
    </div>
</template>

<script>
import FacebookSignInButton from "@/commons/FacebookSigninButton.vue"
export default {
  name: 'signup',
  data: function() {
    return {
    }
  },
  components: {
   FacebookSignInButton
  },
  methods: {
    checkFacebookLoginState: function() {
      Window.FB.getLoginStatus(function() {
        // statusChangeCallback(response);
      });
    },
  }
}
</script>

<style>
</style>