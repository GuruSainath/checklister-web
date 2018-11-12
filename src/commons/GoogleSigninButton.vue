<template>
<div>
<h1>hello</h1>
  <button ref="signinBtn" class="btn btn-social btn-block" :disabled="loginDisableToggle">
    <div v-show="!loginDisableToggle">
      <slot></slot>    
    </div>
    <div v-show="loginDisableToggle" class="pr-5 pl-5">
      <font-awesome-icon :icon="['fas','spinner']" spin /> Loading...
    </div>
  </button>
  </div>
</template>

<script>
export default{
  data() {
    return {
      loginDisableToggle: false
    }
  },
// ugeNyUBNHKRNKrZlMEr6V9X3
  mounted () {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: '97ps.googleusercontent.com',
      })
      auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
        this.loginDisableToggle = true
        this.$emit('done', googleUser)
      }, error => {
        console.log(error)
        console.log("here error message will come")
        this.loginDisableToggle = false
      })
    })
  }
}
</script>

<style>
.btn-sign-in {
  background: #fff;
  font: 16px/22px Roboto;
  padding: 4px 8px;
  border: 1px solid #ccc;
  display: inline-block;
  cursor: pointer;
}
</style>