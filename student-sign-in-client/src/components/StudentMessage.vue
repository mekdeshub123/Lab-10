<template>
    <div class="hello">
        <!--write templet here-->
        <transition name="fade">
            <div class="alert alert-success" v-if="seeMessage">{{message}} {{name}}</div>
        </transition>
    </div>
</template>

<script>
    //create and export component here
    export default {
        name: 'StudentMessage',
        data() {
            return {
                seeMessage: false
            }
        },
        props: {
            message: String,
            name: String
        },
        watch: {
            message() {
                this.seeMessage = true
                setTimeout( ()=>{
                    this.seeMessage = false
                }, 3000)
            }
        }
    }

</script>

<style>
/*write andy styles for this component here*/
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>