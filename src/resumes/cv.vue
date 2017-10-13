<template>
<div>
  <div class="page-wrapper">
    <div class="page">
      <div class="page-inner">

        <div id="resume">
          <h1>{{person.name.first}} <mark>{{person.name.last}}</mark></h1>
          <h2>{{person.position}}</h2>
          <div class="intro">
            <div class="photo">
              <img src="../assets/polek.jpg" />
            </div>
            <quote v-html="person.description"></quote>
            <div class="contact">
              <ul>
                <li>
                  <span class="typcn typcn-star-outline"></span> <a :href="'https://' + person.contact.website">{{person.contact.website}}</a> <a :href="'https://' + person.contact.blog">{{person.contact.blog}}</a></li>
                <li>
                  <span class="typcn typcn-phone"></span> <a :href="'tel://' + person.contact.phone">{{person.contact.phone}}</a>
                <li>
                  <span class="typcn typcn-mail"></span> <a :href="'mailto://' + person.contact.email">{{person.contact.email}}</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a :href="'http://fb.com/' + person.contact.facebook">
                    <span class="typcn typcn-social-facebook"></span> fb.com/{{person.contact.facebook}}
                  </a>
                </li>
                <li>
                  <a :href="'https://www.linkedin.com/in/' + person.contact.linkedin">
                    <span class="typcn typcn-social-linkedin"></span> in/{{person.contact.linkedin}}
                  </a>
                  </li>
                <li>
                  <a :href="'https://twitter.com/' + person.contact.twitter">
                    <span class="typcn typcn-social-twitter"></span> @{{person.contact.twitter}}
                  </a>
                </li>

              </ul>
              <ul>
                <li>
                  <a :href="'https://github.com/' + person.contact.github">
                    <span class="typcn typcn-social-github"></span> github.com/{{person.contact.github}}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="section resume">
            <h3 class="cv"><span>Curriculum Vitae</span></h3>
            <div class="section">
              <table>
                <tr>
                  <td class="aside">
                    <aside>
                      <h4>Work Experience</h4>
                      <img src="../assets/icons/basic_case.svg" />
                    </aside>
                  </td>
                  <td>
                    <section>
                      <div class="experience-block" v-for="experience in person.experience">
                        <div class="row">
                          <h4 class="job-title"> {{experience.position}} </h4>
                          <p class="job-details">
                            <span class="job-company"> {{experience.company}} </span> / <span class="job-time-period"> {{experience.timeperiod}}</span>
                          </p>
                        </div>

                        <div class="row" v-if="experience.description">
                          <p class="job-description" v-html="experience.description"></p>
                        </div>
                      </div>
                    </section>
                    <p class="freelance">+ over 10 years of freelance web development experience</p>
                  </td>
                </tr>
              </table>
            </div>

            <div class="section">
              <table>
                <tr>
                  <td class="aside">
                    <aside>
                      <h4>Education</h4>
                      <img src="../assets/icons/basic_book_pencil.svg" />
                    </aside>
                  </td>
                  <td>
                    <section>
                      <div class="education-block" v-for="education in person.education">
                        <div class="row">
                          <span class="education-degree">{{education.degree}}</span> <span class="education-field">{{education.field}}</span>
                          <p class="education-details">
                            <span class="education-university">{{education.university}}</span> / <span class="education-time-period">{{education.timeperiod}}</span>
                          </p>
                        </div>
                        <div class="row" v-if="education.description">
                          <p class="education-description">{{education.description}}</p>
                        </div>
                      </div>
                    </section>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="section">
            <h3><span>Skills &amp; Abilities</span></h3>
            <div class="section expertise-section">
              <div class="expertise-block" v-for="exp in person.expertise">
                <div class="row">
                  <span class="expertise-level" :style="'width: ' + exp.level + '%'">{{ exp.level }}%</span>
                  <h4 class="expertise-name">{{ exp.name }}</h4>
                  <div class="expertise-level-bar" :style="'width: ' + exp.level + '%'"></div>
                </div>
              </div>
            </div>
            <div class="section skills">
              <table>
                <tr>
                  <td class="aside">
                    <aside>
                      <h4>Skills</h4>
                      <img src="../assets/icons/basic_gear.svg" />
                    </aside>
                  </td>
                  <td>
                    <section>
                      <div class="skills-group-block" v-for="skills in person.skills">
                        <div class="row">
                          <h4 class="skills-name">{{ skills.name }}</h4>
                          <h5 class="skills-description">{{ skills.description }}</h5>
                          <p class="skills">
                            <span class="skills-block" v-for="skill in skills.skills">
                              {{ skill.name }}
                            </span>
                          </p>
                        </div>
                      </div>
                    </section>
                  </td>
                </tr>
              </table>
            </div>

            <div class="section languages">
              <table>
                <tr>
                  <td class="aside">
                    <aside>
                      <h4>Languages</h4>
                      <img src="../assets/icons/basic_signs.svg" />
                    </aside>
                  </td>
                  <td>
                    <section>
                      <div class="language-block" v-for="lang in person.languages">
                        <div class="row">
                          <span class="language-level" :style="'width: ' + lang.level + '%'">{{ lang.level }}%</span>
                          <h4 class="language-name">{{ lang.name }} <small>{{ lang.levelName }}</small></h4>
                          <div class="language-level-bar" :style="'width: ' + lang.level + '%'"></div>
                        </div>
                      </div>
                    </section>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="section hobbies">
            <table>
              <tr>
                <td class="aside">
                  <aside>
                    <h4>Hobby</h4>
                    <img src="../assets/icons/basic_joypad.svg" />
                  </aside>
                </td>
                <td>
                  <section>
                    <span class="hobby" v-for="hobby in person.hobbies">
                      {{ hobby.name }}
                    </span>
                  </section>
                </td>
              </tr>
            </table>
          </div>

          <p class="recruitment-process-agreement">I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the Personal Data Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.</p>

        </div>

    </div>
  </div>
