
  $(document).ready(function() {
      //this calculates values automatically
      sum();
      $("#num1, #num2, #num3, #num4, #num5, #num6, #num7, #num8").on("keydown keyup", function() {
          sum();
      });
  });

  function sum() {
              var num1 = document.getElementById('num1').value;
              var num2 = document.getElementById('num2').value;
              var num3 = document.getElementById('num3').value;
              var num4 = document.getElementById('num4').value;
              var num5 = document.getElementById('num5').value;
              var num6 = document.getElementById('num6').value;
              var num7 = document.getElementById('num7').value;
              var num8 = document.getElementById('num8').value;
        var result = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6) + parseInt(num7) + parseInt(num8);
        var result1 = parseInt(num1) - parseInt(num2) - parseInt(num3) - parseInt(num4)- parseInt(num5) - parseInt(num6) - parseInt(num7) - parseInt(num8) ;
              if (!isNaN(result)) {

          document.getElementById('subt').value = (result1);
              }
          }
