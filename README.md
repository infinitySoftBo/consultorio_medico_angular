# Medico

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Aplicación de Consultorio

Este proyecto incluye un conjunto de módulos básicos para gestionar un consultorio médico.
Cada módulo cuenta con una pequeña interfaz interactiva para agregar y listar información.
Las rutas disponibles son:
- `/patients` Gestión de Pacientes
- `/calendar` Agenda Médica con registro de fecha y hora y vista de calendario. Al seleccionar un día se muestran las citas programadas para esa fecha
- `/history` Historia Clínica
- `/prescriptions` Prescripción Médica
- `/payments` Gestión de Pagos
- `/inventory` Inventario Médico
- `/reports` Reportes e Indicadores
- `/login` Inicio de Sesión

Para ingresar a los módulos es necesario autenticarse primero en `/login`. Una
vez iniciada la sesión se habilita la navegación lateral y se puede cerrar la
sesión desde el enlace *Logout* en la barra superior.

El módulo de reportes ahora muestra un gráfico de barras que resume la cantidad
de pacientes registrados, citas programadas y la suma de pagos registrados usando
los datos capturados en los formularios.

### Datos de prueba

Al iniciar la aplicación se precargan algunos pacientes, citas y elementos de inventario. Estos datos de ejemplo permiten observar de inmediato las tablas de cada módulo y los indicadores del apartado de reportes.

### Selección rápida de pacientes

Los formularios de prescripciones, historia clínica, agenda y pagos utilizan un componente reutilizable para escoger pacientes existentes. El `PatientSelectorComponent` muestra un campo con autocompletado basado en Angular Material y evita escribir los datos de cada paciente manualmente. Si no hay pacientes registrados aparece un mensaje solicitando registrar uno nuevo.
