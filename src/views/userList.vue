<template>
	<div>
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-5" v-if="userDataList">
					<div v-for="(userlist, index) in userDataList">
						<h4>{{userlist.name}}</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				userDataList: null
			}
		},
		mounted () {
			this.userlist()
		},
		methods: {
			userlist: function() {
				var vm = this
				axios.get('https://checklister-api.herokuapp.com/item-list/')
		        .then(function (response) {
		          console.log(response.data);
		          vm.userDataList = response.data
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
			}
		}
	}
</script>