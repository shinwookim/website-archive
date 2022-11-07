---
layout: page
title: Background
permalink: /background/
published: true
---
<div class="text-center"><a class="btn btn-outline-dark" href="{{ '/assets/Resume.pdf' | prepend: site.baseurl }}"> Résumé</a></div>

## Education

### <i class="pitt-icon"></i>University of Pittsburgh

#### School of Computing and Information + David C. Frederick Honors College

August 2021 - (Expected) May 2026  
Bachelor of Science - Computer Science, Data Science, Mathematics

---

## Experiences

<style>
  h5{margin-bottom: 0 !important;}
</style>

Please visit my [LinkedIn](https://linkedin.com/in/kimshinwoo) for the most up-to-date information. Click the buttons below to reveal
{: .text-center}

<div class="accordion accordion-flush border mb-0" id="accordionExample">
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



Nothing I write, post, or link to here necessarily has anything to do with any past, present, or future employer(s), or any other institutions I've been associated with. My opinions are mine and mine alone.

<link rel="stylesheet" href="{{"/assets/icons.css" | absolute_url }}">
