---
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
               </p>
            </div>
            <div class="hero_col col-4">
               <img class="profile img-thumbnail" src="{{site.baseurl}}/assets/img/profile.jpg">
            </div>
         </div>
      </div>
   </div>
</section>

# about me
I am an undergraduate student at the [University of Pittsburgh's](https://pitt.edu) [School of Computing and Information](https://sci.pitt.edu) and the [University Honors College](https://www.honorscollege.pitt.edu/) studying **computer science** and **mathematics**. I'm originally from Seoul, South Korea, and have lived in many amazing places including Pacific Grove (California), Philadelphia, and Pittsburgh. I have a passion for teaching. I was the President of the Tutoring Program at North Penn Senior High School, and I was the Co-Founder/Instructor of the school's free SAT® prep class. Recently, I taught the [CompTIA A+ Certificate](https://www.comptia.org/certifications/a) course to high school students in Pittsburgh’s Hill District. My research interests are in the field of Artificial Intelligence, Machine Learning, and Natural Language Processing although there are very few things in computer science that I'm _not_ interested in. Outside of school, I enjoy spending most of my time outdoors. In the winter, I am an avid skier. And during the warmer months, I enjoy hiking. When forced indoors, I spend my time watching movies and television shows.
## education
<div class="p-3 w-100">
  <h4 class="mb-0">University of Pittsburgh</h4>
  <h5 class="mb-0">School of Computing and Information + University Honors College</h5>
  <p>August 2021 - (Expected) May 2026 <br> Bachelor of Science - Computer Science <br>GPA: 4.0 (as of FALL 2021) </p>
</div>
<div class="p-3 w-100">
  <h4 class="mb-0">North Penn High School</h4>
  <p>August 2018 - June 2021
      <br>GPA: 4.18 <br>9 Advanced Placement(AP®) Credits
  </p>
</div>

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