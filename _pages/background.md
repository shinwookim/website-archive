---
layout: page
title: Background
permalink: /background/
published: true
---

<div class="text-center"><a class="btn btn-outline-dark" href="{{ '/assets/Resume.pdf' | prepend: site.baseurl }}">View my Résumé</a></div>

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

---

<link rel="stylesheet" href='{{"/assets/icons.css" | absolute_url }}'>
