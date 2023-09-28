<template>
<!--HelloWorld style="  color:#000000;" msg="Welcome to Your Vue.js App"></HelloWorld>
<h1 style=" background:; color:#000000;">{{ title.toUpperCase() }}</h1-->


<body>
    <div>
	<img id="img3" src="../assets/home3.jpeg">
	</div>
   


    <div style="width:83rem;">
	<div>
	<div id="div1">	
	<div class="firsthalf">
	<h1 class="text-big" id="web">Web Development</h1>
				
				<p class="text-small">
					Web development is the work involved in 
					developing a website for the Internet or 
					an intranet. Web development can range 
					from developing a simple single static 
					page of plain text to complex web applications, 
					electronic businesses, and social network services.
				</p>
    </div>
    </div>
	</div>
	<div id="div2">
	<div class="firsthalf">
	<img id="img1" src="../assets/home1.jpeg">
	</div>
	</div>
	</div>
	

	<!--second row-->
    <div style="width:83rem;">
    <div>
	<div id="div3">	
    <div class="firsthalf">
	<img id="img2" src="../assets/home4.jpeg">
	</div>
	</div>
	<div id="div4">
	<div class="firsthalf">
	<h1 class="text-big" id="web">web Designing</h1>
				
				<p class="text-small">
			First, let’s define what web design is. 
			Web design is the process of designing the 
			visual look and feel of a website. As a web designer, 
			you’ll focus on planning the user experience of the website, 
			wireframe layouts, organize content and images in a way that tells a story, and design the final UI.
				</p>
		</div>
	</div>
	</div>
	</div>
	<div >
	<h1>Enrollment with us</h1>
	<input class="input" type="text" name="name" placeholder="Enter your Name" v-model="name"/><br/><br/>
	<input class="input" type="text" name="email" placeholder="Enter your Email" v-model="email"/><br/><br/>
	<input class="input" name="password" placeholder="********" v-model="password"/><br/><br/>
	<button v-on:click="submit()" id="btn">Submit</button>
	</div>
<!--section class="firstsection">
		<div class="box-main">
			<div class="firstHalf">
				<h1 class="text-big" id="web">
					Web Technology
				</h1>
				
				<p class="text-small">
					HTML stands for HyperText Markup
					Language. It is used to design
					web pages using a markup language.
					HTML is the combination of Hypertext
					and Markup language. Hypertext
					defines the link between the web
					pages. A markup language is used
					to define the text document within
					tag which defines the structure of
					web pages. HTML is a markup language
					that is used by the browser to
					manipulate text, images, and other
					content to display it in the required
					format.
				</p>


			</div>
		</div>
	</section>

	<section class="secondsection">
		<div class="box-main">
			<div class="secondHalf">
				<h1 class="text-big" id="program">
					C Programming
				</h1>
				<p class="text-small">
					C is a procedural programming language.
					It was initially developed by Dennis
					Ritchie as a system programming
					language to write operating system.
					The main features of C language include
					low-level access to memory, simple set
					of keywords, and clean style, these
					features make C language suitable for
					system programming like operating system
					or compiler development.
				</p>


			</div>
		</div>
	</section>

	<section class="section">
		<div class="paras">
			<h1 class="sectionTag text-big">Java</h1>

			<p class="sectionSubTag text-small">
				Java has been one of the most
				popular programming language
				for many years. Java is Object
				Oriented. However it is not
				considered as pure object oriented
				as it provides support for primitive
				data types (like int, char, etc) The
				Java codes are first compiled into byte
				code (machine independent code). Then
				the byte code is run on Java Virtual
				Machine (JVM) regardless of the
				underlying architecture.
			</p>


		</div>

		<div class="thumbnail">
			<img src="img.png" alt="laptop image">
		</div>
	</section-->
<!--div id="watch"><h3>HERE WE USE WATCHER PROPERTY</h3></div-->
    <div style="width:100%; margin-top:50px;">
	<iframe width="80%" height="400" src="https://www.youtube.com/embed/YrxBCBibVo0?si=NpWdjGOFbYoH0SeR" 
    title="YouTube video player" frameborder="0" 
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen>
	</iframe>
	</div>
     
    <h1>Here Watcher Property</h1>
	<div>
    <h1 class="tag">{{count}}</h1>
	<button v-on:click="count=count+1" class="b1">+</button>
	<button v-on:click="count=count-1" class="b2">-</button>
	</div>


	<footer class="background">
		<p class="text-footer">
			Copyright ©-All rights are reserved
		</p>


	</footer>
