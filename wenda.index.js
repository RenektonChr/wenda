
  window.onload = function(){
    var oInput = document.getElementById('input1');
    var oBtn = document.getElementById('btn1');

    var oMnue = document.getElementById('mnue1');
    var oHead = document.getElementById('head1');
    var oLi = oMnue.getElementsByTagName("li");

    var oSignup = document.getElementById('signup');
    var oLogin = document.getElementById('login');

    var oHeadb = document.getElementById('head-bottom');
    var aLi = oHeadb.getElementsByTagName('li');

    var index_zc = document.getElementById('index_zc');
    var oInp = index_zc.getElementsByTagName('input');

    var str = oInput.value;
    var timer = null;

    oInput.onclick = function(){
      oMnue.style.display = "none";
      this.value = "";
      oInput.style.width = "578px"
    };

    oBtn.onclick = function(){
      oMnue.style.display = "block";
      oInput.style.width = "200px"
      var url = "要跳转的路径";
      window.location.href = url;
    }

    for(var i = 0;i < oLi.length;i++){
      oLi[i].onmouseover = function(){
        this.style.backgroundColor = "#ccc";
      }
      oLi[i].onmouseout = function(){
        this.style.backgroundColor = "";
      }
    }

    oLogin.onmouseover = function(){
      this.style.backgroundColor = "#ccc";
    }
    oLogin.onmouseout = function(){
      this.style.backgroundColor = "";
    }

    oLogin.onclick = function(){
      var url = "要跳转的路径";
      window.location.href = url;
    }

    oSignup.onclick = function(){
      var url = "要跳转的路径";
      window.location.href = url;
    }

    oSignup.onmouseover = function(){
      this.style.backgroundColor = "#006400"
    }

    oSignup.onmouseout = function(){
      this.style.backgroundColor = "green";
    }

    for(var i = 0;i < aLi.length;i++){
      aLi[i].onmouseover = function(){
        this.style.color = 'black';
        this.style.backgroundColor = "#ccc";
      }
      aLi[i].onmouseout = function(){
        this.style.color = '#ccc';
        this.style.backgroundColor = '';
      }
    }

    for(var i = 0;i < oInp.length; i++){
      oInp[i].onclick = function(){
        this.value = "";
      };
    }

    var oReg = document.getElementById('reg');
    oReg.onclick = function(){
      var url = "要跳转的路径";
      window.location.href = url;
    }

  };