</div>

<div class="page-wrapper">
  <div class="page">
    <div class="page-inner">

      <!--<div class="row">
        Do you want this resume as JSON?
        <pre>curl -ils https://gpolek.com/resume.json | python -m json.tool</pre>
        <small>Format comptabile with <a href="https://jsonresume.org/">https://jsonresume.org/</a></small>
      </div>-->
    </div>
  </div>
</div>

</div>
</template>

<script>
import {
  PERSON
} from '../person';

import Vue from 'vue';
export default Vue.component('cv', {
  name: 'cv',
  data () {
    return {
      person: PERSON
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

@media screen {
    #resume {
        padding: 40px;
    }
}

@media print {
    #resume {
        padding: 20px 0;
    }
}

#resume {
  box-sizing: border-box;

  font-family: "Lekton","Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #555;
  line-height: 26px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.2px;
  overflow-x: hidden;

  a {
    color: inherit;
  }

  a:link, a:active, a:visited, a:focus {
    color: inherit;
    text-decoration: none;
  }

  .recruitment-process-agreement {
    display: block;
    clear: both;
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 0px;
    font-size: 10px;
    opacity: 0.8;
    text-align: center;
    line-height: 120%;
  }

  .contact {
    font-size: 12px;
  }

  .contact ul {
    margin: 0;
    padding: 0;
    margin-top: 15px;
    margin-right: 15px;
    display: inline-block;
    vertical-align: top;
    li {
      list-style: none;
    }
  }

  mark {
      background-color: #000;
      color: #fff;
      padding: 0.1em;
  }
  h1 {
      font-size: 32px;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 10px;
      font-weight: 700;
      margin-bottom: 20px;
      margin-top: 0px;
      text-transform: uppercase;
      color: #000;
      text-align: center;
      letter-spacing: 2px;
      line-height: 100%;
  }
  h2 {
      font-size: 18px;
      text-align: center;
      letter-spacing: 0;
      font-weight: 100;
      margin-bottom: 20px;
  }
  h3 {
      font-size: 16px;
      text-align: center;
      letter-spacing: 0;
      font-weight: 100;
      text-transform: uppercase;

      span {
        display: inline-block;
        border-bottom: 2px solid #000;
        padding: 0 12px;
      }
  }

  h3.cv {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  quote {
    border-left: 2px solid #000;
    padding-left: 5px;
    display: block;
    font-size: 13px;
    color: #000;
    line-height: 16px;
  }

  td {
    vertical-align: top;
  }

  aside {
    float: left;
    width: 150px;
    text-align: center;
    h4 {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 200;
      color: #000;
      margin: 0;
      padding: 0;
      letter-spacing: 0.5px;
    }
    img {
      opacity: 0.25;
      width: 40px;
      padding: 10px;
    }
  }

  .photo {
    width: 200px;
    height: 200px;
    float: right;
    margin-left: 25px;

    img {
      background: #efefef;
      width: 200px;
      height: 200px;
      border-radius: 100px;
      border: 0;
      outline: none;
    }
  }

  .section {
    clear: both;
    width: 100%;
  }

  .section.skills {
     page-break-before: always;
  }

  .section.languages,
  .section.hobbies {
    margin-top: 35px;
  }

  .job-title,
  .education-degree {
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    color: #000;
  }
  .job-details,
  .education-details {
    font-size: 12px;
    padding: 0;
    margin: 0;
    line-height: 100%;
    margin-bottom: 10px;
  }
  .job-description,
  .education-description {
    padding: 0;
    margin: 0;
    line-height: 110%;
    font-size: 13px;
    margin-bottom: 10px;
    color: #999;
  }

  .freelance {
    color: #999;
  }

  .expertise-section {
    margin-bottom: 35px;
  }
  .expertise-block {
    width: 60%;
    margin: 0 auto;
    position: relative;
  }
  .expertise-name {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .expertise-level {
    display: block;
    width: 100%;
    position: absolute;
    text-align: right;
  }
  .expertise-level-bar {
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
  }

  .skills-name {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 0;
  }
  .skills-description {
    font-weight: 200;
    font-size: 11px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  p.skills {
    text-align: center;
    font-size: 13px;
    span {
      display: inline-block;
      margin: 0 7px;
    }
  }

  .language-block {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .language-name {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 5px;
    small {
      font-size: 11px;
    }
  }
  .language-level {
    display: block;
    width: 100%;
    position: absolute;
    text-align: right;
    min-width: 53%;
  }
  .language-level-bar {
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
  }

  table {
    width: 100%;
  }

  td.aside {
    width: 100px;
  }

  .hobby {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 16px;
    display: inline-block;
    margin: 0 7px;
  }
}
</style>
