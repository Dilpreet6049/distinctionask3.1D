<template>
<h1 v-bind:style="{color:'#478a8b',fontsize:'30px',textalign:'center',}">What we do for you</h1>
<ConnectView><!--h1>Connect Code</h1--></ConnectView>
<img id="img1" src="../assets/project.jpeg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!--link rel="icon" type="image/x-icon" href="..../public/favicon1.ico" /-->
 
  <!---Custom Css File!--->
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!--transiton and animation-->

<div class="deck">
  <div class="card"><img src="../assets/IT.jpeg" alt="" /></div>
  <div class="card"><img src="../assets/project.jpeg" alt="" /></div>
  <div class="card"><img src="../assets/staff.jpeg" alt="" /></div>
  <div class="card"><img src="../assets/webtech.jpeg" alt="" /></div>
  <div class="card"><img src="../assets/marketing.jpeg" alt="" /></div>
</div>

<!--transition end animation-->
 

<div class="container" style="width:80rem;">
  <div class="box" id="box1">We Proviging you IT services.</div>
  <div class="box" id="box2">We help you to mange your projects.</div>
  <div class="box" id="box3">We can provide you technical staf support.</div>
  <div class="box" id="box4">Helping in your to marketing you product.</div>
</div>

<video width="500" controls id="video" >
<source src="../assets/demo.mp4" type="video/mp4">
Your browser does not support this video tag.
</video>

<!--audio width="400" controls >
<source src="../assets/Audio.mpeg" type="audio/mpeg">
Your browser does not support this audio tag.
</audio-->


  <p v-html="htmltext"></p>
  <h2 v-bind:id="headingid">Attribute Bind by id</h2>
  <footer class="background">
		<p class="text-footer">
			Copyright ©-All rights are reserved
		</p>


	</footer>
</body>
</template>
<script>
import ConnectView from './ConnectView.vue'
export default{
  name:"ContactView",
  component:{
     ConnectView,
  }, 
  data(){
    return{
      headingid:'Attribute-id',
      htmltext:'<h2>Here we binding html</h2>',
    }
  }

}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
#img1{
    width: 80rem;
    height: 350px;
    margin-bottom: 100px ;
}
.background {
		background: black;
		background-blend-mode: darken;
		background-size: cover;
	}
.text-footer {
		text-align: center;
		padding: 30px 0;
		font-family: 'Ubuntu', sans-serif;
		display: flex;
		justify-content: center;
		color: white;
	}
  .container{
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin:50px 50px;

}

.box{
  background-color: #a1acff;
  paddind:20px;
  height:300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#000000;
}

#box1:hover{
   background-image: url("../assets/IT.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 2s;
}

#box2:hover{
   background-image: url("../assets/project.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 2s;


}

#box3:hover{
   background-image: url("../assets/staff.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 2s;


}

#box4:hover{
   background-image: url("../assets/marketing.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transition: 2s;


}



.deck {
  position:relative;
  
  left:50%;
  width:250px;
  height: 300px;
  transform:translateX(-50%);
  border:none;
}

.card {
  position:absolute;
  top:0px;
  left:0px;
  width:inherit;
  height: inherit;
  
  transform-origin: left bottom;
  border: none;
  outline: none;
}

.card img {
  width:inherit;
  height:inherit;
  border: none;
  
}

.card:hover {
  outline: 1px solid black;
  
}

.deck:hover .card:nth-child(1) {
  transform:rotate(-20deg);

}

.deck:hover .card:nth-child(1):hover {
  transform:scale(1.2,1.2) rotate(-20deg);
}

.deck:hover .card:nth-child(2) {
  transform:rotate(-10deg);
}

.deck:hover .card:nth-child(2):hover {
  transform:scale(1.2,1.2) rotate(-10deg);
}

.deck:hover .card:nth-child(3) {
  transform:rotate(0deg);
}
.deck:hover .card:nth-child(3):hover {
  transform:scale(1.2,1.2) rotate(0deg);
}

.deck:hover .card:nth-child(4) {
  transform:rotate(10deg);
}
.deck:hover .card:nth-child(4):hover {
  transform:scale(1.2,1.2) rotate(10deg);
}

.deck:hover .card:nth-child(5) {
  transform:rotate(20deg);
}
.deck:hover .card:nth-child(5):hover {
  transform:scale(1.2,1.2) rotate(20deg);
}

</style>