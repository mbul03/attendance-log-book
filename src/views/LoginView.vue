<template>

    <form @submit.prevent="attSubmit">

        Name:<br>
        <input type="text" v-model="attendant.name" placeholder="Enter your name here"><br>

        NRP:<br>
        <input type="text" v-model="attendant.nrp" placeholder="Enter your NRP here"><br>

        <input type="submit" value="Submit">
    </form>

</template>

<script>
import db from "../firebase";
import { collection, Timestamp, addDoc } from "firebase/firestore";

export default {
    data() {
        return {
            attendant: {},
        }
    },

    methods: {
        async attSubmit() {
            this.attendant.timestamps = Timestamp.fromDate(new Date());
            console.log(this.attendant.timestamps);

            await addDoc(collection(db, "attendants"), this.attendant);

            this.$router.push('/after-submit/' + this.attendant.name);
            this.attendant = {};
        }
    }
}
</script>
