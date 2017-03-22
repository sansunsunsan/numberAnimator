var app=angular.module('angular-number-animator',[])
app.directive('numberAnimator',function(){
    return{
      restrict:'E',
      scope:{
        number:'@',
        fontsize:'@',
        speed:'@'
      },
      link:function(scope,el,a){
        console.log("Element",el)
        console.log("Scope",scope.number)
        el.animateNumber(
          {
            number: scope.number,
            color: 'green',
            'font-size': scope.fontsize+'px',
            easing: 'easeInQuad'
          },
          scope.speed
        );
      }
    }
  })