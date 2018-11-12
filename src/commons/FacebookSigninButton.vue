<template>
  <!-- <button @click='doLogin' class="btn btn-block btn-social"><slot></slot></button> -->
  <button @click='doLogin' class="btn btn-social btn-block" :disabled="loginDisableToggle">
    <div v-show="!loginDisableToggle">
      <slot></slot>    
    </div>
    <div v-show="loginDisableToggle" class="pr-5 pl-5">
      <font-awesome-icon :icon="['fas','spinner']" spin /> Loading...
    </div>
  </button>
</template>

<script>
export default{
  data() {
    return {
      loginDisableToggle: false
    }
  },
  methods: {
    doLogin: function() {
      this.loginDisableToggle = true
      var vm = this
      window.FB.login(function (response) {
        if (response.authResponse) {
          vm.facebookLogin(response.authResponse, function() {
            // vm.$router.push({ name: 'home' })
          })
        } else {
          vm.loginDisableToggle = false
        }
      }, {scope: 'public_profile,email,user_friends'})
    },
    facebookLogin: function() {
      window.FB.api(
        '/me',
        'GET',
        {'fields': 'email'},
        function (FBResponse) {
          console.log(FBResponse);
          var postData = {
            email: FBResponse.email,
            provider: "FACEBOOK",
            extra: {
              id: FBResponse.id,
            }
          }
          console.log(postData);
        //   vm.$store.dispatch('socialAuth', postData)
          this.loginDisableToggle = false
        }
      );
    }
  }
}
</script>

<style>
</style>