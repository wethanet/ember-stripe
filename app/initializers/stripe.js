import config from '../config/environment';

export function initialize() {
  this._super(...arguments);
  
  Stripe(config['stripe'].key);
}

export default {
  name: 'stripe',
  initialize: initialize
};
