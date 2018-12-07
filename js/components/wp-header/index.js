import axios from 'axios';
export default {
  template: require( './template.html' ),
  props: {
    siteName: {
      type: String,
      default: "My First Wordpress Site"
    }
  },
  mounted() {    
    var _this = this;    
    axios.get('/wp-json/wp/v2/pages?per_page=5')
       .then(function (response) {     
         _this.pages = response.data;
       })
       .catch(function (error) {
         console.log(error);
       });
  }
};
