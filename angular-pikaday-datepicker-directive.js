/*!
 * AngularJS Pikaday Datepicker Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
angular.module('angular.directives-pikaday-datepicker', []).directive('angPikadayDatepicker', [function () {
  var linkFunction = function(scope, iElement, iAttrs, controller) {
    if (iElement.length == 1) {
      var input = iElement[0];

      var fieldToUpdate = iAttrs.datepickerModel;
      var updateFieldFunction = function (date) {
        scope.$parent[fieldToUpdate] = date.getTime() / 1000;
        scope.$parent.$apply();
      };

      var picker = new Pikaday({
        field: input,
        defaultDate: new Date(scope.$parent[fieldToUpdate] * 1000),
        setDefaultDate: true,
        onSelect: updateFieldFunction
      });
    }
  };
  var pikaday = {
    link: linkFunction,
    scope: {
      datepickerModel: '='
    }
  };
  return pikaday;
}]);
