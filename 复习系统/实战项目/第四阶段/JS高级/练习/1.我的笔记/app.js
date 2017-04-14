

angular.module('next',[])
          .controller('nextCrl',function ($scope) {
            //初始化
            $scope.content = '';

            //计算字数
            $scope.getlength = function () {
              return 100 - $scope.content.length;
            };

            //保存
            $scope.save = function () {
              sessionStorage.setItem('text',$scope.content)
              $scope.content = '';
              // alert('保存成功');
              confirm('确认保存当前信息吗？')
            };

            //读取
            $scope.read = function () {
              $scope.content = sessionStorage.getItem('text');
            };

            //清除
            $scope.clear = function () {
              $scope.content = '';
            };

          });