</body>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
    data() {
    return {
		name:'',
		email:'',
		password:'',
  title: 'My first component!',
	count:0,

    }
 },
 methods:{
   submit(){
	console.warn(this.name,this.email,this.password);
	//alert("data Inserted Succesfully");
   }   


 },
  watch:{
	count(val, prev){
		if(val>5 && val>prev){
			alert("stop counting")

		}

		
	}
  },
   component:{
    HelloWorld,
  }
}
</script>
<style scoped>


	* {
		margin: 0;
		padding: 0;
	}
   

	.background {
		background: black;
		background-blend-mode: darken;
		background-size: cover;
	}



	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.logo img {
		width: 180px;
		border-radius: 50px;
	}

	.nav-list li {
		list-style: none;
		padding: 26px 30px;
	}

	.nav-list li a {
		text-decoration: none;
		color: white;
	}

	.nav-list li a:hover {
		color: grey;
	}

	.rightnav {
		width: 30%;
		text-align: right;
	}

	#search {
		padding: 5px;
		font-size: 17px;
		border: 2px solid grey;
		border-radius: 9px;
	}
	#img3{
		margin-top:10px;
		width:80rem;
		height:350px;

	}
	#div1{
		background-color:white;
		width:50%;
		float:left;
		height:450px;
		display: flex;
		justify-content: center;
		align-items: center;
    }
	#div2{
		background-color:white;
		width:50%;
		float:right;
		height:450px;

	}
	#img1{
		border-radius:10px;
		margin-top:50px;
	}
	#img2{
	border-radius:10px;
		height:20rem;
		width:41rem;
	}
	#div3{
		
		background-color:white;
		width:50%;
		float:left;
		height:450px;
		display: flex;
		justify-content: center;
		align-items: center;
		
    }
	#div4{
		background-color:white;
		width:50%;
		float:right;
		height:450px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.firstsection {
		background-color: #7eafbd;
		height: 300px;
	}

	.secondsection {
		background-color: #68b1c1;
		height: 300px;
	}

	.box-main {
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
		max-width: 80%;
		margin: auto;
		height: 80%;
	}

	.firsthalf {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.secondhalf {
		width: 30%;
	}

	.secondhalf img {
		width: 70%;
		border: 4px solid white;
		border-radius: 150px;
		display: block;
		margin: auto;
	}

	.text-big {
		font-family: 'Piazzolla', serif;
		font-weight: bold;
		font-size: 35px;
	}

	.text-small {
		font-size: 18px;
	}

	.btn {
		padding: 8px 20px;
		margin: 7px 0;
		border: 2px solid white;
		border-radius: 8px;
		background: none;
		color: white;
		cursor: pointer;
	}

	.btn-sm {
		padding: 6px 10px;
		vertical-align: middle;
	}

	.section {
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 100%;
		margin: auto;
    background:#3c859d;
	}

	.section-Left {
		flex-direction: row-reverse;
	}

	.paras {
    padding: 0px 65px;
	}

	.thumbnail img {
		width: 250px;
		border: 2px solid black;
		border-radius: 26px;
		margin-top: 19px;
	}

	.center {
		text-align: center;
	}

	
	.b1{
		margin:5px 10px;
		width:25px;
		height:25px;
	
	}
    .b2{
		margin:5px 10px;
		width:25px;
		height:25px;
	
	}
	#watch{
		background-color:yellow;
		margin-top:50px;
		text-align:center;
		height:100px;
		font-size:20px;
	}
	.text-footer {
		text-align: center;
		padding: 30px 0;
		font-family: 'Ubuntu', sans-serif;
		display: flex;
		justify-content: center;
		color: white;
	}
	.input{
		height:25px;
		width:250px;
		
	}
	.input:hover{
		border:2px solid blue;
		}

    #btn{
    height: 25px;
    width: 70px;
    background-color: #785bf8;
    color: white;
    border-radius: 5px;
	}
</style>