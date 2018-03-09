<template>
    <div align="center">

        <logo class="icon" width="320" height="255"/>

        <h1>Авторизация</h1>
        <form @submit="validation">

            <div class="row justify-content-md-center">
                <div class="form-group col-md-4">
                    <input type="text" v-bind:class="isEmailValid" class="form-control input-normal" placeholder="Email"
                           v-model="authorization.email" required>
                    <div class="invalid-feedback">{{email_error}}</div>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="form-group col-md-4">
                    <input type="text" class="form-control input-normal" placeholder="Password" v-bind:class="isPasswordValid"
                           v-model="authorization.password" required>
                    <div class="invalid-feedback">{{password_error}}</div>
                </div>
            </div>

            <br/>
            <div class="form-group">
                <button class="btn btn-primary col-md-4">Вход</button>
            </div>

        </form>
        Ну или
        <router-link to="/registration">Регистрация</router-link>
    </div>

</template>

<script>
    import logo from '../../resources/logo.svg';
    import {validateEmail, validatePassword} from '../../utils/validator.js'

    export default {
        components: {logo},
        data() {
            return {
                email_error: "",
                password_error: "",
                authorization: {email: "", password: ""}
            }
        },
        methods: {
            login() {
                let uri = 'https://gym-back.herokuapp.com/user/auth';
                console.log(this.authorization);
                this.axios.post(uri, this.authorization).then((response) => {
                    console.log(response)
                })
            },
            validation(e) {
                let validation_failed = false;
                if (!validateEmail(this.authorization.email)) {
                    validation_failed = true;
                    this.email_error = "Похоже что Email введен некорректно"
                }

                if (!validatePassword(this.authorization.password)) {
                    validation_failed = true;
                    this.password_error = "Пароль должен содержать минимум 6 символов"
                }

                if (!validation_failed) {
                    this.login();
                }

                e.preventDefault();
            },

        },
        computed: {
            isEmailValid() {
                return validateEmail(this.authorization.email) || !this.email_error ? '' : "is-invalid";
            },
            isPasswordValid() {
                return validatePassword(this.authorization.password) || !this.password_error ? '' : "is-invalid";
            }
        }
    }

</script>