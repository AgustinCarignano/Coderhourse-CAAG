## TODO List

- [ x ] Instalar Angular Material
- [ x ] Instalar Bootstrap para utilizar sistema de grillas
- [ ] Crear modulo layout, y dentro componentes Toolbar, sidebar y home (sección de contenido)
- [ ] Crear modulo Shared para exportar componentes comunes de angular material, pipes y directivas
- [ ] Crear pipe que reciba los datos de usuario y aplique una trasformacion que retorne el nombre completo, en title case, separdo por coma.
- [ ] Crear directiva que aplique un formato específico a los titulos ?
- [ ] Crear carpeta features, dentro modulo user, y dentro de este los componentes de vistas
- [ ] Crear componentes:
  - tabla de usuarios: Recibe un array de usuarios y los renderiza
  - Modal Form: Formulario para la creacion/edicion de datos de alumnos

## Estructura de carpetas

    src/app/
        features/
            users/
                components/
                models/
                services/
                pages/
                users.module.ts
        shared/
            pipes/
            directives/
            shared.module.ts
        layout/
            sidebar/
            toolbar/
            home/
            layout.module.ts
        app.module.ts
