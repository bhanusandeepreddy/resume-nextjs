"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

const translations = {
  en: {
    name: "Bhanu Sandeep Reddy Chirra",
    title: "Verification and Validation Test Engineer",
    experience: "Experience",
    education: "Educational Background",
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
    languages: "Languages",
    programmingLanguages: "Programming Languages",
    testingTools: "Testing Tools",
    methodologies: "Methodologies",
    workExperience: "Work Experience",
    entwicklungsEngineer: "Development Engineer, IAV GmbH",
    designEngineer: "Design Engineer, IAV GmbH",
    masters: "MS in Scientific Instrumentation",
    bachelors: "BS in Mechanical Engineering",
    project1: "Automated Test Framework for IoT Devices",
    project2: "AI-Powered Test Case Generation Tool",
    project3: "Performance Testing Dashboard",
    allRightsReserved: "All rights reserved.",
  },
  de: {
    name: "Bhanu Sandeep Reddy Chirra",
    title: "Verifizierungs- und Validierungs Testingenieur",
    experience: "Erfahrung",
    education: "Ausbildung",
    projects: "Projekte",
    skills: "Fähigkeiten",
    certifications: "Zertifizierungen",
    languages: "Sprachen",
    programmingLanguages: "Programmiersprachen",
    testingTools: "Testwerkzeuge",
    methodologies: "Methodiken",
    workExperience: "Berufserfahrung",
    entwicklungsEngineer: "Entwicklungsingenieur, IAV GmbH",
    designEngineer: "Konstrukteur, IAV GmbH",
    masters: "Master in Scientific Instrumentation",
    bachelors: "Bachelor in Machinenbau",
    project1: "Automatisiertes Testframework für IoT-Geräte",
    project2: "KI-gestütztes Testfall-Generierungstool",
    project3: "Performance-Testing-Dashboard",
    allRightsReserved: "Alle Rechte vorbehalten.",
  }
}

