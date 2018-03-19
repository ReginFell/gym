<template>
    <div align="center">
        <logo class="icon" width="320" height="255"/>
        <h1>Регистрация</h1>
        <form @submit="validation">

            <div class="row justify-content-md-center">
                <div class="form-group col-lg-4">
                    <input type="text" v-bind:class="isEmailValid" class="form-control input-normal" placeholder="Email"
                           v-model="registration.email" required>
                    <div class="invalid-feedback">{{error.email}}</div>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="form-group col-md-4">
                    <input type="text" v-bind:class="isUsernameValid" class="form-control input-normal" placeholder="Username"
                           v-model="registration.username" required>
                    <div class="invalid-feedback">{{error.username}}</div>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="form-group is-valid col-md-4">
                    <input type="text" class="form-control input-normal" placeholder="Password"
                           v-bind:class="isPasswordValid" v-model="registration.password" required>
                    <div class="invalid-feedback">{{error.password}}</div>
                </div>
            </div>

            <div class="row justify-content-md-center">
                <div class="form-group is-valid col-md-4">
                    <input type="text" class="form-control input-normal" placeholder="Password" v-bind:class="isConfirmationPasswordValid"
                           v-model="registration.confirmation_password" required>
                    <div class="invalid-feedback">{{error.confirmation_password}}</div>
                </div>
            </div>

            <br/>
            <div class="form-group">
                <button class="btn btn-primary col-md-4">Регистрация</button>
            </div>
        </form>
        Ну или
        <router-link to="/">Войти</router-link>
    </div>
</template>

<script>
    import logo from '../../resources/logo.svg';
    import {validateEmail, validatePassword, validateUsername, validatePasswordMatch} from '../../utils/validator.js'

    export default {
        components: {logo},
        data() {
            return {
                error: {email: "", username: "", password: "", confirmation_password: ""},
                registration: {email: "", username: "", password: "", confirmation_password: ""}
            }
        },
        methods: {
            register() {
                let uri = 'https://gym-back.herokuapp.com/user/registration';
                console.log(this.registration);
                this.axios.post(uri, this.registration).then((response) => {
                    console.log(response)
                })
            },
            validation(e) {
                let validation_failed = false;
                if (!validateEmail(this.registration.email)) {
                    validation_failed = true;
                    this.error.email = String('Похоже что Email введен некорректно');
                }

                if (!validatePassword(this.registration.password)) {
                    validation_failed = true;
                    this.error.password = String("Пароль должен содержать минимум 6 символов");
                }

                if (!validateUsername(this.registration.username)) {
                    validation_failed = true;
                    this.error.username = String("Юзернейм должен содержать минимум 6 символов");
                }

                if (!validatePasswordMatch(this.registration.password, this.registration.confirmation_password)) {
                    validation_failed = true;
                    this.error.confirmation_password = String("Пароли не совпадают");
                }

                if (!validation_failed) {
                    this.register();
                }
                e.preventDefault();
            },

        },
        computed: {
            isEmailValid() {
                return validateEmail(this.registration.email) || !this.error.email ? '' : "is-invalid";
            },
            isUsernameValid() {
                return validateUsername(this.registration.username) || !this.error.username ? '' : "is-invalid";
            },
            isPasswordValid() {
                return validatePassword(this.registration.password) || !this.error.password ? '' : "is-invalid";
            },
            isConfirmationPasswordValid() {
                return validatePasswordMatch(this.registration.password, this.registration.confirmation_password) || !this.error.confirmation_password ? '' : "is-invalid";
            }
        }
    }

</script>