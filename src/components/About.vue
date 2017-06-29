<template lang="html">

<div class="outer">
  <div class="inner">
    <!-- <img class="abs" v-attr="src:'./assets/nokprofile.png'"> -->


    <md-tabs md-centered>
  <md-tab md-label="About" md-icon="face">




    <md-card>
      <md-card-media>
        <img src="../assets/nokprofile.png" style="width:170px; height:150px; borderRadius: 200px; margin-top:5px;"  alt="People">
        <!-- <img src="./assets/nokprofile.png" alt="People"> -->
        <!-- <img class="abs" v-attr="src:'./assets/nokprofile.png'"> -->
      </md-card-media>

      <md-card-header>
        <div class="md-title">Kanokpatai Kanato </div>
        <div class="md-subhead">Web Developer</div>
      </md-card-header>
      <p>

      <a href="https://instagram/nokkanato"><i class="fa fa-instagram" style="font-size:24px;" ></i></a>


      <a href="https://facebook.com/nokkanato"><i class="fa fa-facebook-square" style="font-size:24px;"></i></a>
      <a href="http://github.com/nokkanato"><i class="fa fa-github-square" style="font-size:24px;"></i></a>

      <i class="fa fa-google" style="font-size:24px;"></i>
      <a href="https://twitter.com/nokkanato"><i class="fa fa-twitter-square" style="font-size:24px;"></i></a>
      <a href="https://bitbucket.org/nokkanato"><i class="fa fa-bitbucket-square" style="font-size:24px;"></i></a>
      </p>









      <md-card-content>
        growing programmer,I love playing game and coding, I am third year in computer science in Mahidol University Collage
      </md-card-content>
    </md-card>






  </md-tab>

  <md-tab md-label="Skills" md-icon="accessibility">
    <md-card>

    <h1>Skill</h1>
            <h2>Langauge</h2>
            <p>Java, Python, Javascript, Rails, SQL</p>
            <h2>Web application</h2>
            <p>JSON, html, bootstrap, material design, javascript, VueJS, Rest API in rails,
             Spring</p>

            <h2>Data Mining</h2>
            <p> Jupyter, basic analysis, Matlab </p>


        </md-card>


  </md-tab>

  <md-tab md-label="Experience" md-icon="school">
    <md-card>
      <p>
      Analysis of Terrism Python
        <a href="https://github.com/sanchitchawla/datascienceproject">

        <i class="fa fa-github-square" style="font-size:24px;"></i>
        </a>
        </p>
        <p>analysis set of data from kaggle and try to analse around on whether
          we are in peace respect to data we took from
        </p>


    </md-card>
    <md-card>
      <p>EarthQuake detection Html+ Javascript
        <a href="https://github.com/nokkanato/NokNattyOp">
        <i class="fa fa-github-square" style="font-size:24px;"></i>
        </a>
        </p>
        <p> Took the data from https://earthquake.usgs.gov/earthquakes/map/ in JSON and
        pin down in google map </p>

    </md-card>
    <md-card>
      <p>Servlet + Database Java
        <a href="https://github.com/nokkanato/ServletDatabaseJava/">
        <i class="fa fa-github-square" style="font-size:24px;"></i>
        </a>
        </p>
        <p>practice user authentication using Servlet Java and database mysql to collect</p>

    </md-card>
    <md-card>
      <p>Defending WebService Java
        <a href="https://github.com/nokkanato/DataCommunicationDefendingWebService">
        <i class="fa fa-github-square" style="font-size:24px;"></i>
        </a>
         </p>
         <p>writes program in java to handle many requests via Spark library</p>

    </md-card>
    <md-card>
      <p>Clicker VueJS + Java Spring
        <a href="https://bitbucket.org/ooc-clicker/clicker">
        <i class="fa fa-bitbucket-square" style="font-size:24px;"></i>
        </a>
        </p>
        <p> Web application for teacher to set question of student and
           student be able to answer multiple choice , I was responsible for
          front end in this project</p>

    </md-card>
    <md-card>
      <p>File Distribution System in Same Subnet
        <a href="https://bitbucket.org/nokkanato/bittorent">
        <i class="fa fa-bitbucket-square" style="font-size:24px;"></i>
        </a>
         </p>
         <p>Java program that be able to send file across subnet
          program's structure is so bad</p>

    </md-card>
    <md-card>
      <p>Mobile App Fitbook Lua
        <a href="https://bitbucket.org/fitnessdude/fitbook">

        <i class="fa fa-bitbucket-square" style="font-size:24px;"></i>
        </a>
        </p>
        <p>
          first mobile app about fitness library guide. We use Agile methodology.
        </p>




    </md-card>
    <md-card>
      <p>Zork Game Java
        <a href="https://bitbucket.org/nokkanato/zork">
        <i class="fa fa-bitbucket-square" style="font-size:24px;"></i>


        </a>
      </p>
      <p> Zork Game in Java , about flirt girls in different rooms</p>

    </md-card>
    <md-card>
      <p>Resume Service Rails+ VueJS
        <a href="https://github.com/nokkanato/ResumeService">
        <i class="fa fa-github-square" style="font-size:24px;"></i>
        </a>

        </p>
        <p> Resumeservice where employer can look people up classify by specification</p>

    </md-card>










  </md-tab>


</md-tabs>

  </div>

</div>


</template>

<script>
export default {
}
</script>

<style lang="css">
.outer {
  background: #e6eeff;
  height: 1400px;
}
.inner {
  background: 	 #ffffe6;
  margin-left: 5%;
  margin-right: 5%;
  /*margin-top: 5%;*/
  margin-bottom: 5%;
  height: 1300px;

}
.md-card {
  margin-bottom: 10px;
}
</style>
