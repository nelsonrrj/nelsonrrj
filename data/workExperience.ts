import type { Experience } from '~/types/experience'

const WORK_EXPERIENCE = [
  {
    company: 'Talently',
    position: 'Desarrollador Full Stack',
    sdate: '2021-02-01',
    edate: '2024-01-01',
    description:
      'Colaboración en equipo para mejorar la plataforma educativa de Talently, añadiendo nuevas funcionalidades y realizando integraciones con herramientas de seguimiento de clientes como Pipedrive y ActiveCampaign. También implementamos una integración con Calendly y Google Calendar para la gestión de reuniones y eventos. Utilizamos Laravel (versiones 6.2 y 9.19) para el backend y Nuxt 2 para el frontend.',
    stack: ['PHP', 'Laravel', 'Phpunit', 'Vue', 'Nuxt', 'Docker'],
  },
  {
    company: 'Profesional Independiente',
    position: 'Desarrollador Full Stack',
    sdate: '2020-10-01',
    edate: '2021-01-01',
    description:
      'Trabajo en equipo para el mejoramiento de las funcionalidades existentes y el desarrollo de nuevas características para la suite Sistran de productos de seguros. Utilizando React(v16.10) y Node-Express(v4.16).',
    stack: ['React', 'Nodejs'],
  },
  {
    company: 'Profesional Independiente',
    position: 'Desarrollador Front-End',
    sdate: '2019-10-01',
    edate: '2020-03-01',
    description:
      'Trabajo en equipo para la renovación de la interfaz de usuario y el desarrollo de nuevas características para un sitio web de búsqueda de empleo llamado YOSS. Utilizando Angularjs(v1.14).',
    stack: ['Angularjs'],
  },
  {
    company: 'Remote PC solutions',
    position: 'Desarrollador Full Stack',
    sdate: '2019-01-01',
    edate: '2020-06-01',
    description:
      'Creación de una página web para la gestión de la información administrativa de proveedores de servicios y sus clientes. Adicionalmente trabajé en grupo para el desarrollo de un sistema para la gestión de información sobre creación, venta y mantenimiento de proyectos inmobiliarios residenciales. Utilizando las herramientas de Angular(v7), Laravel (v5.7) y MySql.',
    stack: ['Angular', 'Laravel', 'MySql'],
  },
  {
    company: 'Karanta dev',
    position: 'Desarrollador Full Stack',
    sdate: '2017-08-01',
    edate: '2028-12-01',
    description:
      'Trabajo en equipo para desarrollar diversos sistemas para la startup Karanta, en los que se incluyen: un sistema de licencias de software de uso interno, un sistema para la gestión de información de pozos petroleros y la creación de una librería de componentes de Vuejs para los proyectos de la empresa. Las herramientas utilizadas fueron Laravel (v5.7), Vue (v2.4), Postgres y Jest (v22.4.2) para la creación de pruebas unitarias para Vuejs.',
    stack: ['Vue', 'Laravel', 'Postgres', 'Jest'],
  },
]

const map: Experience[] = WORK_EXPERIENCE.map((exp) => ({
  company: exp.company,
  position: exp.position,
  sdate: new Date(exp.sdate),
  edate: new Date(exp.edate),
  description: exp.description,
  stack: exp.stack,
}))

export default map
