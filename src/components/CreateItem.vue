<template>
<div>
    <ul>
    <li v-for="(item, index) in item_list" :key="index">
        {{ item.id }} {{ item.name }}
    </li>
    </ul>

    <form>
      <label>Item Add</label>
      <input type="text" v-model="name"/>
      <input type="text" v-model="description"/>
      <input type="text" v-model="description_html"/>
      <input type="text" v-model="details"/>
      <input type="text" v-model="is_complete"/>
      <input type="submit" value="create" v-on:click="sendData"/>
    </form>

</div>
</template>

<script>
import axios from "axios";

export default{
    name: "ItemCreate",
    data(){
        return{
            item_list:[],
        }
    },
    mounted(){
        axios
        .get('http://localhost:8000/item-list/')
        .then(function(response){
            this.item_list = response.data
        }.bind(this))
    },
    methods: {
        sendData: function(){
            event.preventDefault()
            var postData = {
                name: this.item_name,
                description: this.description,
                description_html: this.description_html,
                details:this.details,
                is_complete:this.is_complete,
            }
            axios
             .post('http://localhost:8000/item/create/', postData)
        }
    }
}
</script>