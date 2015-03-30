class ProgressSpinnerCtrl {
  constructor(LxProgressService, $timeout, $scope) {
    LxProgressService.circular.show('#5fa2db', '#progress');

    $scope.$watch('items', function() {
      if ($scope.items) {
        $timeout(function() {
          LxProgressService.circular.hide();
        }, 200);
      }
    });
  }
}
ProgressSpinnerCtrl.$inject = ['LxProgressService', '$timeout', '$scope'];

export default () => {
  return {
    scope: {
      items: '='
    },
    template: '<div id="progress"></div>',
    controller: ProgressSpinnerCtrl
  };
};
