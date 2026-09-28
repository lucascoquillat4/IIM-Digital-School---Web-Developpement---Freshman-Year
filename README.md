# 🎓 IIM Digital School — First Year Common Core

This repository contains a collection of **projects, exercises and assignments completed during my first year at IIM Digital School**, as part of the **Common Core curriculum**.

It documents the different subjects, technologies and types of projects covered throughout the year, from basic HTML/CSS integration to JavaScript, PHP, MySQL, web marketing and cross-disciplinary projects.

> **Important context:** the work presented in this repository should not be interpreted as a complete representation of my technical level.
>
> I had already been developing websites and full-stack projects for approximately **10 years before starting at IIM**. The projects in this repository were academic assignments built to follow **specific course requirements and constraints**.
>
> As a result, I intentionally kept many projects within the requested scope instead of introducing unnecessary complexity, advanced architectures or technologies that were not part of the assignment.
>
> This repository therefore represents my **academic work and the subjects covered during the year**, rather than the full extent of my development experience.

---

## 📚 Table of Contents

- [🎯 About This Repository](#-about-this-repository)
- [🏫 Academic Context](#-academic-context)
- [🧭 Learning Areas](#-learning-areas)
- [💻 HTML & CSS](#-html--css)
- [⚡ JavaScript](#-javascript)
- [🐘 PHP & MySQL](#-php--mysql)
- [🖼️ Timeless Gallery](#️-timeless-gallery)
- [🎵 EurocK](#-eurock)
- [🏰 Donjon & Data](#-donjon--data)
- [📈 Web Marketing](#-web-marketing)
- [🛠️ Technical Stack](#️-technical-stack)
- [📂 Repository Structure](#-repository-structure)
- [📈 Academic Progression](#-academic-progression)
- [🎓 Skills Covered](#-skills-covered)
- [⚠️ About the Scope of These Projects](#️-about-the-scope-of-these-projects)
- [🚀 Beyond This Repository](#-beyond-this-repository)

---

# 🎯 About This Repository

The purpose of this repository is to keep a record of the work completed during my **first year at IIM Digital School**.

The Common Core program covers a broad range of digital subjects rather than focusing exclusively on software development.

Throughout the year, the projects touched on:

- Web development
- HTML / CSS integration
- JavaScript
- PHP
- MySQL
- SQL
- User authentication
- Browser storage
- UI integration
- Web marketing
- Digital project design
- User experience
- Cross-disciplinary projects

The projects vary considerably in size and complexity because they were created according to the requirements of individual courses.

---

# 🏫 Academic Context

## IIM Digital School

**Program:** Common Core  
**Year:** First Year  
**Academic Year:** 2024–2025

The Common Core is designed to provide students with a broad understanding of the digital industry before moving toward a more specialized field.

The objective is therefore not necessarily to create production-ready applications for every assignment, but to understand and apply the concepts introduced in each course.

This repository reflects that academic approach.

---

# 🧭 Learning Areas 

The year covered several major areas: 

```txt
                   IIM — COMMON CORE
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
    DEVELOPMENT        DESIGN            DIGITAL
       │                  │                  │
  ┌────┼────┐             │             Web Marketing
  │    │    │             │             Project Design
HTML  JS   PHP            │             User Experience
       │    │             │
       └─ MySQL           │
                          │
                     UI / Integration

The development-related work covered:

    HTML / CSS
         ↓
    JavaScript
         ↓
       PHP
         ↓
    MySQL / SQL
         ↓
Multi-technology Projects

Again, this represents the **academic structure of the courses**, not my personal learning curve as a developer.

---

# 💻 HTML & CSS

## `exercices-html/`

The HTML/CSS exercises focused on web integration fundamentals.

The assignment involved creating a multi-page website with different sections and educational content.

### Technologies

- HTML5
- CSS3
- Responsive CSS

### Concepts Covered

- Page structure
- Semantic HTML
- Navigation
- CSS selectors
- Layout
- Images
- Responsive design
- Asset organization

### Main Structure

    exercices-html/
    ├── index.html
    ├── PréBac.html
    ├── seconde.html
    ├── premiere.html
    ├── terminale.html
    ├── PostBac.html
    ├── CRSA.html
    ├── ET.html
    ├── fablab.html
    ├── css/
    │   ├── main.css
    │   └── responsive.css
    └── img/

The goal of this assignment was to demonstrate correct implementation of the requested HTML/CSS concepts rather than to build a production-grade website.

---

# ⚡ JavaScript

## `exercices-js/`

The JavaScript exercises focused on fundamental client-side programming concepts.

The repository contains several independent exercises.

---

## 🥊 Combat

`exercices-js/combat/`

A small JavaScript exercise based around a combat system.

The assignment introduces concepts such as:

- JavaScript classes
- Objects
- Methods
- Constructors
- Variables
- Conditions
- Loops
- Basic game logic

Example concepts:

    class Combattant
    constructor()
    attaquer()
    testerPrecision()
    afficherStats()

The purpose was to practice the JavaScript concepts required by the assignment rather than to develop a complete game engine.

---

## 🌙 Dark Mode

`exercices-js/darkmode/`

A simple exercise focused on DOM manipulation.

The interface allows the user to switch between normal and dark modes.

### Concepts

- DOM manipulation
- Events
- CSS classes
- `classList.toggle()`
- JavaScript / CSS interaction

---

## 📝 Form Validation

`exercices-js/form/`

An exercise focused on validating user input.

The form checks several fields and applies JavaScript logic to determine whether the submitted information is valid.

### Concepts

- Form events
- Input handling
- Validation
- Regular expressions
- Error handling
- DOM manipulation

---

## 🗂️ Tabs

`exercices-js/tab/`

A simple tab-based interface.

The exercise focuses on:

- Event listeners
- DOM selection
- Class manipulation
- Displaying and hiding content
- Basic interface logic

---

# 🐘 PHP & MySQL

## `exercices-php/`

The PHP section introduced server-side development and database interaction.

The assignments covered the fundamentals of:

- PHP
- SQL
- MySQL
- PDO
- Sessions
- Authentication
- Database queries

---

# 🔐 Authentication System

## `mon-site-connexion/`

A basic registration and login system.

### Features

- User registration
- Login
- Session creation
- Private area
- Logout
- Database interaction
- Password hashing

### Structure

    mon-site-connexion/
    ├── bdd/
    │   └── exercice_login.sql
    ├── connexion.php
    ├── inscription.php
    ├── traitement_inscription.php
    ├── login.php
    ├── traitement_login.php
    ├── espace_prive.php
    └── logout.php

### Technologies

- PHP
- MySQL
- SQL
- PDO
- PHP Sessions

---

# 📚 Library Management

## `mon-site-livres/`

A small PHP/MySQL project based around a library database.

The project demonstrates basic database operations and dynamic PHP rendering.

### Features

- Database connection
- SQL queries
- Book listing
- Adding books
- Prepared statements

### Structure

    mon-site-livres/
    ├── bdd/
    │   └── library.sql
    ├── connexion.php
    ├── index.php
    └── ajouter.php

---

# 🖼️ Timeless Gallery

## `TimelessGallery`

**Timeless Gallery** is one of the larger projects included in the repository.

The project is based around a digital art gallery concept.

The assignment combines front-end integration with JavaScript and introduces PHP-related concepts.

### Technologies

- HTML
- CSS
- JavaScript
- PHP
- MySQL
- PDO
- Sessions
- LocalStorage

The project includes several iterations and versions reflecting the development process required by the assignment.

The PHP version introduces concepts such as:

- User registration
- Login
- Sessions
- Private user areas
- Database interaction
- User-related data

---

# 🎵 EurocK

## `EurocK/`

A larger front-end project based around the **Eurockéennes de Belfort** festival.

The project focuses on creating an interactive website experience around the festival and its artists.

### Main Structure

    EurocK/
    ├── index.html
    ├── Game.html
    ├── News.html
    ├── Promotion.html
    ├── quizz.html
    ├── css/
    ├── js/
    └── img/

### Features

- Artist presentation
- Navigation
- Interactive pages
- Quiz
- Scoring
- User interactions
- LocalStorage
- Dynamic JavaScript behavior

### Technologies

- HTML5
- CSS3
- JavaScript
- LocalStorage

---

# 🏰 Donjon & Data

## `donjon&data/`

A visually-oriented web project built around a fantasy-themed concept.

The project focuses more heavily on:

- Visual integration
- Page composition
- Animations
- Scrolling effects
- Graphical assets
- Interface presentation

### Technologies

- HTML
- CSS
- JavaScript

### Libraries

- `WOW.js`
- `scrollIt`

### Structure

    donjon&data/
    ├── index.html
    ├── style.css
    ├── css/
    ├── js/
    └── images/

The project demonstrates the use of external JavaScript libraries to enhance a static website with animations and navigation effects.

---

# 📈 Web Marketing

## `exercices-webmarketing/`

The Common Core also included work outside of pure development.

The web marketing exercises introduced concepts related to:

- Digital communication
- Content
- Positioning
- User experience
- Brand presentation
- Digital project conception

These assignments highlight the multidisciplinary nature of the IIM curriculum.

A digital project is not only defined by its technical implementation, but also by how it is presented, communicated and experienced by its users.

---

# 🛠️ Technical Stack

The technologies encountered throughout these academic projects include:

| Category | Technologies |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Responsive Design | CSS / Media Queries |
| Front-end | JavaScript |
| DOM | JavaScript DOM API |
| Programming | JavaScript Classes / OOP |
| Back-end | PHP |
| Database | MySQL |
| Queries | SQL |
| Database Access | PDO |
| Authentication | PHP Sessions |
| Passwords | `password_hash()` / `password_verify()` |
| Browser Storage | LocalStorage |
| Animations | WOW.js |
| Scrolling | scrollIt |
| Interactive Components | Swiper.js |
| Local Development | Laragon |
| Database Management | phpMyAdmin |
| Editor | Visual Studio Code |
| Version Control | Git / GitHub |

---

# 📂 Repository Structure

The repository is organized by the different subjects and projects covered during the year.

    github/
    │
    ├── donjon&data/
    │   ├── index.html
    │   ├── style.css
    │   ├── css/
    │   ├── js/
    │   └── images/
    │
    ├── EurocK/
    │   ├── index.html
    │   ├── Game.html
    │   ├── News.html
    │   ├── Promotion.html
    │   ├── quizz.html
    │   ├── css/
    │   ├── js/
    │   └── img/
    │
    ├── exercices-html/
    │   ├── index.html
    │   ├── CRSA.html
    │   ├── ET.html
    │   ├── fablab.html
    │   ├── PréBac.html
    │   ├── seconde.html
    │   ├── premiere.html
    │   ├── terminale.html
    │   ├── PostBac.html
    │   ├── css/
    │   └── img/
    │
    ├── exercices-js/
    │   ├── combat/
    │   ├── darkmode/
    │   ├── form/
    │   ├── tab/
    │   └── css/
    │
    ├── exercices-php/
    │   ├── mon-site-connexion/
    │   ├── mon-site-livres/
    │   ├── exercices-php-TimelessGallery/
    │   └── TimelessGallery-main-(2)/
    │
    └── exercices-webmarketing/

Some folders contain duplicated or intermediate versions of assignments. These are preserved as part of the academic history of the repository.

---

# 📈 Academic Progression

The curriculum can be viewed as a progression through different areas of web development:

    HTML / CSS
         │
         ▼
    Web Integration
         │
         ▼
    JavaScript
         │
         ├── DOM
         ├── Events
         ├── Forms
         └── Basic OOP
         │
         ▼
       PHP
         │
         ├── Server-side logic
         ├── Sessions
         └── Authentication
         │
         ▼
    MySQL / SQL
         │
         ├── Database queries
         ├── Data management
         └── PDO
         │
         ▼
    Multi-technology Projects

This progression reflects the **structure of the academic curriculum**, rather than my personal progression as a developer.

---

# 🎓 Skills Covered

## Development

- HTML5
- CSS3
- JavaScript
- PHP
- SQL
- MySQL
- PDO

## Front-end

- Web integration
- Responsive design
- DOM manipulation
- Event handling
- Form validation
- Interactive interfaces
- Browser storage
- Animations

## Back-end

- PHP fundamentals
- Database connections
- SQL queries
- PDO
- Sessions
- Authentication
- Password hashing

## Digital Project Design

- User experience
- Interface integration
- Visual presentation
- Digital content
- Web marketing
- Project conception

---

# ⚠️ About the Scope of These Projects

The projects in this repository should be interpreted within their **academic context**.

They were created in response to specific assignments with predefined requirements.

Therefore, in many cases:

- The scope was intentionally limited.
- The architecture was kept simple.
- Only the technologies requested by the assignment were used.
- Additional complexity was deliberately avoided.
- Production-level concerns were not always relevant to the exercise.

This is particularly important when evaluating the technical content of the repository.

## My Previous Experience

Before joining IIM, I had already been developing websites and working on **full-stack development for around 10 years**.

Consequently, many of the fundamentals introduced during these courses were already familiar to me.

I approached the assignments primarily as **academic exercises**, following the requested specifications rather than trying to demonstrate the most advanced implementation I could produce.

For this reason, this repository is **not intended to serve as a complete technical portfolio** or as a measurement of my maximum development capabilities.

Instead, it provides a record of:

> **what was taught, what was requested, and what was produced during my first year of the IIM Common Core.**

---

# 🚀 Beyond This Repository

The work contained here represents only a small and constrained part of my overall development experience.

My personal development work extends beyond the technologies and concepts demonstrated in these academic assignments.

The projects in this repository should therefore be viewed as:

    ACADEMIC WORK
         │
         ▼
    Course Requirements
         │
         ▼
    Technologies Covered
         │
         ▼
    Concepts Practiced
         │
         ▼
    First-Year Record

rather than as a complete representation of my technical background.

---

## 👨‍💻 Author

**Lucas Coquillat**

Student — **IIM Digital School**

**First Year — Common Core**

Academic Year **2024–2025**

---

> *This repository documents the projects and exercises completed during my first year at IIM Digital School. It reflects the academic requirements and technologies covered throughout the Common Core curriculum, rather than the full extent of my prior development experience.*
