"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Resume() {
  const [activeSection, setActiveSection] = useState<'experience' | 'education' | 'projects'>('experience')

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 font-serif">
      <header className="mb-8 border-b-2 border-navy pb-4">
        <h1 className="text-4xl font-sans font-bold text-navy">Bhanu Sandeep Reddy Chirra</h1>
        <h2 className="text-xl text-gray-600">Verification and Validation Engineer</h2>
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          <a href="tel:+4917643882710" className="flex items-center hover:text-navy transition-colors">
            <Phone size={16} className="mr-2 text-navy" />
            (176) 4388-2710
          </a>
          <a href="mailto:bhanusandeepreddy@gmail.com" className="flex items-center hover:text-navy transition-colors">
            <Mail size={16} className="mr-2 text-navy" />
            bhanusandeepreddy@gmail.com
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Frankfurt,DE" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-navy transition-colors">
            <MapPin size={16} className="mr-2 text-navy" />
            Frankfurt, DE
          </a>
          <a href="https://www.linkedin.com/in/bhanusandeepreddy" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-navy transition-colors">
            <Linkedin size={16} className="mr-2 text-navy" />
            linkedin.com/in/bhanusandeepreddy
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <section className="mb-6">
            <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">Skills</h3>
            <div className="space-y-2">
              <SkillCategory name="Programming Languages" skills={["Python", "C++", "Java", "SQL"]} />
              <SkillCategory name="Testing Tools" skills={["Selenium", "JUnit", "TestNG", "Cucumber"]} />
              <SkillCategory name="Methodologies" skills={["Agile", "TDD", "BDD", "CI/CD"]} />
            </div>
          </section>

          <section className="mb-4">
            <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">Certifications</h3>
            <ul className="list-disc list-inside">
              <li>ISTQB Certified Tester</li>
              <li>AWS Certified Developer</li>
              <li>Scrum Master Certification</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">Languages</h3>
            <ul className="list-disc list-inside">
              <li>English (Native)</li>
              <li>Spanish (Fluent)</li>
              <li>Mandarin (Intermediate)</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-2">
          <div className="flex space-x-2 mb-4">
            <Button
              variant={activeSection === 'experience' ? 'default' : 'outline'}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </Button>
            <Button
              variant={activeSection === 'education' ? 'default' : 'outline'}
              onClick={() => setActiveSection('education')}
            >
              Educational Background
            </Button>
            <Button
              variant={activeSection === 'projects' ? 'default' : 'outline'}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </Button>
          </div>

          {activeSection === 'experience' && (
            <section>
              <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">Work Experience</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Senior V&V Engineer, TechCorp</h4>
                <p className="text-sm text-gray-600">June 2019 - Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Led a team of 5 engineers in implementing automated testing frameworks, resulting in a 40% reduction in regression testing time</li>
                  <li>Developed and maintained a comprehensive test suite for a cloud-based SaaS platform, achieving 95% code coverage</li>
                  <li>Implemented continuous integration and deployment pipelines, reducing release cycles from bi-weekly to daily</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">V&V Engineer, InnoSoft Solutions</h4>
                <p className="text-sm text-gray-600">August 2017 - May 2019</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Designed and executed test plans for web and mobile applications, identifying and tracking over 200 critical bugs</li>
                  <li>Collaborated with development teams to implement BDD practices, improving requirements clarity by 30%</li>
                  <li>Optimized performance testing processes, resulting in a 25% reduction in application load times</li>
                </ul>
              </div>
            </section>
          )}

          {activeSection === 'education' && (
            <section>
              <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">Education</h3>
              <div className="mb-4">
                <h4 className="font-semibold">MS in Computer Science</h4>
                <p>Stanford University, 2015-2017</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Specialized in Software Engineering and Artificial Intelligence</li>
                  <li>Thesis: "Improving Test Case Generation Using Machine Learning Techniques"</li>
                  <li>GPA: 3.9/4.0</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">BS in Software Engineering</h4>
                <p>University of California, Berkeley, 2011-2015</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Minor in Data Science</li>
                  <li>Capstone Project: "Automated Bug Detection in Mobile Applications"</li>
                  <li>GPA: 3.8/4.0</li>
                </ul>
              </div>
            </section>
          )}

          {activeSection === 'projects' && (
            <section>
              <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">Projects</h3>
              <div className="mb-4">
                <h4 className="font-semibold">Automated Test Framework for IoT Devices</h4>
                <p className="text-sm text-gray-600">January 2020 - June 2020</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Developed a scalable test automation framework for IoT devices using Python and MQTT protocol</li>
                  <li>Reduced manual testing effort by 60% and improved device reliability by 25%</li>
                  <li>Implemented parallel test execution, increasing test throughput by 300%</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">AI-Powered Test Case Generation Tool</h4>
                <p className="text-sm text-gray-600">July 2019 - December 2019</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Created a machine learning model to generate test cases based on code changes using TensorFlow and NLP techniques</li>
                  <li>Increased test coverage by 35% and identified edge cases missed by manual testing</li>
                  <li>Integrated the tool with existing CI/CD pipeline, reducing time-to-market by 20%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Performance Testing Dashboard</h4>
                <p className="text-sm text-gray-600">March 2018 - August 2018</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Designed and implemented a real-time performance testing dashboard using React and D3.js</li>
                  <li>Integrated with JMeter and Gatling to visualize test results and system metrics</li>
                  <li>Reduced time spent on performance analysis by 40% through automated report generation</li>
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bhanu Sandeep Reddy Chirra. All rights reserved.
      </footer>
    </div>
  )
}

function SkillCategory({ name, skills }: { name: string; skills: string[] }) {
  return (
    <div>
      <h4 className="font-semibold">{name}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 text-sm px-2 py-1 rounded">{skill}</span>
        ))}
      </div>
    </div>
  )
}