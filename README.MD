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

<table>
  <thead>
    <tr>
      <th>Epic / Story ID</th>
      <th>Título</th>
      <th>Descripción</th>
      <th>Criterios de Aceptación</th>
      <th>Relacionado con (Epic ID)</th>
    </tr>
  </thead>
  <tbody>
    <!-- ===================== EP01: Página de Aterrizaje ===================== -->
    <tr>
      <td>EP01</td>
      <td>Página de Aterrizaje</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> acceder a una página informativa sobre Talki, <strong>para</strong> conocer los beneficios de la plataforma antes de registrarme.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US01</td>
      <td>Visualizar beneficios de Talki</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> ver una sección de beneficios clave en la página de aterrizaje, <strong>para</strong> entender cómo Talki puede ayudarme a mejorar mi comunicación oral.</td>
      <td>
        <strong>Escenario 1: Visualización exitosa de beneficios</strong><br>
        <strong>Dado</strong> que el visitante accede a la landing page de Talki,<br>
        <strong>Cuando</strong> la página termina de cargar,<br>
        <strong>Entonces</strong> se muestran al menos 3 beneficios destacados con ícono, título y descripción breve.<br><br>
        <strong>Escenario 2: Beneficios adaptados por segmento</strong><br>
        <strong>Dado</strong> que el visitante está en la sección de beneficios,<br>
        <strong>Cuando</strong> selecciona la pestaña "Ciclo 1-5" o "Ciclo 6-10",<br>
        <strong>Entonces</strong> los beneficios mostrados se ajustan al segmento seleccionado.
      </td>
      <td>EP01</td>
    </tr>
    <tr>
      <td>US02</td>
      <td>Ver planes y precios</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> consultar los planes y precios disponibles en la landing page, <strong>para</strong> evaluar cuál se ajusta a mis necesidades y presupuesto.</td>
      <td>
        <strong>Escenario 1: Visualización de planes</strong><br>
        <strong>Dado</strong> que el visitante navega a la sección de precios,<br>
        <strong>Cuando</strong> la sección se despliega,<br>
        <strong>Entonces</strong> se muestran al menos 2 planes con nombre, precio, lista de funcionalidades incluidas y un botón de acción.<br><br>
        <strong>Escenario 2: Comparación de planes</strong><br>
        <strong>Dado</strong> que el visitante está viendo los planes,<br>
        <strong>Cuando</strong> hace clic en "Comparar planes",<br>
        <strong>Entonces</strong> se muestra una tabla comparativa con las diferencias entre cada plan.
      </td>
      <td>EP01</td>
    </tr>
    <tr>
      <td>US03</td>
      <td>Ver testimonios de usuarios</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> leer testimonios de otros estudiantes que han usado Talki, <strong>para</strong> generar confianza antes de registrarme.</td>
      <td>
        <strong>Escenario 1: Visualización de testimonios</strong><br>
        <strong>Dado</strong> que el visitante accede a la sección de testimonios en la landing page,<br>
        <strong>Cuando</strong> la sección carga,<br>
        <strong>Entonces</strong> se muestran al menos 3 testimonios con nombre, ciclo universitario y comentario del estudiante.<br><br>
        <strong>Escenario 2: Navegación entre testimonios</strong><br>
        <strong>Dado</strong> que hay más de 3 testimonios disponibles,<br>
        <strong>Cuando</strong> el visitante hace clic en la flecha de siguiente,<br>
        <strong>Entonces</strong> se muestra el siguiente grupo de testimonios en formato carrusel.
      </td>
      <td>EP01</td>
    </tr>
    <tr>
      <td>US04</td>
      <td>Acceder a formulario de contacto</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> enviar un mensaje de contacto desde la landing page, <strong>para</strong> resolver dudas antes de registrarme en Talki.</td>
      <td>
        <strong>Escenario 1: Envío exitoso del formulario</strong><br>
        <strong>Dado</strong> que el visitante completa los campos nombre, correo y mensaje en el formulario de contacto,<br>
        <strong>Cuando</strong> hace clic en "Enviar",<br>
        <strong>Entonces</strong> se muestra un mensaje de confirmación y recibe un correo de acuse de recibo.<br><br>
        <strong>Escenario 2: Validación de campos obligatorios</strong><br>
        <strong>Dado</strong> que el visitante deja el campo de correo vacío,<br>
        <strong>Cuando</strong> intenta enviar el formulario,<br>
        <strong>Entonces</strong> se muestra un mensaje de error indicando que el campo correo es obligatorio.
      </td>
      <td>EP01</td>
    </tr>
    <!-- ===================== EP02: Registro y Autenticación ===================== -->
    <tr>
      <td>EP02</td>
      <td>Registro y Autenticación</td>
      <td><strong>Como</strong> estudiante universitario, <strong>quiero</strong> crear y gestionar mi cuenta en Talki, <strong>para</strong> acceder a las funcionalidades de mejora de comunicación oral.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US05</td>
      <td>Registro de cuenta nueva</td>
      <td><strong>Como</strong> estudiante universitario, <strong>quiero</strong> registrarme en Talki con mi correo electrónico, <strong>para</strong> crear una cuenta y acceder a las funcionalidades de la plataforma.</td>
      <td>
        <strong>Escenario 1: Registro exitoso</strong><br>
        <strong>Dado</strong> que el estudiante completa el formulario de registro con nombre, correo universitario y contraseña válida,<br>
        <strong>Cuando</strong> hace clic en "Registrarme",<br>
        <strong>Entonces</strong> se crea la cuenta, se envía un correo de verificación y se redirige a la página de bienvenida.<br><br>
        <strong>Escenario 2: Registro con correo ya existente</strong><br>
        <strong>Dado</strong> que el estudiante ingresa un correo electrónico que ya está registrado,<br>
        <strong>Cuando</strong> hace clic en "Registrarme",<br>
        <strong>Entonces</strong> se muestra el mensaje "Este correo ya está registrado. Inicia sesión o recupera tu contraseña."
      </td>
      <td>EP02</td>
    </tr>
    <tr>
      <td>US06</td>
      <td>Inicio de sesión</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> iniciar sesión con mi correo y contraseña, <strong>para</strong> acceder a mi cuenta y sesiones de práctica.</td>
      <td>
        <strong>Escenario 1: Login exitoso</strong><br>
        <strong>Dado</strong> que el estudiante ingresa un correo y contraseña válidos,<br>
        <strong>Cuando</strong> hace clic en "Iniciar sesión",<br>
        <strong>Entonces</strong> se redirige al dashboard principal mostrando su nombre y resumen de actividad.<br><br>
        <strong>Escenario 2: Login con credenciales incorrectas</strong><br>
        <strong>Dado</strong> que el estudiante ingresa una contraseña incorrecta,<br>
        <strong>Cuando</strong> hace clic en "Iniciar sesión",<br>
        <strong>Entonces</strong> se muestra el mensaje "Credenciales incorrectas. Intenta de nuevo." y se incrementa el contador de intentos fallidos.
      </td>
      <td>EP02</td>
    </tr>
    <tr>
      <td>US07</td>
      <td>Recuperación de contraseña</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> recuperar mi contraseña mediante mi correo electrónico, <strong>para</strong> volver a acceder a mi cuenta si olvido mis credenciales.</td>
      <td>
        <strong>Escenario 1: Envío de enlace de recuperación</strong><br>
        <strong>Dado</strong> que el estudiante ingresa su correo registrado en el formulario de recuperación,<br>
        <strong>Cuando</strong> hace clic en "Enviar enlace",<br>
        <strong>Entonces</strong> se envía un correo con un enlace de restablecimiento válido por 24 horas.<br><br>
        <strong>Escenario 2: Correo no registrado</strong><br>
        <strong>Dado</strong> que el estudiante ingresa un correo que no existe en el sistema,<br>
        <strong>Cuando</strong> hace clic en "Enviar enlace",<br>
        <strong>Entonces</strong> se muestra el mensaje "No encontramos una cuenta asociada a este correo."
      </td>
      <td>EP02</td>
    </tr>
    <tr>
      <td>US08</td>
      <td>Edición de perfil de usuario</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> editar mi perfil con información como ciclo universitario, carrera y universidad, <strong>para</strong> que Talki personalice mi experiencia.</td>
      <td>
        <strong>Escenario 1: Actualización exitosa del perfil</strong><br>
        <strong>Dado</strong> que el estudiante accede a la sección "Mi perfil" y modifica su ciclo universitario,<br>
        <strong>Cuando</strong> hace clic en "Guardar cambios",<br>
        <strong>Entonces</strong> el sistema actualiza la información y muestra un mensaje de confirmación.<br><br>
        <strong>Escenario 2: Campo obligatorio vacío</strong><br>
        <strong>Dado</strong> que el estudiante borra el campo "Universidad" y lo deja vacío,<br>
        <strong>Cuando</strong> hace clic en "Guardar cambios",<br>
        <strong>Entonces</strong> se muestra un mensaje de error indicando que el campo "Universidad" es obligatorio.
      </td>
      <td>EP02</td>
    </tr>
    <tr>
      <td>US28</td>
      <td>Cerrar sesión de usuario</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> cerrar sesión de manera segura, <strong>para</strong> proteger mi cuenta cuando uso un dispositivo compartido.</td>
      <td>
        <strong>Escenario 1: Cierre de sesión exitoso</strong><br>
        <strong>Dado</strong> que el estudiante está autenticado en la plataforma,<br>
        <strong>Cuando</strong> hace clic en "Cerrar sesión" desde el menú de usuario,<br>
        <strong>Entonces</strong> se cierra la sesión activa, se eliminan los tokens del navegador y se redirige a la página de inicio de sesión.<br><br>
        <strong>Escenario 2: Cierre de sesión con grabación activa</strong><br>
        <strong>Dado</strong> que el estudiante tiene una grabación en curso,<br>
        <strong>Cuando</strong> intenta cerrar sesión,<br>
        <strong>Entonces</strong> se muestra un diálogo de advertencia indicando que tiene una sesión de práctica activa y preguntando si desea finalizarla y guardarla antes de cerrar sesión.
      </td>
      <td>EP02</td>
    </tr>
    <!-- ===================== EP03: Gestión de Sesiones de Práctica ===================== -->
    <tr>
      <td>EP03</td>
      <td>Gestión de Sesiones de Práctica</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> crear y configurar sesiones de práctica oral, <strong>para</strong> ensayar distintos tipos de presentación.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US09</td>
      <td>Crear nueva sesión de práctica</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> crear una nueva sesión de práctica oral, <strong>para</strong> comenzar a ensayar mi presentación y recibir retroalimentación.</td>
      <td>
        <strong>Escenario 1: Creación exitosa de sesión</strong><br>
        <strong>Dado</strong> que el estudiante está en el dashboard y hace clic en "Nueva sesión",<br>
        <strong>Cuando</strong> ingresa un título para la sesión (por ejemplo "Pitch Startup TF"),<br>
        <strong>Entonces</strong> se crea la sesión y se redirige a la pantalla de configuración de sesión.<br><br>
        <strong>Escenario 2: Título duplicado en el mismo día</strong><br>
        <strong>Dado</strong> que el estudiante ya tiene una sesión con el mismo título creada hoy,<br>
        <strong>Cuando</strong> intenta crear otra sesión con ese título,<br>
        <strong>Entonces</strong> el sistema muestra una advertencia sugiriendo renombrarla pero permite continuar si confirma.
      </td>
      <td>EP03</td>
    </tr>
    <tr>
      <td>US10</td>
      <td>Seleccionar tipo de sesión</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> seleccionar el tipo de presentación que voy a practicar (pitch, presentación, sustentación de tesis, charla), <strong>para</strong> que el feedback de la IA se ajuste al contexto de mi práctica.</td>
      <td>
        <strong>Escenario 1: Selección de tipo pitch</strong><br>
        <strong>Dado</strong> que el estudiante está configurando una nueva sesión,<br>
        <strong>Cuando</strong> selecciona el tipo "Pitch" de la lista de opciones,<br>
        <strong>Entonces</strong> el sistema muestra una descripción del tipo seleccionado y ajusta los parámetros de evaluación para pitches (tiempo sugerido: 3-5 min, enfoque en claridad y persuasión).<br><br>
        <strong>Escenario 2: Selección de tipo sustentación de tesis</strong><br>
        <strong>Dado</strong> que el estudiante está configurando una nueva sesión,<br>
        <strong>Cuando</strong> selecciona el tipo "Sustentación de tesis",<br>
        <strong>Entonces</strong> el sistema muestra parámetros de evaluación orientados a rigor académico, estructura argumentativa y manejo de preguntas, con tiempo sugerido de 15-20 min.
      </td>
      <td>EP03</td>
    </tr>
    <tr>
      <td>US11</td>
      <td>Configurar duración objetivo</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> establecer una duración objetivo para mi sesión de práctica, <strong>para</strong> entrenar el manejo del tiempo en mis presentaciones.</td>
      <td>
        <strong>Escenario 1: Configuración de duración personalizada</strong><br>
        <strong>Dado</strong> que el estudiante está en la pantalla de configuración de sesión,<br>
        <strong>Cuando</strong> ingresa 10 minutos como duración objetivo,<br>
        <strong>Entonces</strong> el sistema registra la duración y mostrará un cronómetro durante la grabación.<br><br>
        <strong>Escenario 2: Alerta al superar la duración objetivo</strong><br>
        <strong>Dado</strong> que el estudiante configuró una duración objetivo de 10 minutos,<br>
        <strong>Cuando</strong> el cronómetro de la sesión alcanza los 10 minutos,<br>
        <strong>Entonces</strong> se muestra una alerta visual y sonora indicando que se ha alcanzado el tiempo objetivo.
      </td>
      <td>EP03</td>
    </tr>
    <!-- ===================== EP04: Transcripción en Tiempo Real ===================== -->
    <tr>
      <td>EP04</td>
      <td>Transcripción en Tiempo Real</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> que mi voz sea transcrita en tiempo real durante la práctica, <strong>para</strong> visualizar lo que estoy diciendo mientras presento.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US12</td>
      <td>Iniciar grabación y transcripción en tiempo real</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> iniciar la grabación de mi presentación y ver la transcripción en tiempo real, <strong>para</strong> monitorear lo que digo mientras practico.</td>
      <td>
        <strong>Escenario 1: Inicio exitoso de grabación</strong><br>
        <strong>Dado</strong> que el estudiante tiene una sesión configurada y ha concedido permisos de micrófono,<br>
        <strong>Cuando</strong> hace clic en "Iniciar grabación",<br>
        <strong>Entonces</strong> el sistema comienza a capturar audio y muestra el texto transcrito en pantalla con un retraso máximo de 2 segundos.<br><br>
        <strong>Escenario 2: Permisos de micrófono denegados</strong><br>
        <strong>Dado</strong> que el estudiante no ha concedido permisos de micrófono al navegador,<br>
        <strong>Cuando</strong> hace clic en "Iniciar grabación",<br>
        <strong>Entonces</strong> el sistema muestra un mensaje indicando que debe habilitar el acceso al micrófono con instrucciones para hacerlo.
      </td>
      <td>EP04</td>
    </tr>
    <tr>
      <td>US13</td>
      <td>Pausar y reanudar grabación</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> pausar y reanudar la grabación durante mi sesión, <strong>para</strong> tomar descansos sin perder el progreso de la transcripción.</td>
      <td>
        <strong>Escenario 1: Pausa exitosa</strong><br>
        <strong>Dado</strong> que la grabación está activa y la transcripción se muestra en pantalla,<br>
        <strong>Cuando</strong> el estudiante hace clic en "Pausar",<br>
        <strong>Entonces</strong> la grabación y transcripción se detienen, el cronómetro se pausa y se muestra un indicador visual de estado "Pausado".<br><br>
        <strong>Escenario 2: Reanudación exitosa</strong><br>
        <strong>Dado</strong> que la grabación está en estado "Pausado",<br>
        <strong>Cuando</strong> el estudiante hace clic en "Reanudar",<br>
        <strong>Entonces</strong> la grabación continúa desde donde se detuvo, la transcripción se reanuda y el cronómetro sigue avanzando.
      </td>
      <td>EP04</td>
    </tr>
    <tr>
      <td>US14</td>
      <td>Finalizar sesión y guardar transcripción</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> finalizar la sesión de grabación y que se guarde la transcripción completa, <strong>para</strong> poder revisarla posteriormente y recibir feedback.</td>
      <td>
        <strong>Escenario 1: Finalización y guardado exitoso</strong><br>
        <strong>Dado</strong> que la grabación está activa o pausada,<br>
        <strong>Cuando</strong> el estudiante hace clic en "Finalizar sesión",<br>
        <strong>Entonces</strong> el sistema detiene la grabación, guarda la transcripción completa asociada a la sesión y muestra un mensaje "Sesión guardada exitosamente".<br><br>
        <strong>Escenario 2: Confirmación antes de finalizar</strong><br>
        <strong>Dado</strong> que la grabación está activa,<br>
        <strong>Cuando</strong> el estudiante hace clic en "Finalizar sesión",<br>
        <strong>Entonces</strong> se muestra un diálogo de confirmación preguntando "¿Estás seguro de finalizar la sesión?" con opciones "Finalizar" y "Continuar practicando".
      </td>
      <td>EP04</td>
    </tr>
    <!-- ===================== EP05: Feedback y Análisis con IA ===================== -->
    <tr>
      <td>EP05</td>
      <td>Feedback y Análisis con IA</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir retroalimentación automatizada de IA sobre mi presentación, <strong>para</strong> identificar áreas de mejora concreta en mi comunicación oral.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US15</td>
      <td>Recibir feedback general de la IA</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir un resumen de feedback general de la IA al finalizar mi sesión, <strong>para</strong> conocer una evaluación global de mi desempeño oral.</td>
      <td>
        <strong>Escenario 1: Feedback generado exitosamente</strong><br>
        <strong>Dado</strong> que la sesión ha finalizado y la transcripción está guardada,<br>
        <strong>Cuando</strong> el sistema procesa la transcripción con la IA,<br>
        <strong>Entonces</strong> se muestra un resumen con puntuación general (1-100), fortalezas identificadas y áreas de mejora principales en menos de 30 segundos.<br><br>
        <strong>Escenario 2: Sesión demasiado corta para feedback</strong><br>
        <strong>Dado</strong> que la sesión tiene una transcripción de menos de 30 palabras,<br>
        <strong>Cuando</strong> el sistema intenta generar el feedback,<br>
        <strong>Entonces</strong> se muestra un mensaje indicando que la sesión es muy corta para generar un análisis significativo y se sugiere practicar al menos 1 minuto.
      </td>
      <td>EP05</td>
    </tr>
    <tr>
      <td>US16</td>
      <td>Análisis de muletillas</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> ver un análisis detallado de las muletillas que usé durante mi presentación, <strong>para</strong> identificar y reducir su frecuencia.</td>
      <td>
        <strong>Escenario 1: Detección de muletillas</strong><br>
        <strong>Dado</strong> que la sesión ha finalizado y el feedback ha sido generado,<br>
        <strong>Cuando</strong> el estudiante accede a la pestaña "Muletillas",<br>
        <strong>Entonces</strong> se muestra una lista de muletillas detectadas (por ejemplo "este", "o sea", "básicamente") con la frecuencia de cada una y su ubicación en la transcripción resaltada.<br><br>
        <strong>Escenario 2: Sin muletillas detectadas</strong><br>
        <strong>Dado</strong> que la sesión ha finalizado,<br>
        <strong>Cuando</strong> el sistema no detecta muletillas significativas en la transcripción,<br>
        <strong>Entonces</strong> se muestra un mensaje positivo indicando "Excelente, no se detectaron muletillas frecuentes en tu presentación."
      </td>
      <td>EP05</td>
    </tr>
    <tr>
      <td>US17</td>
      <td>Análisis de palabras clave</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> ver las palabras clave identificadas en mi presentación, <strong>para</strong> verificar que estoy comunicando los conceptos importantes de mi tema.</td>
      <td>
        <strong>Escenario 1: Palabras clave identificadas</strong><br>
        <strong>Dado</strong> que el feedback de la sesión ha sido generado,<br>
        <strong>Cuando</strong> el estudiante accede a la pestaña "Palabras clave",<br>
        <strong>Entonces</strong> se muestra una nube de palabras y una lista ordenada por frecuencia de los términos más relevantes usados en la presentación.<br><br>
        <strong>Escenario 2: Sugerencia de palabras clave faltantes</strong><br>
        <strong>Dado</strong> que el estudiante seleccionó el tipo de sesión "Sustentación de tesis",<br>
        <strong>Cuando</strong> revisa el análisis de palabras clave,<br>
        <strong>Entonces</strong> la IA sugiere términos técnicos o académicos que podrían haberse incluido según el contexto detectado del tema.
      </td>
      <td>EP05</td>
    </tr>
    <tr>
      <td>US18</td>
      <td>Recomendaciones de mejora de léxico</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir sugerencias para mejorar mi vocabulario y léxico, <strong>para</strong> enriquecer mi expresión oral en futuras presentaciones.</td>
      <td>
        <strong>Escenario 1: Sugerencias de sinónimos y vocabulario</strong><br>
        <strong>Dado</strong> que la sesión ha finalizado y el feedback está disponible,<br>
        <strong>Cuando</strong> el estudiante accede a la sección "Mejora de léxico",<br>
        <strong>Entonces</strong> se muestran al menos 3 sugerencias de palabras o expresiones alternativas más precisas o formales para reemplazar términos repetidos o coloquiales.<br><br>
        <strong>Escenario 2: Sugerencias adaptadas al nivel académico</strong><br>
        <strong>Dado</strong> que el estudiante pertenece al segmento ciclo 6-10,<br>
        <strong>Cuando</strong> revisa las sugerencias de léxico,<br>
        <strong>Entonces</strong> las recomendaciones incluyen terminología técnica y académica avanzada apropiada para sustentaciones y charlas profesionales.
      </td>
      <td>EP05</td>
    </tr>
    <tr>
      <td>US19</td>
      <td>Sugerencias de mejora por sección</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir sugerencias específicas de mejora para cada sección de mi presentación, <strong>para</strong> saber exactamente en qué partes debo trabajar más.</td>
      <td>
        <strong>Escenario 1: Sugerencias por sección disponibles</strong><br>
        <strong>Dado</strong> que la sesión ha finalizado y la transcripción tiene más de 200 palabras,<br>
        <strong>Cuando</strong> el estudiante accede a "Mejora por secciones",<br>
        <strong>Entonces</strong> la IA divide la transcripción en secciones lógicas (introducción, desarrollo, cierre) y muestra sugerencias específicas para cada una con fragmentos citados del texto.<br><br>
        <strong>Escenario 2: Identificación de sección débil</strong><br>
        <strong>Dado</strong> que el análisis por secciones ha sido generado,<br>
        <strong>Cuando</strong> una sección tiene una puntuación significativamente menor que las demás,<br>
        <strong>Entonces</strong> se resalta visualmente esa sección como "Área crítica de mejora" con recomendaciones priorizadas.
      </td>
      <td>EP05</td>
    </tr>
    <!-- ===================== EP06: Historial y Progreso ===================== -->
    <tr>
      <td>EP06</td>
      <td>Historial y Progreso</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> consultar mi historial de sesiones y ver mi progreso, <strong>para</strong> medir mi mejora a lo largo del tiempo.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US20</td>
      <td>Consultar historial de sesiones</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> ver una lista de todas mis sesiones de práctica pasadas, <strong>para</strong> acceder a las transcripciones y feedback anteriores.</td>
      <td>
        <strong>Escenario 1: Lista de sesiones mostrada</strong><br>
        <strong>Dado</strong> que el estudiante tiene al menos una sesión completada,<br>
        <strong>Cuando</strong> accede a la sección "Historial",<br>
        <strong>Entonces</strong> se muestra una lista ordenada por fecha con título, tipo de sesión, duración y puntuación general de cada sesión.<br><br>
        <strong>Escenario 2: Sin sesiones previas</strong><br>
        <strong>Dado</strong> que el estudiante no tiene sesiones completadas,<br>
        <strong>Cuando</strong> accede a la sección "Historial",<br>
        <strong>Entonces</strong> se muestra un mensaje "Aún no tienes sesiones. Crea tu primera práctica para comenzar." con un botón de acceso directo a crear sesión.
      </td>
      <td>EP06</td>
    </tr>
    <tr>
      <td>US21</td>
      <td>Ver progreso a lo largo del tiempo</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> visualizar gráficos de mi progreso en el tiempo, <strong>para</strong> ver cómo han mejorado mis habilidades de comunicación oral.</td>
      <td>
        <strong>Escenario 1: Gráfico de progreso disponible</strong><br>
        <strong>Dado</strong> que el estudiante tiene al menos 3 sesiones completadas,<br>
        <strong>Cuando</strong> accede a la sección "Mi progreso",<br>
        <strong>Entonces</strong> se muestra un gráfico de línea con la evolución de la puntuación general y gráficos complementarios de frecuencia de muletillas y diversidad léxica a lo largo del tiempo.<br><br>
        <strong>Escenario 2: Datos insuficientes para gráfico</strong><br>
        <strong>Dado</strong> que el estudiante tiene menos de 3 sesiones completadas,<br>
        <strong>Cuando</strong> accede a "Mi progreso",<br>
        <strong>Entonces</strong> se muestra un mensaje indicando que necesita al menos 3 sesiones para generar gráficos de tendencia, junto con su puntuación actual.
      </td>
      <td>EP06</td>
    </tr>
    <tr>
      <td>US22</td>
      <td>Comparar dos sesiones</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> comparar dos sesiones de práctica lado a lado, <strong>para</strong> identificar en qué aspectos he mejorado o empeorado.</td>
      <td>
        <strong>Escenario 1: Comparación exitosa</strong><br>
        <strong>Dado</strong> que el estudiante selecciona dos sesiones desde el historial,<br>
        <strong>Cuando</strong> hace clic en "Comparar sesiones",<br>
        <strong>Entonces</strong> se muestra una vista lado a lado con puntuación general, frecuencia de muletillas, diversidad léxica y sugerencias de mejora de ambas sesiones con indicadores de mejora o retroceso.<br><br>
        <strong>Escenario 2: Sesiones de diferente tipo</strong><br>
        <strong>Dado</strong> que el estudiante selecciona una sesión de tipo "Pitch" y otra de tipo "Sustentación de tesis",<br>
        <strong>Cuando</strong> intenta compararlas,<br>
        <strong>Entonces</strong> el sistema muestra un aviso indicando que los tipos son diferentes y la comparación puede no ser del todo representativa, pero permite continuar.
      </td>
      <td>EP06</td>
    </tr>
    <tr>
      <td>US27</td>
      <td>Exportar transcripción y feedback</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> exportar la transcripción y el feedback de mi sesión en formato PDF, <strong>para</strong> compartirlo con mi docente o revisarlo sin conexión.</td>
      <td>
        <strong>Escenario 1: Exportación exitosa en PDF</strong><br>
        <strong>Dado</strong> que el estudiante está visualizando el feedback de una sesión completada,<br>
        <strong>Cuando</strong> hace clic en "Exportar PDF",<br>
        <strong>Entonces</strong> se genera y descarga un archivo PDF con la transcripción completa, resumen de feedback, análisis de muletillas, palabras clave y sugerencias de mejora.<br><br>
        <strong>Escenario 2: Exportación de sesión sin feedback completo</strong><br>
        <strong>Dado</strong> que la sesión fue muy corta y no generó feedback completo,<br>
        <strong>Cuando</strong> el estudiante intenta exportar,<br>
        <strong>Entonces</strong> se genera el PDF solo con la transcripción disponible y una nota indicando que el análisis fue limitado por la duración de la sesión.
      </td>
      <td>EP06</td>
    </tr>
    <!-- ===================== EP07: Personalización de Contenido ===================== -->
    <tr>
      <td>EP07</td>
      <td>Personalización de Contenido</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> que la plataforma se adapte a mi nivel académico y objetivos, <strong>para</strong> recibir retroalimentación relevante a mi etapa universitaria.</td>
      <td>No Corresponde</td>
      <td>No Corresponde</td>
    </tr>
    <tr>
      <td>US23</td>
      <td>Seleccionar segmento académico</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> indicar mi segmento académico (ciclo 1-5 o ciclo 6-10) durante el registro o en mi perfil, <strong>para</strong> que Talki adapte el feedback a mi nivel.</td>
      <td>
        <strong>Escenario 1: Selección durante registro</strong><br>
        <strong>Dado</strong> que el estudiante está completando el formulario de registro,<br>
        <strong>Cuando</strong> selecciona su ciclo universitario actual (por ejemplo, ciclo 3),<br>
        <strong>Entonces</strong> el sistema lo asigna automáticamente al segmento "Ciclo 1-5" y lo registra en su perfil.<br><br>
        <strong>Escenario 2: Cambio de segmento desde perfil</strong><br>
        <strong>Dado</strong> que el estudiante ha avanzado de ciclo 5 a ciclo 6,<br>
        <strong>Cuando</strong> actualiza su ciclo universitario a 6 desde "Mi perfil",<br>
        <strong>Entonces</strong> el sistema lo reasigna al segmento "Ciclo 6-10" y muestra un mensaje indicando que el feedback se adaptará a su nuevo nivel.
      </td>
      <td>EP07</td>
    </tr>
    <tr>
      <td>US24</td>
      <td>Establecer metas de mejora personal</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> definir metas específicas de mejora (por ejemplo, reducir muletillas, ampliar vocabulario), <strong>para</strong> que Talki enfoque sus recomendaciones en mis objetivos.</td>
      <td>
        <strong>Escenario 1: Configuración de metas</strong><br>
        <strong>Dado</strong> que el estudiante accede a la sección "Mis metas",<br>
        <strong>Cuando</strong> selecciona "Reducir muletillas" y "Mejorar estructura argumentativa" de la lista de metas disponibles,<br>
        <strong>Entonces</strong> el sistema guarda las metas seleccionadas y las muestra como activas en su dashboard.<br><br>
        <strong>Escenario 2: Feedback priorizado según metas</strong><br>
        <strong>Dado</strong> que el estudiante tiene configurada la meta "Reducir muletillas",<br>
        <strong>Cuando</strong> recibe el feedback de una sesión,<br>
        <strong>Entonces</strong> la sección de muletillas aparece en primer lugar con mayor detalle y se incluye una comparación con su promedio histórico.
      </td>
      <td>EP07</td>
    </tr>
    <tr>
      <td>US25</td>
      <td>Seleccionar áreas de enfoque para la sesión</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> elegir áreas de enfoque específicas antes de iniciar una sesión (claridad, persuasión, vocabulario técnico, manejo del tiempo), <strong>para</strong> recibir feedback enfocado en esas competencias.</td>
      <td>
        <strong>Escenario 1: Selección de áreas de enfoque</strong><br>
        <strong>Dado</strong> que el estudiante está configurando una nueva sesión,<br>
        <strong>Cuando</strong> selecciona las áreas "Claridad" y "Vocabulario técnico" de las opciones disponibles,<br>
        <strong>Entonces</strong> el sistema registra las áreas seleccionadas y las muestra como etiquetas en la pantalla de grabación.<br><br>
        <strong>Escenario 2: Feedback enfocado en áreas seleccionadas</strong><br>
        <strong>Dado</strong> que el estudiante seleccionó "Persuasión" como área de enfoque,<br>
        <strong>Cuando</strong> recibe el feedback de la sesión,<br>
        <strong>Entonces</strong> se incluye una sección específica de "Persuasión" con evaluación de técnicas persuasivas utilizadas, frases de impacto detectadas y sugerencias para mejorar la capacidad de convencimiento.
      </td>
      <td>EP07</td>
    </tr>
    <tr>
      <td>US26</td>
      <td>Recibir recomendaciones adaptadas al segmento</td>
      <td><strong>Como</strong> estudiante de ciclo 1-5, <strong>quiero</strong> recibir retroalimentación adaptada a mi nivel básico de presentaciones, <strong>para</strong> desarrollar habilidades fundamentales de comunicación oral.</td>
      <td>
        <strong>Escenario 1: Feedback para segmento ciclo 1-5</strong><br>
        <strong>Dado</strong> que un estudiante del segmento ciclo 1-5 finaliza una sesión de tipo "Presentación",<br>
        <strong>Cuando</strong> recibe el feedback,<br>
        <strong>Entonces</strong> las recomendaciones se enfocan en estructura básica (introducción-desarrollo-cierre), volumen de voz y uso de conectores simples, con lenguaje accesible.<br><br>
        <strong>Escenario 2: Feedback para segmento ciclo 6-10</strong><br>
        <strong>Dado</strong> que un estudiante del segmento ciclo 6-10 finaliza una sesión de tipo "Sustentación de tesis",<br>
        <strong>Cuando</strong> recibe el feedback,<br>
        <strong>Entonces</strong> las recomendaciones incluyen evaluación de rigor argumentativo, uso de terminología especializada, capacidad de síntesis y manejo de contraargumentos, con un nivel de exigencia mayor.
      </td>
      <td>EP07</td>
    </tr>
  </tbody>
