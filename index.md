---
layout: page
---

<div class="row">
    <div class="col-6 ">
        <img class="pfp float-end img-fluid rounded d-block" src="assets/img/profile.jpg">
    </div>
    <div class="col-6 align-items-end text-start">
        <div class="NAME">
            SHINWOO<br>KIM
        </div>
        <div style="padding-top: 2px;">
            <code>
                <span class="typed mb-3 lead" data-typed-items="Software Developer, Pitt Panther, Educator, Computer Scientist"></span>
            </code>
        </div>
        <div>
            <a class="social-icon" href="mailto:{{ site.email }}"><i class="fas fa-envelope"></i></a>
            <a class="social-icon" href="https://linkedin.com/in/{{ site.linkedin_username }}"> <i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" href="https://github.com/{{ site.github_username }}"><i class="fab fa-github"></i></a>
            <a class="social-icon" href="https://twitter.com/{{ site.twitter_username }}"><i class="fab fa-twitter"></i></a>
            <a class="social-icon" href="https://instagram.com/{{ site.instagram_username }}"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
</div>

---

## About

I am student at the [University of Pittsburgh](https://pitt.edu)'s [School of Computing and Information](https://sci.pitt.edu) & [David C. Frederick Honors College](https://www.frederickhonors.pitt.edu/) where I am studying Computer Science, Data Science, and Mathematics. My research interests are in the field of **Artificial Intelligence**, **Machine Learning**, and **Natural Language Processing** although there are very few things in computer science that I'm _not_ interested in. I am currently a teaching assistant at the University of Pittsburgh's Department of Computer Science where I teach [_Discrete Structures for Computer Science_](teaching/); I also serve as the Chief Technical Officer and Lead Software Developer for the [_Special Needs Assitance Program for Social Engagement_](https://snapfse.com) and the [_TouchTheInvisible_](https://touchtheinvisible.com) project at the University of Pittsburgh.
{: .text-justify .about}

<div class="text-center">
    <a class="btn btn-outline-dark" href="{{ '/assets/Resume.pdf' | prepend: site.baseurl }}"> Résumé</a>
    <a class="btn btn-outline-dark" href="{{ '/teaching/' | prepend: site.baseurl }}">Courses I've Taught</a>
</div>

### Education

#### <i class="pitt-icon"></i>University of Pittsburgh

##### School of Computing and Information + David C. Frederick Honors College

August 2021 - (Expected) May 2025  
Bachelor of Science - Computer Science, Data Science, Mathematics

### Experience

<style>
  h5{margin-bottom: 0 !important;}
</style>

Please visit my [LinkedIn](https://linkedin.com/in/kimshinwoo) for the most up-to-date information. Click the buttons below to reveal
{: .text-center}

<div class="accordion accordion-flush mb-0" id="accordionExample">
	<div class="accordion-item">
		<h5 class="accordion-header">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#currPos" aria-expanded="false" aria-controls="currPos">
				<h5>Current Positions</h5>
			</button>
		</h5>
		<div id="currPos" class="accordion-collapse collapse" aria-labelledby="currPos">
			<div class="accordion-body">
				<div class="accordion accordion-flush mb-0" id="accordionExample" markdown="1"> {% for item in site.data.experiences.current %} <div class="accordion-item">
						<h5 class="accordion-header" id="Acc_{{item.id}}">
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{item.id}}" aria-expanded="false" aria-controls="collapse{{item.id}}">
								<h5>{{item.title}}</h5>
							</button>
						</h5>
						<div id="collapse{{item.id}}" class="accordion-collapse collapse" aria-labelledby="Acc_{{item.id}}">
							<div class="accordion-body">
								<div class="d-flex flex-column flex-md-row justify-content-between mb-3">
									<div class="flex-grow-1">
										<p class="subheading mb-1">
											<strong>{{item.employer}}</strong>
										</p>
										<p class="mb-0">{{item.desc}}</p>
									</div>
									<div class="flex-shrink-0">
										<span class="text-primary">{{item.duration}}</span>
									</div>
								</div>
							</div>
						</div>
					</div> {% endfor %} </div>
			</div>
		</div>
		<div class="accordion-item">
			<h5 class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pastPos" aria-expanded="false" aria-controls="pastPos">
					<h5>Past Experiences</h5>
				</button>
			</h5>
			<div id="pastPos" class="accordion-collapse collapse" aria-labelledby="pastPos">
				<div class="accordion-body">
					<div class="accordion accordion-flush mb-0" id="accordionExample" markdown="1">
						<div class="accordion accordion-flush mb-0" id="accordionExample"> {% for item in site.data.experiences.past %} <div class="accordion-item">
								<h5 class="accordion-header" id="Acc_{{item.id}}">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{item.id}}" aria-expanded="false" aria-controls="collapse{{item.id}}">
										<h5>{{item.title}}</h5>
									</button>
								</h5>
								<div id="collapse{{item.id}}" class="accordion-collapse collapse" aria-labelledby="Acc_{{item.id}}">
									<div class="accordion-body">
										<div class="d-flex flex-column flex-md-row justify-content-between mb-3">
											<div class="flex-grow-1">
												<p class="subheading mb-1">
													<strong>{{item.employer}}</strong>
												</p>
												<p class="mb-0">{{item.desc}}</p>
											</div>
											<div class="flex-shrink-0">
												<span class="text-primary">{{item.duration}}</span>
											</div>
										</div>
									</div>
								</div>
							</div> {% endfor %} </div>
					</div>
				</div>
			</div>

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12" defer></script>
<script src='{{"/assets/js/typed.js" | absolute_url }}' defer></script>
<link rel="stylesheet" href='{{"/assets/icons.css" | absolute_url }}'>
