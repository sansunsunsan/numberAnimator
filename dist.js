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
      
        el.animateNumber(
          {
            number: scope.number,
            color: 'black',
            'font-size': scope.fontsize+'px',
            easing: 'easeInQuad'
          },
          scope.speed
        );
      }
    }
  })
