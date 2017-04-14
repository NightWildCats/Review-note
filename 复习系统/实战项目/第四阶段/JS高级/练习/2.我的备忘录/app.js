/**
 * Created by Administrator on 2017/4/9/009.
 */
angular.module('Memorandum',[])
        .controller('Memo',function ($scope) {
            //初始化信息
          $scope.toDos = [
              {
                title: '起床',
                isCheck: false
              },
              {
                title: '洗漱',
                isCheck: true
              },
              {
                title: '刷牙',
                isCheck: false
              },
              {
                title: '出门',
                isCheck: false
              }
            ];

            //添加信息
            $scope.add = function () {
              var todo = {
                title : $scope.inputTodo,
                isCheck: false
              };
              //插入数组中
              $scope.toDos.push(todo);
              $scope.inputTodo = '';
            };

            //删除选中的
            $scope.delete = function () {
              //this 为$scope
              var newTodo = [];
              newTodo = this.toDos.filter(function (item,index) {
                return !item.isCheck;
              });
              this.toDos = newTodo;
            };
        });