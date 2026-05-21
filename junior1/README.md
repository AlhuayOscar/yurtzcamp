# Junior 1 - Login con Tailwind

Esta carpeta contiene una actividad simple para practicar maquetado con
`HTML + Tailwind CSS + JavaScript`.

## Archivos

- `index.html`: base para practicar. Tiene la estructura, el contenido y los
  TODOs para que tu companero complete las clases de Tailwind.
- `resolved.html`: version resuelta del ejercicio.
- `logo.svg`: logo usado como primer item visual del login.

## Objetivo

Construir un login que cumpla con lo siguiente:

- tarjeta centrada en medio de la pantalla
- bordes redondeados
- logo arriba como primer elemento
- labels y campos alineados uno al lado del otro
- boton `Ingresar`
- colores definidos usando utilidades de Tailwind

## Reglas de la practica

- usar Tailwind CSS desde la CDN
- no escribir CSS manual para resolver el layout
- mantener HTML semantico
- agregar un pequeno comportamiento en JavaScript para el submit

## Sugerencia de trabajo

1. Abrir `index.html`.
2. Completar las clases de Tailwind que faltan.
3. Comparar el resultado con `resolved.html`.
4. Correr las pruebas para validar estructura y comportamiento.

## Tests

Desde la raiz del proyecto:

```bash
npm test
```

Esto ejecuta:

- Jest para validar estructura y contenido de `junior1`
- Playwright para comprobar el render y el submit de `resolved.html`
