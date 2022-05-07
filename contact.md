---
layout: default
permalink: /contacts/
---

# connect with me
<section id="contact">
   <div class="w-100">
      <div class="social-icons text-center">
         <a class="social-icon" href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i></a>
         <a class="social-icon" href="https://linkedin.com/in/{{ site.linkedin_username }}"> <i class="fab fa-linkedin-in"></i></a>
         <a class="social-icon" href="https://github.com/{{ site.github_username }}"><i class="fab fa-github"></i></a>
         <a class="social-icon" href="https://twitter.com/{{ site.twitter_username }}"><i class="fab fa-twitter"></i></a>
         <a class="social-icon" href="https://instagram.com/{{ site.instagram_username }}"><i class="fab fa-instagram"></i></a>
      </div>
      <!-- Wrapper container -->
      <div class="container">
         <form id="contactForm" action="https://formspree.io/f/xwkagvap" method="POST">
            <!-- Name input -->
            <div class="mb-3">
               <label class="form-label" for="name">Name</label>
               <input class="form-control" name="name" id="name" type="text" placeholder="Name" />
            </div>
            <!-- Email address input -->
            <div class="mb-3">
               <label class="form-label" for="email">Email Address</label>
               <input class="form-control" name="email" id="email" type="email" placeholder="Email Address" />
            </div>
            <!-- Message input -->
            <div class="mb-3">
               <label class="form-label" for="msg">Message</label>
               <textarea class="form-control" id="msg" name="message" placeholder="Message" style="height: 10rem;"></textarea>
            </div>
            <!-- Form submit button -->
            <div class="d-grid">
               <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
         </form>
      </div>
   </div>
</section>