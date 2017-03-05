import config from '../config/environment';

export function initialize() {
  Stripe(config['stripe'].key);
}

export default {
  name: 'stripe',
  initialize: initialize
};
