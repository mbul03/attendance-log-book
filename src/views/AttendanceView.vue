<template>

    <div class="welcome">

        Welcome,<br>
        {{ attendant.name }}

    </div>

    <p @click="$router.push('/')">Back to home</p>

    Recent attendance
    <div class="attendants">

        <div class="attendant" v-for="(att, index) in attendants" :key="index">
            {{ att.timestamps.getDate() + '/' + att.timestamps.getMonth() + '/' + att.timestamps.getFullYear() + ', ' + att.timestamps.getHours() % 12 + ':' + att.timestamps.getMinutes() + ':' + att.timestamps.getSeconds() + ((att.timestamps.getHours() >= 12) ? ' PM' : ' AM') }}<br>
            {{ att.name }}<br>
            {{ att.nrp }}
        </div>

    </div>

</template>

<script>
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
    data() {
        return {
            attendants: [],
            attendant: {}
        }
    },

    mounted() {
        this.load();
    },

    methods: {
        async load() {
            this.attendants = [];
            this.attendant = {};

            const qs = await getDocs(collection(db, "attendants"));
            let i = 0;
            qs.forEach((doc) => {
                this.attendants = [ ...this.attendants, doc.data() ];
                console.log(new Date(doc.data().timestamps.seconds * 1000));
                this.attendants[i++].timestamps = new Date(doc.data().timestamps.seconds * 1000);
                if (doc.data().name === this.$route.params.name) this.attendant = doc.data();
            });
        }
    }
}
</script>