export default function Resume() {
  const [activeSection, setActiveSection] = useState<'experience' | 'education' | 'projects'>('experience')
  const [language, setLanguage] = useState<'en' | 'de'>('en')
  const t = translations[language]

  return (
    <div className="max-w-4xl mx-auto p-8 pt-16 bg-white text-gray-800 font-serif relative">
      <div className="absolute top-1 right-1 p-0.5 space-x-2">
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          onClick={() => setLanguage('en')}
          className={`w-8 h-8 p-0 text-1xl ${language === 'en' ? 'bg-black text-white' : ''}`}
          aria-label="Switch to English"
        >
          🇬🇧
        </Button>
        <Button
          variant={language === 'de' ? 'default' : 'outline'}
          onClick={() => setLanguage('de')}
          className={`w-8 h-8 p-0 text-1xl ${language === 'de' ? 'bg-black text-white' : ''}`}
          aria-label="Auf Deutsch umschalten"
        >
          🇩🇪
        </Button>
      </div>

      <header className="mb-8 border-b-3 border-navy pb-4">
        <h1 className="text-4xl font-sans font-bold text-navy">{t.name}</h1>
        <h2 className="text-xl text-gray-600">{t.title}</h2>
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
          <a href="https://www.linkedin.com/in/bhanusandeep" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-navy transition-colors">
            <Linkedin size={16} className="mr-2 text-navy" />
            linkedin.com/in/bhanusandeep
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <section className="mb-6">
            <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">{t.skills}</h3>
            <div className="space-y-2">
              <SkillCategory name={t.programmingLanguages} skills={["Python", "Matlab"]} />
              <SkillCategory name={t.testingTools} skills={["ecu.test", "vTESTstudio"]} />
              <SkillCategory name={t.methodologies} skills={["Agile", "TDD", "BDD", "CI/CD"]} />
            </div>
          </section>

          <section className="mb-4">
            <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">{t.certifications}</h3>
            <ul className="list-disc list-inside">
              <li>ISTQB Certified Tester</li>
              <li>IREB Requirements Engineer</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">{t.languages}</h3>
            <ul className="list-disc list-inside">
              <li>Telugu (Native)</li>
              <li>English (Fluent)</li>
              <li>German (Intermediate)</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-2">
        <div className="flex space-x-2 mb-4">
            <Button
              variant={activeSection === 'experience' ? 'default' : 'outline'}
              onClick={() => setActiveSection('experience')}
              className={activeSection === 'experience' ? 'bg-black text-white' : ''}
            >
              {t.experience}
            </Button>
            <Button
              variant={activeSection === 'education' ? 'default' : 'outline'}
              onClick={() => setActiveSection('education')}
              className={activeSection === 'education' ? 'bg-black text-white' : ''}
            >
              {t.education}
            </Button>
            <Button
              variant={activeSection === 'projects' ? 'default' : 'outline'}
              onClick={() => setActiveSection('projects')}
              className={activeSection === 'projects' ? 'bg-black text-white' : ''}
            >
              {t.projects}
            </Button>
          </div>

          {activeSection === 'experience' && (
            <section>
              <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">{t.workExperience}</h3>
              <div className="mb-4">
                <h4 className="font-semibold">{t.entwicklungsEngineer}</h4>
                <p className="text-sm text-gray-600">June 2019 - Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Led a team of 5 engineers in implementing automated testing frameworks, resulting in a 40% reduction in regression testing time' : 'Leitete ein Team von 5 Ingenieuren bei der Implementierung automatisierter Testframeworks, was zu einer 40%igen Reduzierung der Regressionstest-Zeit führte'}</li>
                  <li>{language === 'en' ? 'Developed and maintained a comprehensive test suite for a cloud-based SaaS platform, achieving 95% code coverage' : 'Entwickelte und pflegte eine umfassende Testsuite für eine cloudbasierte SaaS-Plattform und erreichte eine Codeabdeckung von 95%'}</li>
                  <li>{language === 'en' ? 'Implemented continuous integration and deployment pipelines, reducing release cycles from bi-weekly to daily' : 'Implementierte kontinuierliche Integrations- und Bereitstellungspipelines, wodurch die Release-Zyklen von zweiwöchentlich auf täglich reduziert wurden'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">{t.designEngineer}</h4>
                <p className="text-sm text-gray-600">August 2017 - May 2019</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Designed and executed test plans for web and mobile applications, identifying and tracking over 200 critical bugs' : 'Entwarf und führte Testpläne für Web- und mobile Anwendungen durch, identifizierte und verfolgte über 200 kritische Fehler'}</li>
                  <li>{language === 'en' ? 'Collaborated with development teams to implement BDD practices, improving requirements clarity by 30%' : 'Arbeitete mit Entwicklungsteams zusammen, um BDD-Praktiken zu implementieren, was die Klarheit der Anforderungen um 30% verbesserte'}</li>
                  <li>{language === 'en' ? 'Optimized performance testing processes, resulting in a 25% reduction in application load times' : 'Optimierte Performance-Testprozesse, was zu einer 25%igen Reduzierung der Anwendungsladezeiten führte'}</li>
                </ul>
              </div>
            </section>
          )}

          {activeSection === 'education' && (
            <section>
              <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">{t.education}</h3>
              <div className="mb-4">
                <h4 className="font-semibold">{t.masters}</h4>
                <p>Stanford University, 2015-2017</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Specialized in Software Engineering and Artificial Intelligence' : 'Spezialisierung auf Software Engineering und Künstliche Intelligenz'}</li>
                  <li>{language === 'en' ? 'Thesis: "Improving Test Case Generation Using Machine Learning Techniques"' : 'Abschlussarbeit: "Verbesserung der Testfallgenerierung mit Techniken des maschinellen Lernens"'}</li>
                  <li>GPA: 3.9/4.0</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">{t.bachelors}</h4>
                <p>University of California, Berkeley, 2011-2015</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Minor in Data Science' : 'Nebenfach Datenwissenschaften'}</li>
                  <li>{language === 'en' ? 'Capstone Project: "Automated Bug Detection in Mobile Applications"' : 'Abschlussprojekt: "Automatisierte Fehlererkennung in mobilen Anwendungen"'}</li>
                  <li>GPA: 3.8/4.0</li>
                </ul>
              </div>
            </section>
          )}

          {activeSection === 'projects' && (
            <section>
              <h3 className="text-lg font-sans font-semibold text-navy border-b border-gray-300 mb-2">{t.projects}</h3>
              <div className="mb-4">
                <h4 className="font-semibold">{t.project1}</h4>
                <p className="text-sm text-gray-600">January 2020 - June 2020</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Developed a scalable test automation framework for IoT devices using Python and MQTT protocol' : 'Entwickelte ein skalierbares Testautomatisierungsframework für IoT-Geräte unter Verwendung von Python und dem MQTT-Protokoll'}</li>
                  <li>{language === 'en' ? 'Reduced manual testing effort by 60% and improved device reliability by 25%' : 'Reduzierte den manuellen Testaufwand um 60% und verbesserte die Gerätezuverlässigkeit um 25%'}</li>
                  <li>{language === 'en' ? 'Implemented parallel test execution, increasing test throughput by 300%' : 'Implementierte parallele Testausführung, wodurch der Testdurchsatz um 300% erhöht wurde'}</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">{t.project2}</h4>
                <p className="text-sm text-gray-600">July 2019 - December 2019</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Created a machine learning model to generate test cases based on code changes using TensorFlow and NLP techniques' : 'Erstellte ein maschinelles Lernmodell zur Generierung von Testfällen basierend auf Codeänderungen unter Verwendung von TensorFlow und NLP-Techniken'}</li>
                  <li>{language === 'en' ? 'Increased test coverage by 35% and identified edge cases missed by manual testing' : 'Erhöhte die Testabdeckung um 35% und identifizierte Randfälle, die bei manuellen Tests übersehen wurden'}</li>
                  <li>{language === 'en' ? 'Integrated the tool with existing CI/CD pipeline, reducing time-to-market by 20%' : 'Integrierte das Tool in die bestehende CI/CD-Pipeline und  reduzierte die Time-to-Market um 20%'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">{t.project3}</h4>
                <p className="text-sm text-gray-600">March 2018 - August 2018</p>
                <ul className="list-disc list-inside mt-2">
                  <li>{language === 'en' ? 'Designed and implemented a real-time performance testing dashboard using React and D3.js' : 'Entwarf und implementierte ein Echtzeit-Performance-Testing-Dashboard mit React und D3.js'}</li>
                  <li>{language === 'en' ? 'Integrated with JMeter and Gatling to visualize test results and system metrics' : 'Integration mit JMeter und Gatling zur Visualisierung von Testergebnissen und Systemmetriken'}</li>
                  <li>{language === 'en' ? 'Reduced time spent on performance analysis by 40% through automated report generation' : 'Reduzierte den Zeitaufwand für Performanceanalysen durch automatisierte Berichtgenerierung um 40%'}</li>
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bhanu Sandeep Reddy Chirra. {t.allRightsReserved}
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