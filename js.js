window.onload=function(){
	var lunbo=document.querySelector(".lunbo");
	function MySlide(obj){
		this.obj=obj;
		//  获取图片div
		this.divs=this.obj.getElementsByClassName("le");
		console.log(this.divs)
		//  获取小圆点
		this.spans=this.obj.getElementsByTagName("span");
		console.log(span);
		//  图片索引
		this.num=0;
		//  定时器
		this.t=null;
	}
	//  原型
	MySlide.prototype={
		constructor:MySlide,
		//自动轮播
		autoplay:function(){
			console.log(this);
			clearInterval(this.t);
			this.t=setInterval(this.slide.bind(this), 1000);
			//定时器里面的this指向window 需要更改this指向
			return this;
		},
		//鼠标悬浮上方执行的
		over:function(){
			this.obj.onmouseover=function(){
				console.log(this);
				clearInterval(this.t)
			}.bind(this)
			return this;
		},
		//鼠标离开的
		out:function(){
			this.obj.onmouseout=function(){
				this.t=setInterval(this.slide.bind(this),1000)
			}.bind(this)
			return this;
		},
		
		
		spansclick:function(){
			//  将this赋给that，指向当前实例对象lunbo
			var that=this;
			//  遍历小圆点
			for(var i=0;i<that.spans.length;i++){
				//  将小圆点的索引存放到i
				that.spans[i].index=i;
				//  遍历小圆点，将其余小圆点和对应图片的样式清除
				that.spans[i].onclick=function(){
					for(var j=0;j<that.spans.length;j++){
						that.divs[j].style.display="none";
						that.spans[j].style.background="pink";
					}
					//  当前小圆点和对应的图片显示样式
					that.divs[this.index].style.display="block";
					this.style.background="red";
					//  将图片的索引和小圆点的索引相对应
					that.num=this.index;
				}
			}
			return this;  //  返回当前实例对象lunbo
		},
		//自动轮播里的详细内容
		slide:function(){
			console.log(this);
			
			this.num++;
			//  判断索引   当索引大于最后一张图片的索引值就返回第一张
			if(this.num>this.divs.length-1){
				this.num=0
			}
			//  遍历图片，将其余图片和对应小圆点的样式清除
			for(var i=0;i<this.divs.length;i++){
				this.divs[i].style.display="none";
				this.spans[i].style.background="pink";
			}
			//  当前图片和对应的小圆点显示样式
			this.divs[this.num].style.display="block";
			this.spans[this.num].style.background="red";
		}
	}
	var lunbo=new MySlide(lunbo)
	lunbo.autoplay().over().out().spansclick()


//tab切换
var info=document.getElementById('info');
var ti=info.getElementsByClassName('ti')[0];
var ti1=info.getElementsByClassName('ti')[1];
var mod=document.getElementsByClassName('mod-tabcontent')[0];
var mod1=document.getElementsByClassName('mod-tabcontent')[1];


ti.onclick=function(){
	mod.style.display="block";
	mod1.style.display="none";
	ti.style.borderBottom='3px solid pink';
	
	ti1.style.borderBottom="white";
}
ti1.onclick=function(){
	mod.style.display="none";
	mod1.style.display="block";
	ti.style.borderBottom="white";
	ti1.style.borderBottom="3px solid pink";
}












var sec=document.querySelector('.section-sec-2');
console.log(sec);
	function MySlidea(obj1){
		this.obj1=obj1;
		this.lis=this.obj1.getElementsByTagName('li');
		console.log(this.obj1);
		this.spans=this.obj1.getElementsByTagName('span');
		this.time=null;
		this.num=0;
	}
	MySlidea.prototype={
		constructor:MySlidea,
		//自动轮播
		autoplay:function(){
			console.log(this);
			clearInterval(this.t);
			this.t=setInterval(this.sec.bind(this), 1000);
			//定时器里面的this指向window 需要更改this指向
			return this;
		},
		//鼠标悬浮上方执行的
		over:function(){
			this.obj1.onmouseover=function(){
				console.log(this);
				clearInterval(this.t)
			}.bind(this)
			return this;
		},
		//鼠标离开的
		out:function(){
			this.obj1.onmouseout=function(){
				this.t=setInterval(this.sec.bind(this),1000)
			}.bind(this)
			return this;
		},
		
		
		spansclick:function(){
			//  将this赋给that，指向当前实例对象lunbo
			var that=this;
			//  遍历小圆点
			for(var i=0;i<that.spans.length;i++){
				//  将小圆点的索引存放到i
				that.spans[i].index=i;
				//  遍历小圆点，将其余小圆点和对应图片的样式清除
				that.spans[i].onmouseover=function(){
					for(var j=0;j<that.spans.length;j++){
						that.lis[j].style.display="none";
						that.spans[j].style.background="yellow";
					}
					//  当前小圆点和对应的图片显示样式
					that.lis[this.index].style.display="block";
					this.style.background="white";
					//  将图片的索引和小圆点的索引相对应
					that.num=this.index;
				}
			}
			return this;  //  返回当前实例对象lunbo
		},
		//自动轮播里的详细内容
		sec:function(){
			console.log(this);
			
			this.num++;
			//  判断索引   当索引大于最后一张图片的索引值就返回第一张
			if(this.num>this.lis.length-1){
				this.num=0
			}
			//  遍历图片，将其余图片和对应小圆点的样式清除
			for(var i=0;i<this.lis.length;i++){
				this.lis[i].style.display="none";
				this.spans[i].style.background="yellow";
			}
			//  当前图片和对应的小圆点显示样式
			this.lis[this.num].style.display="block";
			this.spans[this.num].style.background="red";
		}
	}
	var sec=new MySlidea(sec)
	sec.autoplay().over().out().spansclick()
}



//tab切换
	



