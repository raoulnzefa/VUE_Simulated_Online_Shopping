<template>
    <div>
        <div class="my_l">
		<header class="top_bar">
		    <a onclick="window.history.go(-1)" class="icon_back"></a>
		    <h3 class="cartname">JD Login</h3>
		</header>
		<main class="user_login_box">
		    <div class="login_dialog">　
		        <div class="_username">
		            <input type="text" name="username" placeholder="User name" class="user_input" v-model="userName"/>
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="password" placeholder="Password" class="user_input" v-model="pwd"/>
		        </div>

		        <div class="login_box">
		            <a @click="goLogin()" class="btn_login">LOGIN</a>
		        </div>
		        <!-- <div class="go_reg_box">
		            <router-link tag="span" to="/register"Express Register</router-link>
		        </div> -->
		    </div>
		</main>
	</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            userName:'',
            pwd:''
        }
    },
    methods: {
        goLogin(){
            if (this.userName ==''){
                alert('Please input user name');
            }else if (this.pwd=''){
                alert('Please input pass word');
            }else{
                this.$http.post('/login',{
                    loginName : this.userName,
                    loginPawd : this.pwd
                }).then((res) => {
                    if (res.status == 200){
                        this.userInfo =  res.data;
                        if (this.userInfo.status == 1){
                            window.sessionStorage.userInfo = JSON.stringify(this.userInfo);
                            this.$router.push('/mine');
                        }else{
                            alert(this.userInfo.msg);
                        }
                    }else{
                        alert('Request failed.')
                    }
                }, 
                (err) => {
                    console.log(err);
                } )
            }
        }
        
    }
}
</script>
<style>
    @import '../assets/css/login.css'
</style>