</table>

<hr class="page-break">

## 3.3. Impact Map



<hr class="page-break">

## 3.4. Product Backlog

<table>
  <thead>
    <tr>
      <th># Orden</th>
      <th>User Story ID</th>
      <th>Título</th>
      <th>Descripción</th>
      <th>Story Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>US05</td>
      <td>Registro de cuenta nueva</td>
      <td><strong>Como</strong> estudiante universitario, <strong>quiero</strong> registrarme en Talki con mi correo electrónico, <strong>para</strong> crear una cuenta y acceder a las funcionalidades de la plataforma.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
      <td>US06</td>
      <td>Inicio de sesión</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> iniciar sesión con mi correo y contraseña, <strong>para</strong> acceder a mi cuenta y sesiones de práctica.</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>US07</td>
      <td>Recuperación de contraseña</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> recuperar mi contraseña mediante mi correo electrónico, <strong>para</strong> volver a acceder a mi cuenta si olvido mis credenciales.</td>
      <td>2</td>
    </tr>
    <tr>
      <td>4</td>
      <td>US08</td>
      <td>Edición de perfil de usuario</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> editar mi perfil con información como ciclo universitario, carrera y universidad, <strong>para</strong> que Talki personalice mi experiencia.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>5</td>
      <td>US28</td>
      <td>Cerrar sesión de usuario</td>
      <td><strong>Como</strong> estudiante registrado, <strong>quiero</strong> cerrar sesión de manera segura, <strong>para</strong> proteger mi cuenta cuando uso un dispositivo compartido.</td>
      <td>1</td>
    </tr>
    <tr>
      <td>6</td>
      <td>US09</td>
      <td>Crear nueva sesión de práctica</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> crear una nueva sesión de práctica oral, <strong>para</strong> comenzar a ensayar mi presentación y recibir retroalimentación.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>7</td>
      <td>US10</td>
      <td>Seleccionar tipo de sesión</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> seleccionar el tipo de presentación que voy a practicar (pitch, presentación, sustentación de tesis, charla), <strong>para</strong> que el feedback de la IA se ajuste al contexto de mi práctica.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>8</td>
      <td>US11</td>
      <td>Configurar duración objetivo</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> establecer una duración objetivo para mi sesión de práctica, <strong>para</strong> entrenar el manejo del tiempo en mis presentaciones.</td>
      <td>2</td>
    </tr>
    <tr>
      <td>9</td>
      <td>US12</td>
      <td>Iniciar grabación y transcripción en tiempo real</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> iniciar la grabación de mi presentación y ver la transcripción en tiempo real, <strong>para</strong> monitorear lo que digo mientras practico.</td>
      <td>8</td>
    </tr>
    <tr>
      <td>10</td>
      <td>US13</td>
      <td>Pausar y reanudar grabación</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> pausar y reanudar la grabación durante mi sesión, <strong>para</strong> tomar descansos sin perder el progreso de la transcripción.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>11</td>
      <td>US14</td>
      <td>Finalizar sesión y guardar transcripción</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> finalizar la sesión de grabación y que se guarde la transcripción completa, <strong>para</strong> poder revisarla posteriormente y recibir feedback.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>12</td>
      <td>US15</td>
      <td>Recibir feedback general de la IA</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir un resumen de feedback general de la IA al finalizar mi sesión, <strong>para</strong> conocer una evaluación global de mi desempeño oral.</td>
      <td>8</td>
    </tr>
    <tr>
      <td>13</td>
      <td>US16</td>
      <td>Análisis de muletillas</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> ver un análisis detallado de las muletillas que usé durante mi presentación, <strong>para</strong> identificar y reducir su frecuencia.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>14</td>
      <td>US17</td>
      <td>Análisis de palabras clave</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> ver las palabras clave identificadas en mi presentación, <strong>para</strong> verificar que estoy comunicando los conceptos importantes de mi tema.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>15</td>
      <td>US18</td>
      <td>Recomendaciones de mejora de léxico</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir sugerencias para mejorar mi vocabulario y léxico, <strong>para</strong> enriquecer mi expresión oral en futuras presentaciones.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>16</td>
      <td>US19</td>
      <td>Sugerencias de mejora por sección</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> recibir sugerencias específicas de mejora para cada sección de mi presentación, <strong>para</strong> saber exactamente en qué partes debo trabajar más.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>17</td>
      <td>US23</td>
      <td>Seleccionar segmento académico</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> indicar mi segmento académico (ciclo 1-5 o ciclo 6-10) durante el registro o en mi perfil, <strong>para</strong> que Talki adapte el feedback a mi nivel.</td>
      <td>2</td>
    </tr>
    <tr>
      <td>18</td>
      <td>US26</td>
      <td>Recibir recomendaciones adaptadas al segmento</td>
      <td><strong>Como</strong> estudiante de ciclo 1-5, <strong>quiero</strong> recibir retroalimentación adaptada a mi nivel básico de presentaciones, <strong>para</strong> desarrollar habilidades fundamentales de comunicación oral.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>19</td>
      <td>US20</td>
      <td>Consultar historial de sesiones</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> ver una lista de todas mis sesiones de práctica pasadas, <strong>para</strong> acceder a las transcripciones y feedback anteriores.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>20</td>
      <td>US21</td>
      <td>Ver progreso a lo largo del tiempo</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> visualizar gráficos de mi progreso en el tiempo, <strong>para</strong> ver cómo han mejorado mis habilidades de comunicación oral.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>21</td>
      <td>US22</td>
      <td>Comparar dos sesiones</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> comparar dos sesiones de práctica lado a lado, <strong>para</strong> identificar en qué aspectos he mejorado o empeorado.</td>
      <td>5</td>
    </tr>
    <tr>
      <td>22</td>
      <td>US24</td>
      <td>Establecer metas de mejora personal</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> definir metas específicas de mejora, <strong>para</strong> que Talki enfoque sus recomendaciones en mis objetivos.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>23</td>
      <td>US25</td>
      <td>Seleccionar áreas de enfoque para la sesión</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> elegir áreas de enfoque específicas antes de iniciar una sesión, <strong>para</strong> recibir feedback enfocado en esas competencias.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>24</td>
      <td>US27</td>
      <td>Exportar transcripción y feedback</td>
      <td><strong>Como</strong> estudiante, <strong>quiero</strong> exportar la transcripción y el feedback de mi sesión en formato PDF, <strong>para</strong> compartirlo con mi docente o revisarlo sin conexión.</td>
      <td>3</td>
    </tr>
    <tr>
      <td>25</td>
      <td>US01</td>
      <td>Visualizar beneficios de Talki</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> ver una sección de beneficios clave en la página de aterrizaje, <strong>para</strong> entender cómo Talki puede ayudarme a mejorar mi comunicación oral.</td>
      <td>2</td>
    </tr>
    <tr>
      <td>26</td>
      <td>US02</td>
      <td>Ver planes y precios</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> consultar los planes y precios disponibles en la landing page, <strong>para</strong> evaluar cuál se ajusta a mis necesidades y presupuesto.</td>
      <td>2</td>
    </tr>
    <tr>
      <td>27</td>
      <td>US03</td>
      <td>Ver testimonios de usuarios</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> leer testimonios de otros estudiantes que han usado Talki, <strong>para</strong> generar confianza antes de registrarme.</td>
      <td>1</td>
    </tr>
    <tr>
      <td>28</td>
      <td>US04</td>
      <td>Acceder a formulario de contacto</td>
      <td><strong>Como</strong> visitante, <strong>quiero</strong> enviar un mensaje de contacto desde la landing page, <strong>para</strong> resolver dudas antes de registrarme en Talki.</td>
      <td>2</td>
    </tr>
  </tbody>
</table>

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
