<template>
	<div>
		<div class="container">
			<div class="row justify-content-center text-left">
				<div class="col-md-5">
					<div class="form-group">
				    <label>User Primary key</label>
				    <input type="text" v-model="primaryKey" class="form-control">
				  </div>
				  <div>
				  	<button class="btn btn-primary" @click="getData()">
							Get details
				  	</button>
				  </div>
				  <div v-if="putData">
						<div class="form-group">
					    <label>Name</label>
					    <input type="text" v-model="putData.name" class="form-control">
					  </div>
					  <div class="form-group">
					    <label>Description</label>
					    <input type="text" v-model="putData.description" class="form-control">
					  </div>
					  <div class="form-group">
					    <label>Description_html</label>
					    <input type="text" v-model="putData.description_html" class="form-control">
					  </div>
					  <div class="form-group">
					    <label>Address</label>
					    <textarea v-model="putData.details.address" class="form-control"></textarea>
					  </div>
					  <div class="form-group">
					    <label>Gender</label>
					  </div>
					  <div class="form-check">
						  <input class="form-check-input" type="radio" name="gander" v-model="putData.details.gender" id="exampleRadios1" value="Male" checked>
						  <label class="form-check-label" for="exampleRadios1">
						    Male
						  </label>
						</div>
						<div class="form-check">
						  <input class="form-check-input" type="radio" name="gander" v-model="putData.details.gender" id="exampleRadios2" value="Female">
						  <label class="form-check-label" for="exampleRadios2">
						    Femlae
						  </label>
						</div>
					  <div class="form-group">
					    <label>Mobile</label>
					    <input type="text" v-model="putData.details.mobile" class="form-control">
					  </div>
					  <div class="form-check">
						  <input class="form-check-input" type="checkbox" v-model="putData.is_complete" id="defaultCheck1">
						  <label class="form-check-label" for="defaultCheck1">
						  	is_complete
						  </label>
						</div>
					  <div class="form-group">
					  	<button class="btn btn-primary" @click="updateData()">PUT DATA</button>
					  </div>				
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
				primaryKey: null,
				putData: null				}
		},
		methods: {
			getData: function() {
				if(!this.primaryKey) {
					alert('Please enter the primary key')
				} else {
					var vm = this;
					axios.get('https://checklister-api.herokuapp.com/items/'+this.primaryKey+'/')
		        .then(function (response) {
		          console.log(response.data);
		          vm.putData = response.data
		          console.log(this.putdata)
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
				}
			},
			updateData: function() {
				axios.put('https://checklister-api.herokuapp.com/items/'+this.primaryKey+'/', this.putData)
		        .then(function (response) {
		          console.log(response.data);
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
			}
		}
	}
</script>