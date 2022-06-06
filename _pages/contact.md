---
layout: page
title: Connect with Me
permalink: /contacts/
---
<div class="text-center mb-4 lead">
   <a class="social-icon" href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i></a>
   <a class="social-icon" href="https://linkedin.com/in/{{ site.linkedin_username }}"> <i class="fab fa-linkedin-in"></i></a>
   <a class="social-icon" href="https://github.com/{{ site.github_username }}"><i class="fab fa-github"></i></a>
   <a class="social-icon" href="https://twitter.com/{{ site.twitter_username }}"><i class="fab fa-twitter"></i></a>
   <a class="social-icon" href="https://instagram.com/{{ site.instagram_username }}"><i class="fab fa-instagram"></i></a>
</div>
<form id="contactForm" action="https://formspree.io/f/xwkagvap" method="POST">
   <!-- Name input -->
   <input class="form-control" name="name" id="name" type="text" placeholder="Name" />
   <!-- Email address input -->
   <input class="form-control" name="email" id="email" type="email" placeholder="Email Address" />
   <!-- Message input -->
   <textarea class="form-control" id="msg" name="message" placeholder="Message" style="height: 10rem;"></textarea>
   <!-- Form submit button -->
   <div class="d-grid">
      <button class="btn btn-primary btn-lg" type="submit">Submit</button>
   </div>
</form>

