<template>
  <div>

  <GoogleSignInButton @done="onUserGoogleLoggedIn">
    <span class="social-icon">
      <img src="https://i.imgur.com/C8OyfM5.png" width="20px;">
    </span>
    <span class="social-text">
      Sign in with Google
    </span>
  </GoogleSignInButton>
  <FacebookSignInButton onlogin="checkFacebookLoginState()">
    <span class="social-icon">
      <font-awesome-icon :icon="['fab','facebook']" style="color: #4C69BA; width: 19px; height: 19px;"  />
    </span>
    <span class="social-text">
      Sign in with Facebook
    </span>
  </FacebookSignInButton>
  </div>

</template>

<script>
import GoogleSignInButton from "@/commons/GoogleSigninButton.vue"
import FacebookSignInButton from "@/commons/FacebookSigninButton.vue"

export default {
  name: 'signup',
  data: function() {
    return {

    }
  },
  components: {
     GoogleSignInButton, FacebookSignInButton
  },
  methods: {
    onUserGoogleLoggedIn (user) {
      const profile = user.getBasicProfile();
      var id_token = user.getAuthResponse().id_token;
      // sending post request
      var postData= {
        email: profile.getEmail(),
        provider: 'GOOGLE',
        extra: {
          id_token: id_token,
          name: profile.getName(),
          profile_img: profile.getImageUrl(),
        }
      }
      this.$store.dispatch('socialAuth', postData)
    },
    checkFacebookLoginState: function() {
      Window.FB.getLoginStatus(function() {
        // statusChangeCallback(response);
      });
    },
    signout: function() {
      localStorage.clear();
      location.reload()
    }
  }
}
</script>

<style>
</style>