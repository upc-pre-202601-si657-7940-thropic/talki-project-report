<div style="text-align: center;">
  <img src="./assets/logos/upc-logo.png" alt="UPC Logo" style="width: 250px; height: auto;">
</div>

<h2 style="text-align: center;"> Universidad Peruana de Ciencias Aplicadas </h2>

<h4 style="text-align: center"> Ingeniería de Software </h4>

<h4 style="text-align: center"> Periodo: 202610 </h4>

<h4 style="text-align: center"> [COMPLETAR: Código del curso] | Fundamentos de Arquitectura de Software </h4>

<h4 style="text-align: center"> Sección: [COMPLETAR] </h4>

<h4 style="text-align: center"> Docente: [COMPLETAR: Nombre del profesor] </h4>

<h3 style="text-align: center;"> Informe de Trabajo Final </h3>

<h4 style="text-align: center"> Startup: Talki </h4>

<h4 style="text-align: center"> Producto: Talki </h4>

<h4 style="text-align: center">Integrantes:</h4>

<div style="text-align:center; margin-top: 10px; font-size: 90%; line-height: 1.6;">
   <table style="margin-left: auto; margin-right: auto;">
      <tr>
         <th>Código</th>
         <th>Apellidos y Nombres</th>
      </tr>
      <tr>
         <td>[COMPLETAR]</td>
         <td>[COMPLETAR]</td>
      </tr>
      <tr>
         <td>[COMPLETAR]</td>
         <td>[COMPLETAR]</td>
      </tr>
      <tr>
         <td>[COMPLETAR]</td>
         <td>[COMPLETAR]</td>
      </tr>
      <tr>
         <td>[COMPLETAR]</td>
         <td>[COMPLETAR]</td>
      </tr>
      <tr>
         <td>[COMPLETAR]</td>
         <td>[COMPLETAR]</td>
      </tr>
   </table>
</div>

<br>

<h5 style="text-align: center; font-style: italic;"> Abril 2026 </h5>

<hr class="page-break">

# Registro de Versiones del Informe

| Version | Fecha | Autor | Descripción de modificación |
|---------|-------|-------|-----------------------------|
|         |       |       |                             |

<hr class="page-break">

# Contenido

