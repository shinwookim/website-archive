---
title: Home
layout: default
---
<section class="hero">
   <div class="container">
      <div class="jumbotron">
         <div class="row">
            <div class="hero_col col-8">
               <h1 class="custom-font display-1">Shinwoo Kim</h1>
               <h2>&ensp;<span class="typed" data-typed-items="Software Developer,Pitt Student, Educator"></span></h2>
               <p>
                  &emsp;Connect With Me | <a class="social-icon" href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i></a>
                  <a class="social-icon" href="https://linkedin.com/in/{{ site.linkedin_username }}"> <i class="fab fa-linkedin-in"></i></a>
                  <a class="social-icon" href="https://github.com/{{ site.github_username }}"><i class="fab fa-github"></i></a>
                  <a class="social-icon" href="https://twitter.com/{{ site.twitter_username }}"><i class="fab fa-twitter"></i></a>
                  <a class="social-icon" href="https://instagram.com/{{ site.instagram_username }}"><i class="fab fa-instagram"></i></a>
               </p>
            </div>
            <div class="hero_col col-4">
               <img class="profile img-thumbnail" src="{{site.baseurl}}/assets/img/profile.jpg">
            </div>
         </div>
      </div>
   </div>
</section>

<div class="mx-auto w-75 text-center border border-secondary rounded">
<h2 class="mt-3 text-center">Get in Touch</h2>
      <p class="font-bold text-2xl pb-16 sm:pb-8">
      Want to work together or have any questions?
		</p>
      <a href="{{ '/contacts' | prepend: site.baseurl }}" class="mb-3 btn btn-large btn-secondary">Say Hello 👋</a>
      <a href="{{ '/assets/Resume.pdf' | prepend: site.baseurl }}" class="mb-3 btn btn-large btn-secondary">Get My Résumé</a>
</div>