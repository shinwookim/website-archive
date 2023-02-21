---
title: About
layout: default
permalink: /about/
published: true
---

<style>
  h6,h6{
    margin-bottom: 0 !important;
  }
  ul{list-style: none;}
</style>

My name is Shinwoo Kim, and I am a student at the [University of Pittsburgh](https://pitt.edu)'s [School of Computing and Information](https://sci.pitt.edu) & [David C. Frederick Honors College](https://www.frederickhonors.pitt.edu/) where I study Computer Science and Mathematics. My current interests are in the field of **Computer Systems, Operating Systems, and Computer Architecture**, although there are very few things in computer science that I'm _not_ interested in. Currently, I am working as a [teaching assistant]({{ '/teaching/' | prepend: site.baseurl }}) for the University of Pittsburgh's Department of Computer Science; I also serve as the Chief Technical Officer and Lead Software Developer for the [_Special Needs Assitance Program for Social Engagement_](https://snapfse.com) and the [_TouchTheInvisible_](https://touchtheinvisible.com) project at the University of Pittsburgh. <span class="endmark"></span>

##### **Education**

###### <i class="pitt-icon"></i>B.S., Computer Science, (Exp.) 2024
- University of Pittsburgh (School of Computing and Information & David C. Frederick Honors College)

<br>

##### **Work Experiences**

<div class="accordion accordion-flush border mb-0" id="accordionExperiences">
  <div class="accordion-item">
    <div class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#currentPositions"
        aria-expanded="false"
        aria-controls="currentPositions"
      >
        <h5>Current Positions</h5>
      </button>
    </div>
    <div
      id="currentPositions"
      class="accordion-collapse collapse"
      aria-labelledby="currentPositions"
    >
      <div class="accordion-body">
        <div class="accordion accordion-flush mb-0" id="currPos">
          {% for item in site.data.experiences.current %}
          <div class="accordion-item accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse{{item.id}}"
              aria-expanded="false"
              aria-controls="collapse{{item.id}}"
            >
              <h5>{{item.title}}</h5>
            </button>
          </div>
          <div
            id="collapse{{item.id}}"
            class="accordion-collapse collapse"
            aria-labelledby="Acc_{{item.id}}"
          >
            <div class="accordion-body">
              <div class="d-flex flex-column justify-content-between mb-3">
                <div class="d-md-flex justify-content-between mb-3">
                  <div class="flex-grow-1">
                    <p class="subheading mb-1">
                      <strong markdown="1">{{item.employer}}</strong>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <span class="text-pr  imary">{{item.duration}}</span>
                  </div>
                </div>
                <p class="mb-0" markdown="1">{{item.desc}}</p>
              </div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#previousPositions"
        aria-expanded="false"
        aria-controls="previousPositions"
      >
        <h5>Previous Positions</h5>
      </button>
    </div>
    <div
      id="previousPositions"
      class="accordion-collapse collapse"
      aria-labelledby="previousPositions"
    >
      <div class="accordion-body">
        <div class="accordion accordion-flush mb-0" id="prevPos">
            {% for item in site.data.experiences.past %}
            <div class="accordion-item accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse{{item.id}}"
                aria-expanded="false"
                aria-controls="collapse{{item.id}}"
              >
                <h5>{{item.title}}</h5>
              </button>
            </div>
            <div
              id="collapse{{item.id}}"
              class="accordion-collapse collapse"
              aria-labelledby="Acc_{{item.id}}"
            >
              <div class="accordion-body">
                <div class="d-flex flex-column justify-content-between mb-3">
                  <div class="d-md-flex justify-content-between mb-3">
                    <div class="flex-grow-1">
                      <p class="subheading mb-1">
                        <strong markdown="1">{{item.employer}}</strong>
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <span class="text-primary">{{item.duration}}</span>
                    </div>
                  </div>
                  <p class="mb-0" markdown="1">{{item.desc}}</p>
                </div>
              </div>
            </div>
            {% endfor %}
          </div>
      </div>
    </div>
  </div>
</div>

Please visit my [LinkedIn](https://linkedin.com/in/kimshinwoo) for the most up-to-date information. 
{: .text-center}

---

{% include icons.html %}
