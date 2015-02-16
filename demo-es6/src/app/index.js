'use strict';

import './vendor';
import './config/bootstrap';

angular.module('demo', [
  /* angular */
  'ngAnimate',
  'ngSanitize',
  'ngResource',
  /* 3rd party */
  'ui.router',
  'lumx'
]);

/* config */
import './config/router.config';
import './config/constants';

/* modules */
import './modules';