- [Capítulo I: Introducción](#capítulo-i-introducción)
   - [1.1. Startup Profile](#11-startup-profile)
      - [1.1.1. Descripción de la Startup](#111-descripción-de-la-startup)
      - [1.1.2. Perfiles de integrantes del equipo](#112-perfiles-de-integrantes-del-equipo)
   - [1.2. Solution Profile](#12-solution-profile)
      - [1.2.1. Nombre del producto](#121-nombre-del-producto)
      - [1.2.2. Antecedentes y problemática](#122-antecedentes-y-problemática)
      - [1.2.3. Lean UX Process](#123-lean-ux-process)
         - [1.2.3.1. Lean UX Problem Statement](#1231-lean-ux-problem-statement)
         - [1.2.3.2. Lean UX Assumptions](#1232-lean-ux-assumptions)
         - [1.2.3.3. Lean UX Hypothesis](#1233-lean-ux-hypothesis)
         - [1.2.3.4. Lean UX Canvas](#1234-lean-ux-canvas)
   - [1.3. Segmentos objetivo](#13-segmentos-objetivo)

- [Capítulo II: Requirements & Analysis](#capítulo-ii-requirements--analysis)
   - [2.1. Competidores](#21-competidores)
   - [2.2. Entrevistas](#22-entrevistas)
   - [2.3. Needfinding](#23-needfinding)
      - [2.3.1. User Personas](#231-user-personas)
      - [2.3.2. User Task Matrix](#232-user-task-matrix)
      - [2.3.3. Empathy Maps](#233-empathy-maps)
      - [2.3.4. As-is Scenario Mapping](#234-as-is-scenario-mapping)

- [Capítulo III: Requirements Specification](#capítulo-iii-requirements-specification)
   - [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
   - [3.2. User Stories](#32-user-stories)
   - [3.3. Impact Map](#33-impact-map)
   - [3.4. Product Backlog](#34-product-backlog)

- [Capítulo IV: Product Architecture Design](#capítulo-iv-product-architecture-design)
   - [4.1. Design Concepts, ViewPoints & ER Diagrams](#41-design-concepts-viewpoints--er-diagrams)
      - [4.1.1. Principles Statements](#411-principles-statements)
      - [4.1.2. Approaches Statements Architectural Styles & Patterns](#412-approaches-statements-architectural-styles--patterns)
      - [4.1.3. Context Diagram](#413-context-diagram)
      - [4.1.4. Approach driven ViewPoints Diagrams](#414-approach-driven-viewpoints-diagrams)
      - [4.1.5. Relational/Non Relational Database Diagram](#415-relationalnon-relational-database-diagram)
      - [4.1.6. Design Patterns](#416-design-patterns)
      - [4.1.7. Tactics](#417-tactics)
   - [4.2. Architectural Drivers](#42-architectural-drivers)
      - [4.1.8. Design Purpose](#418-design-purpose)
      - [4.1.9. Primary Functionality (Primary User Stories)](#419-primary-functionality-primary-user-stories)
      - [4.1.10. Quality Attribute Scenarios](#4110-quality-attribute-scenarios)
      - [4.1.11. Constraints](#4111-constraints)
      - [4.1.12. Architectural Concerns](#4112-architectural-concerns)
   - [4.3. ADD Iterations](#43-add-iterations)
      - [4.2.X. Iteration N: Iteration Name](#42x-iteration-n-iteration-name)
         - [4.2.X.1. Architectural Design Backlog N](#42x1-architectural-design-backlog-n)
         - [4.2.X.2. Establish Iteration Goal by Selecting Drivers](#42x2-establish-iteration-goal-by-selecting-drivers)
         - [4.2.X.3. Choose One or More Elements of the System to Refine](#42x3-choose-one-or-more-elements-of-the-system-to-refine)
         - [4.2.X.4. Choose One or More Design Concepts That Satisfy the Selected Drivers](#42x4-choose-one-or-more-design-concepts-that-satisfy-the-selected-drivers)
         - [4.2.X.5. Instantiate Architectural Elements, Allocate Responsibilities, and Define Interfaces](#42x5-instantiate-architectural-elements-allocate-responsibilities-and-define-interfaces)
         - [4.2.X.6. Sketch Views (C4 & UML) and Record Design Decisions](#42x6-sketch-views-c4--uml-and-record-design-decisions)
         - [4.2.X.7. Analysis of Current Design and Review Iteration Goal (Kanban Board)](#42x7-analysis-of-current-design-and-review-iteration-goal-kanban-board)

- [Capítulo V: Product Implementation, Validation & Deployment](#capítulo-v-product-implementation-validation--deployment)
   - [5.1. Testing Suites & General Patterns](#51-testing-suites--general-patterns)
      - [5.1.1. Backend Application Core Testing Suite](#511-backend-application-core-testing-suite)
      - [5.1.2. Pattern Based Backend Application(s)](#512-pattern-based-backend-applications)
      - [5.1.3. Pattern Based Custom Software Library](#513-pattern-based-custom-software-library)
      - [5.1.4. Framework Pattern Driven Refactoring Report](#514-framework-pattern-driven-refactoring-report)
   - [5.2. Software Configuration Management](#52-software-configuration-management)
      - [5.2.1. Software Development Environment Configuration](#521-software-development-environment-configuration)
      - [5.2.2. Source Code Management](#522-source-code-management)
      - [5.2.3. Source Code Style Guide & Conventions](#523-source-code-style-guide--conventions)
      - [5.2.4. Software Deployment Configuration](#524-software-deployment-configuration)
   - [5.3. Microservices Implementation](#53-microservices-implementation)
      - [5.3.1. Sprint 1](#531-sprint-1)
         - [5.3.1.1. Sprint Backlog 1](#5311-sprint-backlog-1)
         - [5.3.1.2. Development Evidence for Sprint Review](#5312-development-evidence-for-sprint-review)
         - [5.3.1.3. Testing Suite Evidence for Sprint Review](#5313-testing-suite-evidence-for-sprint-review)
         - [5.3.1.4. Execution Evidence for Sprint Review](#5314-execution-evidence-for-sprint-review)
         - [5.3.1.5. Microservices Documentation Evidence for Sprint Review](#5315-microservices-documentation-evidence-for-sprint-review)
         - [5.3.1.6. Software Deployment Evidence for Sprint Review](#5316-software-deployment-evidence-for-sprint-review)
         - [5.3.1.7. Team Collaboration Insights during Sprint](#5317-team-collaboration-insights-during-sprint)
         - [5.3.1.8. Kanban Board](#5318-kanban-board)
      - [5.3.2. Sprint 2](#532-sprint-2)
         - [5.3.2.1. Sprint Backlog 2](#5321-sprint-backlog-2)
         - [5.3.2.2. Development Evidence for Sprint Review](#5322-development-evidence-for-sprint-review)
         - [5.3.2.3. Testing Suite Evidence for Sprint Review](#5323-testing-suite-evidence-for-sprint-review)
         - [5.3.2.4. Execution Evidence for Sprint Review](#5324-execution-evidence-for-sprint-review)
         - [5.3.2.5. Microservices Documentation Evidence for Sprint Review](#5325-microservices-documentation-evidence-for-sprint-review)
         - [5.3.2.6. Software Deployment Evidence for Sprint Review](#5326-software-deployment-evidence-for-sprint-review)
         - [5.3.2.7. Team Collaboration Insights during Sprint](#5327-team-collaboration-insights-during-sprint)
         - [5.3.2.8. Kanban Board](#5328-kanban-board)
      - [5.3.3. Sprint 3](#533-sprint-3)
         - [5.3.3.1. Sprint Backlog 3](#5331-sprint-backlog-3)
         - [5.3.3.2. Development Evidence for Sprint Review](#5332-development-evidence-for-sprint-review)
         - [5.3.3.3. Testing Suite Evidence for Sprint Review](#5333-testing-suite-evidence-for-sprint-review)
         - [5.3.3.4. Execution Evidence for Sprint Review](#5334-execution-evidence-for-sprint-review)
         - [5.3.3.5. Microservices Documentation Evidence for Sprint Review](#5335-microservices-documentation-evidence-for-sprint-review)
         - [5.3.3.6. Software Deployment Evidence for Sprint Review](#5336-software-deployment-evidence-for-sprint-review)
         - [5.3.3.7. Team Collaboration Insights during Sprint](#5337-team-collaboration-insights-during-sprint)
         - [5.3.3.8. Kanban Board](#5338-kanban-board)
      - [5.3.4. Sprint 4](#534-sprint-4)
         - [5.3.4.1. Sprint Backlog 4](#5341-sprint-backlog-4)
         - [5.3.4.2. Development Evidence for Sprint Review](#5342-development-evidence-for-sprint-review)
         - [5.3.4.3. Testing Suite Evidence for Sprint Review](#5343-testing-suite-evidence-for-sprint-review)
         - [5.3.4.4. Execution Evidence for Sprint Review](#5344-execution-evidence-for-sprint-review)
         - [5.3.4.5. Microservices Documentation Evidence for Sprint Review](#5345-microservices-documentation-evidence-for-sprint-review)
         - [5.3.4.6. Software Deployment Evidence for Sprint Review](#5346-software-deployment-evidence-for-sprint-review)
         - [5.3.4.7. Team Collaboration Insights during Sprint](#5347-team-collaboration-insights-during-sprint)
         - [5.3.4.8. Kanban Board](#5348-kanban-board)
   - [5.4. Microservices Deployment](#54-microservices-deployment)
      - [5.4.1. Cloud Architecture Diagram](#541-cloud-architecture-diagram)
      - [5.4.2. Cloud Architecture Deployment](#542-cloud-architecture-deployment)

- [Conclusiones](#conclusiones)
- [Referencias Bibliográficas](#referencias-bibliográficas)
- [Anexos](#anexos)

<hr class="page-break">

# Student Outcome

En el siguiente cuadro se describe las acciones realizadas y enunciados de conclusiones por parte del grupo, que permiten sustentar el haber alcanzado el logro del ABET – EAC - Student Outcome.

<table>
  <thead>
    <tr>
      <th>Criterio específico</th>
      <th>Acciones realizadas</th>
      <th>Conclusiones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5"><strong>[COMPLETAR: Criterio 1]</strong></td>
      <td><strong>[COMPLETAR: Integrante 1]</strong><br><b>TB1:</b></td>
      <td rowspan="5"><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 2]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 3]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 4]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 5]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td rowspan="5"><strong>[COMPLETAR: Criterio 2]</strong></td>
      <td><strong>[COMPLETAR: Integrante 1]</strong><br><b>TB1:</b></td>
      <td rowspan="5"><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 2]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 3]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 4]</strong><br><b>TB1:</b></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Integrante 5]</strong><br><b>TB1:</b></td>
    </tr>
  </tbody>
</table>

<hr class="page-break">

# Capítulo I: Introducción

## 1.1. Startup Profile

### 1.1.1. Descripción de la Startup



### 1.1.2. Perfiles de integrantes del equipo

<table>
  <thead>
    <tr>
      <th>Perfil</th>
      <th>Foto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>[COMPLETAR: Apellidos, Nombres]</strong><br>[COMPLETAR: descripción]</td>
      <td><img src="assets/images/photos/[COMPLETAR].jpg" alt="[COMPLETAR]" width="200"></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Apellidos, Nombres]</strong><br>[COMPLETAR: descripción]</td>
      <td><img src="assets/images/photos/[COMPLETAR].jpg" alt="[COMPLETAR]" width="200"></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Apellidos, Nombres]</strong><br>[COMPLETAR: descripción]</td>
      <td><img src="assets/images/photos/[COMPLETAR].jpg" alt="[COMPLETAR]" width="200"></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Apellidos, Nombres]</strong><br>[COMPLETAR: descripción]</td>
      <td><img src="assets/images/photos/[COMPLETAR].jpg" alt="[COMPLETAR]" width="200"></td>
    </tr>
    <tr>
      <td><strong>[COMPLETAR: Apellidos, Nombres]</strong><br>[COMPLETAR: descripción]</td>
      <td><img src="assets/images/photos/[COMPLETAR].jpg" alt="[COMPLETAR]" width="200"></td>
    </tr>
  </tbody>
</table>

<hr class="page-break">

## 1.2. Solution Profile

### 1.2.1. Nombre del producto



### 1.2.2. Antecedentes y problemática

#### WHAT (Qué)



#### WHEN (Cuándo)



#### WHERE (Dónde)



#### WHO (Quién)



#### WHY (Por qué)



#### HOW (Cómo)



#### HOW MUCH (Cuánto)



### 1.2.3. Lean UX Process

#### 1.2.3.1. Lean UX Problem Statement



#### 1.2.3.2. Lean UX Assumptions

##### Business Assumptions



##### User Assumptions



#### 1.2.3.3. Lean UX Hypothesis



#### 1.2.3.4. Lean UX Canvas

<img src="./assets/images/screenshots/lean-ux-canvas.png" alt="Lean UX Canvas">

<hr class="page-break">

## 1.3. Segmentos objetivo



<hr class="page-break">

# Capítulo II: Requirements & Analysis

## 2.1. Competidores

<table>
  <tr>
    <th colspan="5">Competitive Analysis Landscape</th>
  </tr>
  <tr>
    <td colspan="2" align="center"><b>¿Por qué llevar a cabo este análisis?</b></td>
    <td colspan="3">[COMPLETAR]</td>
  </tr>
  <tr>
    <th colspan="2">Nombre</th>
    <th>[Startup Talki]</th>
    <th>[Competidor 1]</th>
    <th>[Competidor 2]</th>
  </tr>
  <tr>
    <td colspan="2" align="center"><b>Logo</b></td>
    <td align="center"><img src="assets/images/logos/talki-logo.png" alt="Talki logo" width="100"></td>
    <td align="center"><img src="assets/images/logos/[competidor1].png" alt="[Competidor 1]" width="100"></td>
    <td align="center"><img src="assets/images/logos/[competidor2].png" alt="[Competidor 2]" width="100"></td>
  </tr>
  <tr>
    <td rowspan="2"><b>Perfil</b></td>
    <td><b>Overview</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Ventaja competitiva ¿Qué valor ofrece a los clientes?</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2"><b>Perfil de Marketing</b></td>
    <td><b>Mercado objetivo</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Estrategias de Marketing</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3"><b>Perfil de Producto</b></td>
    <td><b>Productos &amp; Servicios</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Precios y Costos</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Canales de distribución</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="4"><b>Análisis SWOT</b></td>
    <td><b>Fortalezas</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Oportunidades</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Debilidades</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Amenazas</b></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

<hr class="page-break">

## 2.2. Entrevistas

### 2.2.1. Diseño de entrevistas



### 2.2.2. Registro de entrevistas



### 2.2.3. Análisis de entrevistas



<hr class="page-break">

## 2.3. Needfinding

### 2.3.1. User Personas



### 2.3.2. User Task Matrix

<table>
  <thead>
    <tr>
      <th rowspan="2">Tareas</th>
      <th colspan="2">[Segmento 1]</th>
      <th colspan="2">[Segmento 2]</th>
    </tr>
    <tr>
      <th>Frecuencia</th>
      <th>Importancia</th>
      <th>Frecuencia</th>
      <th>Importancia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[COMPLETAR]</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

### 2.3.3. Empathy Maps



### 2.3.4. As-is Scenario Mapping



<hr class="page-break">

# Capítulo III: Requirements Specification

## 3.1. To-Be Scenario Mapping



<hr class="page-break">

## 3.2. User Stories

| Epic / Story ID | Título | Descripción | Criterios de Aceptación | Relacionado con (Epic ID) |
|-----------------|--------|-------------|-------------------------|---------------------------|
|                 |        |             |                         |                           |

<hr class="page-break">

## 3.3. Impact Map



<hr class="page-break">

## 3.4. Product Backlog

| # Orden | User Story ID | Título | Descripción | Story Points |
|---------|---------------|--------|-------------|--------------|
|         |               |        |             |              |

<hr class="page-break">

# Capítulo IV: Product Architecture Design

## 4.1. Design Concepts, ViewPoints & ER Diagrams

### 4.1.1. Principles Statements



### 4.1.2. Approaches Statements Architectural Styles & Patterns



### 4.1.3. Context Diagram



### 4.1.4. Approach driven ViewPoints Diagrams



### 4.1.5. Relational/Non Relational Database Diagram



### 4.1.6. Design Patterns



### 4.1.7. Tactics



<hr class="page-break">

## 4.2. Architectural Drivers

### 4.1.8. Design Purpose



### 4.1.9. Primary Functionality (Primary User Stories)

| ID | Título | Descripción |
|----|--------|-------------|
|    |        |             |

### 4.1.10. Quality Attribute Scenarios

| ID | Atributo de Calidad | Fuente | Estímulo | Artefacto | Entorno | Respuesta | Medida de Respuesta |
|----|---------------------|--------|----------|-----------|---------|-----------|---------------------|
|    |                     |        |          |           |         |           |                     |

### 4.1.11. Constraints

| ID | Restricción |
|----|-------------|
|    |             |

### 4.1.12. Architectural Concerns

| ID | Concern | Descripción |
|----|---------|-------------|
|    |         |             |

<hr class="page-break">

## 4.3. ADD Iterations

### 4.2.1. Iteration 1: [Nombre de la Iteración]

#### 4.2.1.1. Architectural Design Backlog 1

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Decisión de Diseño</th>
      <th>Estado</th>
      <th>Driver(s) Relacionados</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

#### 4.2.1.2. Establish Iteration Goal by Selecting Drivers



#### 4.2.1.3. Choose One or More Elements of the System to Refine



#### 4.2.1.4. Choose One or More Design Concepts That Satisfy the Selected Drivers



#### 4.2.1.5. Instantiate Architectural Elements, Allocate Responsibilities, and Define Interfaces

| Elemento | Responsabilidad | Interfaces |
|----------|-----------------|------------|
|          |                 |            |

#### 4.2.1.6. Sketch Views (C4 & UML) and Record Design Decisions



#### 4.2.1.7. Analysis of Current Design and Review Iteration Goal (Kanban Board)

<table>
  <thead>
    <tr>
      <th>Por hacer</th>
      <th>En progreso</th>
      <th>Hecho</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<hr class="page-break">

# Capítulo V: Product Implementation, Validation & Deployment

## 5.1. Testing Suites & General Patterns

### 5.1.1. Backend Application Core Testing Suite



### 5.1.2. Pattern Based Backend Application(s)



### 5.1.3. Pattern Based Custom Software Library



### 5.1.4. Framework Pattern Driven Refactoring Report



<hr class="page-break">

## 5.2. Software Configuration Management

### 5.2.1. Software Development Environment Configuration



### 5.2.2. Source Code Management

Se utilizó **GitHub** como plataforma de control de versiones y colaboración en equipo.

Los integrantes del equipo y sus nombres de usuario en GitHub son los siguientes:

| Integrantes | Nombre en GitHub |
|-------------|------------------|
|             |                  |
|             |                  |
|             |                  |
|             |                  |
|             |                  |

### 5.2.3. Source Code Style Guide & Conventions



### 5.2.4. Software Deployment Configuration



<hr class="page-break">

## 5.3. Microservices Implementation

### 5.3.1. Sprint 1

#### 5.3.1.1. Sprint Backlog 1

| Sprint # | User Story | Work-Item / Task | Descripción | Estimación (horas) | Asignado a | Estado |
|----------|------------|------------------|-------------|-------------------|------------|--------|
| Sprint 1 |            |                  |             |                   |            |        |

#### 5.3.1.2. Development Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.1.3. Testing Suite Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.1.4. Execution Evidence for Sprint Review



#### 5.3.1.5. Microservices Documentation Evidence for Sprint Review

| Microservicio | Verbo | Endpoint | Parámetros | Response |
|---------------|-------|----------|------------|----------|
|               |       |          |            |          |

#### 5.3.1.6. Software Deployment Evidence for Sprint Review



#### 5.3.1.7. Team Collaboration Insights during Sprint

| Integrantes | Tarea asignada |
|-------------|----------------|
|             |                |

#### 5.3.1.8. Kanban Board

<hr class="page-break">

### 5.3.2. Sprint 2

#### 5.3.2.1. Sprint Backlog 2

| Sprint # | User Story | Work-Item / Task | Descripción | Estimación (horas) | Asignado a | Estado |
|----------|------------|------------------|-------------|-------------------|------------|--------|
| Sprint 2 |            |                  |             |                   |            |        |

#### 5.3.2.2. Development Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.2.3. Testing Suite Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.2.4. Execution Evidence for Sprint Review



#### 5.3.2.5. Microservices Documentation Evidence for Sprint Review

| Microservicio | Verbo | Endpoint | Parámetros | Response |
|---------------|-------|----------|------------|----------|
|               |       |          |            |          |

#### 5.3.2.6. Software Deployment Evidence for Sprint Review



#### 5.3.2.7. Team Collaboration Insights during Sprint

| Integrantes | Tarea asignada |
|-------------|----------------|
|             |                |

#### 5.3.2.8. Kanban Board

<hr class="page-break">

### 5.3.3. Sprint 3

#### 5.3.3.1. Sprint Backlog 3

| Sprint # | User Story | Work-Item / Task | Descripción | Estimación (horas) | Asignado a | Estado |
|----------|------------|------------------|-------------|-------------------|------------|--------|
| Sprint 3 |            |                  |             |                   |            |        |

#### 5.3.3.2. Development Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.3.3. Testing Suite Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.3.4. Execution Evidence for Sprint Review



#### 5.3.3.5. Microservices Documentation Evidence for Sprint Review

| Microservicio | Verbo | Endpoint | Parámetros | Response |
|---------------|-------|----------|------------|----------|
|               |       |          |            |          |

#### 5.3.3.6. Software Deployment Evidence for Sprint Review



#### 5.3.3.7. Team Collaboration Insights during Sprint

| Integrantes | Tarea asignada |
|-------------|----------------|
|             |                |

#### 5.3.3.8. Kanban Board

<hr class="page-break">

### 5.3.4. Sprint 4

#### 5.3.4.1. Sprint Backlog 4

| Sprint # | User Story | Work-Item / Task | Descripción | Estimación (horas) | Asignado a | Estado |
|----------|------------|------------------|-------------|-------------------|------------|--------|
| Sprint 4 |            |                  |             |                   |            |        |

#### 5.3.4.2. Development Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.4.3. Testing Suite Evidence for Sprint Review

| Repository | Branch | Commit ID | Commit Message | Commit Message Body | Committed on (Date) |
|------------|--------|-----------|----------------|---------------------|---------------------|
|            |        |           |                |                     |                     |

#### 5.3.4.4. Execution Evidence for Sprint Review



#### 5.3.4.5. Microservices Documentation Evidence for Sprint Review

| Microservicio | Verbo | Endpoint | Parámetros | Response |
|---------------|-------|----------|------------|----------|
|               |       |          |            |          |

#### 5.3.4.6. Software Deployment Evidence for Sprint Review



#### 5.3.4.7. Team Collaboration Insights during Sprint

| Integrantes | Tarea asignada |
|-------------|----------------|
|             |                |

#### 5.3.4.8. Kanban Board

<hr class="page-break">

## 5.4. Microservices Deployment

### 5.4.1. Cloud Architecture Diagram



### 5.4.2. Cloud Architecture Deployment (AWS, Microsoft Azure o Google Cloud)



<hr class="page-break">

# Conclusiones

## Conclusiones y recomendaciones



## Video About-The-Team



<hr class="page-break">

# Referencias Bibliográficas



<hr class="page-break">

# Anexos

## Links

| Descripción | URL |
|-------------|-----|
|             |     |
