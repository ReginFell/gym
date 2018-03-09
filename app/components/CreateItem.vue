<template>
    <div align="center">
        <logo class="icon" width="320" height="255"/>
        <h1>Авторизация</h1>
        <form @submit="validation">
            <div class="row justify-content-md-center">
                <div class="form-group col-lg-3">
                    <input type="text" v-bind:class="isEmailValid" class="form-control input-normal" placeholder="Email"
                           v-model="authorization.email" required>
                    <div class="invalid-feedback">{{login_error}}</div>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="form-group is-valid col-lg-3">
                    <input type="text" class="form-control input-normal" placeholder="Password"
                           v-bind:class="isPasswordValid" v-model="authorization.password" required>
                    <div class="invalid-feedback">{{password_error}}</div>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    import logo from '../resources/logo.svg';

    export default {
        components: {logo},
        data() {
            return {
                validation_failed: false,
                login_error: {},
                password_error: {},
                authorization: {}
            }
        },
        methods: {
            login() {
                let uri = 'https://gym-back.herokuapp.com/user/login';
                console.log(this.item);
                this.axios.post(uri, this.item).then((response) => {
                    console.log(response)
                })
            },
            validation(e) {
                this.validation_failed = false;
                if (!validateEmail(this.authorization.email)) {
                    this.validation_failed = true;
                    this.login_error = "Похоже что Email введен некорректно"
                }

                if (!validatePassword(this.authorization.password)) {
                    this.validation_failed = true;
                    this.password_error = "Пароль должен содержать минимум 6 символов"
                }
                if (!this.validation_failed) {
                    login();
                }
                e.preventDefault();
            },

        },
        computed: {
            isEmailValid() {
                return validateEmail(this.authorization.email) || !this.validation_failed ? '' : "is-invalid";
            },
            isPasswordValid() {
                return validatePassword(this.authorization.password) || !this.validation_failed ? '' : "is-invalid";
            }
        }
    }

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        return String(password).length >= 6;
    }

</script>