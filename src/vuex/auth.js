import axios from 'axios';
import Cookie from 'js-cookie';
import router from '../router.js';

export default {
  state: {
    isUserLogged: false,
    userDetails: Cookie.get('user_details')
  },
  mutations: {
    USER_LOGIN_MUTATION: function (state, response) {
      state.isUserLogged = response;
    },
  },
  actions: {
    socialAuth: function (context, postData) {
      return axios.post('', postData)
        .then(function (response) {
          Cookie.set('user_details', response.data);
          context.commit('USER_LOGIN_MUTATION', true);
          router.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    signout: function(context) {
      context.commit('USER_LOGIN_MUTATION', false);
      router.push('/signin');
    }
  },
};