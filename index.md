---
layout: default
title: Shinwoo Kim | Student, Computer Scientist, Developer
---
<div class="container col-xxl-8 px-4 py-5" id="page-container">
  <div class="row flex-lg-row align-items-center g-5 py-5">
     <div class="col-10 col-sm-8 col-lg-6">
        <img src="{{site.baseurl}}/assets/img/profile.jpg" class="d-block mx-lg-auto img-fluid img-thumbnail" alt="Shinwoo Kim" width="350" height="350" loading="lazy">
     </div>
     <div class="col-lg-6">
        <p class="autography display-2 lh-1 text-primary">Shinwoo Kim</p>
        <code class="mb-3 lead"><span class="typed" data-typed-items="Software Developer,Pitt Student, Educator, Computer Scientist"></span></code>
        <p>Connect with Me | 
           <a class="social-icon" href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i></a>
           <a class="social-icon" href="https://linkedin.com/in/{{ site.linkedin_username }}"> <i class="fab fa-linkedin-in"></i></a>
           <a class="social-icon" href="https://github.com/{{ site.github_username }}"><i class="fab fa-github"></i></a>
           <a class="social-icon" href="https://twitter.com/{{ site.twitter_username }}"><i class="fab fa-twitter"></i></a>
           <a class="social-icon" href="https://instagram.com/{{ site.instagram_username }}"><i class="fab fa-instagram"></i></a>
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
           <a class="btn btn-dark btn-lg px-4 me-md-2" href="{{ '/about' | prepend: site.baseurl }}">About Me</a>
           <a class="btn btn-dark btn-lg px-4 me-md-2" href="{{ '/assets/Resume.pdf' | prepend: site.baseurl }}">Résumé</a>
        </div>
     </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" defer></script>
<script src="{{"/assets/js/typed.js" | absolute_url }}" defer></script>
