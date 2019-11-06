<template>
  <div class="login-container"
       :style="{backgroundImage: 'url(' + ImgTamsui + ')' ,
        backgroundRepeat: 'no-repeat' ,
         backgroundSize: '100% 100%'}">
    <div class="login-body">
    <div class="row margin-all-0 login-body">
      <div class="col-md-5 info-block" :style="{backgroundImage: 'url(' + ImgLogin + ')',
        backgroundRepeat: 'no-repeat'
       }">
      </div>
      <div cloass="col-md-7 login-block">
        <h1>登入</h1>
        <form @submit.prevent="login">
          <label>User Name</label>
          <br>
          <input type="text" v-model.trim="userName" placeholder="reacrt" required>
          <br>
          <label>Password</label>
          <br>
          <input type="password" v-model.trim="password" placeholder="express" required>
          <br>
          <button  id="login-button" type="submit">Log In</button>
        </form>
        <div class="row hidden-xs hidden-sm">
          <div class="col-xs-3 col-sm-4 margin-bottom-5"><hr></div>
          <span class="col-xs-6 col-sm-4" style="height: 42px; line-height: 42px; text-align: center; padding: 0; color: white; font-size: 8px;">
            Or sign in with
          </span>
          <div class="col-xs-3 col-sm-4 margin-bottom-5"><hr></div>
        </div>
        <b-button v-google-signin-button="clientId" class="google-signin-button">
          <div class="icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g>
          </svg>
           </div>
        </b-button>
      </div>
     </div>
     </div>
  </div>
</template>
<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
import ImgLogin from '../assets/images/imglogin.png'
import ImgTamsui from '../assets/images/tamsui.jpg'
export default {
  directives: {
    GoogleSignInButton
  },
  data () {
    return {
      ImgLogin: ImgLogin,
      ImgTamsui: ImgTamsui,
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
      localStorage.setItem('token', 'ImLogin')
      localStorage.setItem('Authorization', 'BasicGoogle ' + idToken)
      this.$router.push('/')
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>
<style lang="scss" scoped>
.login-body {
  width: 95%;
  height: 60%;
  max-width: 1000px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.google-signin-button {
  color: white;
  background-color: rgb(33, 212, 243);
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.login-container {
  width: 100%;
  height: 100%;
  // max-width: 1000px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.margin-all-0 {
    margin: 0px;
}
.login-block, .info-block {
    min-height: 560px;
    min-width:300px;
    width: 100%;
}
button#login-button {
    display: block;
    width: 100%;
    height: 32px;
    padding: 0;
    background-color: #2796db;
    border: none;
    border-radius: 2px;
    margin: 15px 0;
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
}
.container{
    min-height: 100%;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

h1{
  color:white;
}
</style>
