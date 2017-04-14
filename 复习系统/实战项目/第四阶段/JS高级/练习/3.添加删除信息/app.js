/**
 * Created by Administrator on 2017/4/9/009.
 */
angular.module('inde', [])
    .controller('info', function ($scope) {
      //初始化 信息列表
      $scope.emps = [
        {
          username: '肖雄',
          email: '123@qq,com',
          salary: 15000
        },
        {
          username: '肖雄1',
          email: '1234@qq,com',
          salary: 18000
        },
        {
          username: '肖雄2',
          email: '1235@qq,com',
          salary: 21000
        }
      ];

      //添加信息
      $scope.add = function () {
        var emp = {
          username: $scope.emp.username,
          email: $scope.emp.email,
          salary: $scope.emp.salary
        };
        $scope.emps.push(emp);
        $scope.emp = {};
      };

      //删除信息
      $scope.deleteEmp = function (index) {
        var name = this.emps[index].username;

        //   `` 这是ES6的语法
        if (confirm(`确定要删除${name}吗？`)){
            $scope.emps.splice(index,1);
        }
      };


    });