<template>
    <div align="center">
        <Logo class="icon" width="320" height="255"/>
        <h1>Login</h1>
        <form v-on:submit.prevent="addItem">
            <div class="row">
                <div class="form-group col-xs-2" align="center">
                    <label>Username</label>
                    <input type="text" class="form-control input-sm" v-model="item.login">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-xs-2" align="center">
                    <label>Password</label>
                    <input type="text" class="form-control input-sm" v-model="item.password">
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
    import Logo from '../resources/logo.svg';

    export default {
        components: {Logo},
        data() {
            return {
                item: {}
            }
        },
        methods: {
            addItem() {
                let uri = 'https://gym-back.herokuapp.com/items/add';
                console.log(this.item);
                this.axios.post(uri, this.item).then((response) => {
                    console.log(response)
                })
            }
        }
    }


</script>