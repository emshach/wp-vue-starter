import store from '../../lib/store';
import axios from 'axios';
import wpapix from '../../lib/wpapi';
export default {
  template: require( './template.html' ),
  props: {
    levels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sstate: store.state,
      selectedLevel: false,
      storedLevels: false,
      wait: false,
      confirmed: false,
      fetching: false
    };
  },
  mounted() {
    if (! this.levels.length )
      wp.api.loadPromise.done(() => {
        var levels = new wpapix.Membership({ path: 'levels' });
        levels.fetch().done( res => {
          console.log( 'got membership levels', res );
          this.storedLevels = res;
        });
      });
  },
  methods: {
    setLevel( level ) {
      if (! this.user ) {
        // redirect to login, then continue
      }
      this.selectedLevel = level;
    },
    unsetLevel() {
      this.selectedLevel = false;
    }
  },
  computed: {
    user() {
      return this.sstate.user;
    },
    memberLevels() {
      return ( this.levels.length ? this.levels : this.storedLevels );
    },
    currentLevel() {
      return this.user && this.user.membership || false;
    },
    getConfirmation() {
      var membership = wpapix.Membership({ path: 'my-level' });
      this.fetching = false;
      this.wait = window.setInterval( () => {
        if ( this.fetching )
          return;
        this.fetching = true;
        membership.fetch({
          success: ( model, res, opt ) => {
            if ( res && res.id != this.currentLevel.id ) {
              this.confirmed = true;
              this.user.membership = res;
              window.clearInterval( this.wait );
              this.wait = false;
              window.setTimeout( () => { this.fetching = false; }, 250 );
            }
          },
          error: ( model, res, opt ) => {
            this.fetching = false;
          }
        });
      }, 2500);
    }
  }
};
