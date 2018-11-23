<template>
	<div>
		<div class="container">
			<div class="row justify-content-center text-left">
				<div class="col-md-5">
					<div class="form-group">
				    <label>Name</label>
				    <input type="text" v-model="name" class="form-control">
				  </div>
				  <div class="form-group">
				    <label>Description</label>
				    <input type="text" v-model="description" class="form-control">
				  </div>
				  <div class="form-group">
				    <label>Description_html</label>
				    <input type="text" v-model="description_html" class="form-control">
				  </div>
				  <div class="form-group">
				    <label>Address</label>
				    <textarea v-model="details.address" class="form-control"></textarea>
				  </div>
				  <div class="form-group">
				    <label>Gender</label>
				  </div>
				  <div class="form-check">
					  <input class="form-check-input" type="radio" name="gander" v-model="details.gender" id="exampleRadios1" value="Male" checked>
					  <label class="form-check-label" for="exampleRadios1">
					    Male
					  </label>
					</div>
					<div class="form-check">
					  <input class="form-check-input" type="radio" name="gander" v-model="details.gender" id="exampleRadios2" value="Female">
					  <label class="form-check-label" for="exampleRadios2">
					    Femlae
					  </label>
					</div>
				  <div class="form-group">
				    <label>Mobile</label>
				    <input type="text" v-model="details.mobile" class="form-control">
				  </div>
				  <div class="form-check">
					  <input class="form-check-input" type="checkbox" v-model="is_complete" id="defaultCheck1">
					  <label class="form-check-label" for="defaultCheck1">
					  	is_complete
					  </label>
					</div>
				  <div class="form-group">
				  	<button class="btn btn-primary" @click="submitForm()">post</button>
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
				name: null,
				description: null,
				description_html: null,
				details: {
					address: null,
					gender: null,
					mobile: null
				},
				is_complete: false

			}
		},
		methods: {
			submitForm: function() {
				if(!this.name || !this.description || !this.description_html || !this.details.address || !this.details.gender || !this.details.mobile || !this.is_complete) {
					alert('please fill all the fields')
				} else {
					var postData = {
						name: this.name,
						description: this.description,
						description_html: this.description_html,
						details: {
							address: this.details.address,
							gender: this.details.gender,
							mobile: this.details.mobile
						},
						is_complete: this.is_complete
					}
					console.log(postData)
					axios.post('https://checklister-api.herokuapp.com/item/create/', postData)
		        .then(function (response) {
		          console.log(response.data);
		        })
		        .catch(function (error) {
		          console.log(error);
		        });
				}
			}
		}
	}
</script>