<template>
  <div>
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <label>User Name</label>
      <input type="text" v-model.trim="userName" required>
      <br>
      <label>Password</label>
      <input type="password" v-model.trim="password" required>
      <br>
      <button type="submit">Log In</button>
    </form>

     <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
  </div>
</template>
<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    GoogleSignInButton
  },
  data () {
    return {
      userName: '',
      password: '',
      clientId: '234148537140-bims7fgocleifgicctito7dkh9649uk7.apps.googleusercontent.com'
    }
  },
  methods: {
    login () {
      var xhr = new XMLHttpRequest()
      xhr.open('POST', process.env.BASE_API + '/api/auth/login', true)
      // 发送合适的请求头信息
      xhr.setRequestHeader('Content-type', 'application/json')
      // xhr.withCredentials = true
      xhr.onload = function () { }// 请求结束后,在此处写处理代码
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var res = xhr.responseText
            try {
              res = JSON.parse(xhr.responseText)
              localStorage.setItem('token', 'ImLogin')
              localStorage.setItem('Authorization', 'Basic ' + res.token)
              this.$router.push('/')
            } catch (e) {}
          } else {
            console.log(xhr.responseText)
          }
        }
      }
      xhr.send(JSON.stringify({ 'username': this.userName, 'password': this.password }))
    },
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>
<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
