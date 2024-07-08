---
title: Contact Me
layout: page
permalink: /contact/
---

---

## Connect with Me on Social Media

<div class="text-center mb-4 lead">
   <a class="no-tufte-underline" href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i></a>
   <a class="no-tufte-underline" href="https://linkedin.com/in/{{ site.linkedin_username }}"> <i class="fab fa-linkedin-in"></i></a>
   <a class="no-tufte-underline" href="https://github.com/{{ site.github_username }}"><i class="fab fa-github"></i></a>
   <a class="no-tufte-underline" href="https://twitter.com/{{ site.twitter_username }}"><i class="fab fa-twitter"></i></a>
   <a class="no-tufte-underline" href="https://instagram.com/{{ site.instagram_username }}"><i class="fab fa-instagram"></i></a>
</div>

---
## Send Me a Message
<form id="contactForm" action="https://formspree.io/f/xwkagvap" method="POST">
   <div class="row">
      <div class="col">
         <label for="name">Name (Required)</label>
         <input class="form-control" name="name" id="name" type="text" required/>      
      </div>
      <div class="col">
         <label for="email">Email (Required)</label>
         <input class="form-control" name="email" id="email" type="email" required/>
      </div>
   </div>
   <!-- Message input -->
   <label for="message">Message</label>
   <textarea class="form-control" id="msg" name="message" style="height: 10rem;"></textarea>
   <!-- Form submit button -->
   <div class="d-grid">
      <button class="btn btn-dark mt-1 text-light" type="submit">Submit</button>
   </div>
</form>

---