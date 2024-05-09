//base url = window.location.href ||
const baseurl = window.location.href; 
export const TimelineData = [
  {
    timelabel: "1837 ",
    icon: "fas fa-cogs bg-blue",
    resaltHeader: "La creación del primer ordenador",
    header: "Charles Babbage y la Máquina Analítica",
    text: "Charles Babbage conceptualiza la Máquina Analítica, considerada el primer diseño de un ordenador general propósito.",
    images:['/img/AnalyticalMachine_Babbage_London.jpg'],
    mainColor: "gray",
    iconColor: "red",
    author: "Charles Babbage",
  },
  {
    timelabel: "1950s",
    icon: "fas fa-database bg-blue",
    resaltHeader: "El concepto de la base de datos",
    header: "Desarrollo del concepto de base de datos",
    text: "En los años 50, con el desarrollo de las primeras computadoras, surge el concepto de base de datos como sistema para almacenar y gestionar colecciones de datos.",
    mainColor: "red",
    iconColor: "blue",
    author: "Varios",
  },
  {
    timelabel: "1951",
    icon: "fas fa-magnet bg-blue",
    resaltHeader: "Creación de cintas magnéticas",
    header: "Uso de cintas magnéticas para almacenamiento de datos",
    text: "Las cintas magnéticas se introducen como medio para almacenar datos de forma masiva, revolucionando la gestión de la información.",
    images:["/img/Cintas_video.jpeg", "/img/cintas_2.jpeg"],
    mainColor: "blue",
    iconColor: "red",
    author: "UNIVAC",
  },
  {
    timelabel: "1960",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Nacimiento de las bases de datos",
    header: "Creación del modelo de datos jerárquico",
    text: "El modelo de datos jerárquico, implementado por primera vez en el sistema IBM Information Management System (IMS), marca el inicio de las bases de datos modernas.",
    images: ["/img/ibm.jpeg"],
    mainColor: "red",
    iconColor: "blue",
    author: "IBM",
  },
  {
    timelabel: "1960s",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Desarrollo de IDS",
    header: "Creación del sistema IDS",
    text: "El Integrated Data Store (IDS), uno de los primeros sistemas de bases de datos, es desarrollado por Charles W. Bachman.",
    images:['/img/ids.png'],
    widthImg:"350px",
    mainColor: "purple",
    iconColor: "blue",
    author: "Charles W. Bachman",
  },
  {
    timelabel: "1970",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Revolución con el modelo relacional",
    header:
      "Propuesta del modelo de bases de datos relacional por Edgar F. Codd",
    text: "Edgar F. Codd, de IBM, propone el modelo relacional para la gestión de bases de datos, un enfoque que revolucionaría la teoría y práctica en el manejo de datos.",
    mainColor: "blue",
    iconColor: "red",
    author: "Edgar F. Codd",
  },
  {
    timelabel: "1974",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Inicio de SQL",
    header: "Desarrollo del lenguaje SQL",
    text: "SQL (Structured Query Language) es desarrollado por IBM para manipular y recuperar datos almacenados en bases de datos relacionales.",
    images: ["/img/sql.png"],
    widthImg:"200px",
    mainColor: "green",
    iconColor: "blue",
    author: "IBM",
  },
  {
    timelabel: "1976",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Modelo Entidad-Relación",
    header: "Propuesta del modelo Entidad-Relación",
    text: "Peter Chen propone el modelo entidad-relación para el diseño de bases de datos, un enfoque que se convierte en fundamental para la modelación de datos.",
    images: ['/img/entidad-relacion.png'],
    mainColor: "red",
    iconColor: "blue",
    author: "Peter Chen",
  },
  {
    timelabel: "1977",
    icon: "fas fa-building bg-blue",
    resaltHeader: "Fundación de Oracle",
    header: "Oracle Corporation es fundada",
    text: "Oracle Corporation, inicialmente Software Development Laboratories, es fundada, convirtiéndose en un gigante en el mercado de las bases de datos.",
    images: ["/img/oracle.png"],
    mainColor: "red",
    iconColor: "blue",
    author: "Larry Ellison, Bob Miner, Ed Oates",
  },
  {
    timelabel: "1980s",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Bases de datos orientadas a objetos",
    header: "Emergencia de las bases de datos orientadas a objetos",
    text: "Las bases de datos orientadas a objetos comienzan a desarrollarse, permitiendo almacenar objetos complejos directamente en la base de datos.",
    images:['/img/orientada_obj.svg'],
    mainColor: "purple",
    iconColor: "blue",
    author: "Varios",
  },
  {
    timelabel: "1980",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Auge de los sistemas de gestión de bases de datos",
    header:
      "Popularización de los Sistemas de Gestión de Bases de Datos (SGBD)",
    text: "Los SGBD relacionales como Oracle, SQL Server y MySQL comienzan a dominar el mercado, ofreciendo soluciones más eficientes para el almacenamiento y consulta de datos.",
    images: ["/img/mysql.png", "/img/sqlserver.png", "/img/oracle.png"],
    widthImg:"200px",
    mainColor: "green",
    iconColor: "blue",
    author: "Varios",
  },
  {
    timelabel: "1986",
    icon: "fas fa-database bg-blue",
    resaltHeader: "PostgreSQL",
    header: "Lanzamiento de PostgreSQL",
    text: "PostgreSQL, un poderoso sistema de base de datos relacional de código abierto, es lanzado, ofreciendo características avanzadas como transacciones ACID.",
    images:['/img/postgres-logo.png'],
    widthImg:"350px",
    mainColor: "orange",
    iconColor: "blue",
    author: "Michael Stonebraker",
  },
  {
    timelabel: "1989",
    icon: "fas fa-globe bg-blue",
    resaltHeader: "World Wide Web",
    header: "Invención de la World Wide Web",
    text: "Tim Berners-Lee inventa la World Wide Web, revolucionando la forma en que accedemos y compartimos información.",
    images: ["/img/world-wide.png"],
    widthImg:"200px",
    mainColor: "green",
    iconColor: "blue",
    author: "Tim Berners-Lee",
  },
  {
    timelabel: "1998",
    icon: "fas fa-code bg-blue",
    resaltHeader: "Sistemas XML",
    header: "Estándarización de XML",
    text: "XML se convierte en un estándar del W3C, facilitando el intercambio de datos estructurados en Internet.",
    images: ["/img/xml.png"],
    widthImg:"150px",
    mainColor: "orange",
    iconColor: "blue",
    author: "W3C",
  },
  {
    timelabel: "2000",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Lanzamiento de SQLite",
    header: "SQLite es lanzado",
    text: "SQLite, una biblioteca en C que provee un motor de base de datos ligero, es lanzado. No requiere un servidor para operar.",
    images: ["/img/sqllite.png"],
    width:"150px",
    mainColor: "blue",
    iconColor: "red",
    author: "D. Richard Hipp",
  },
  {
    timelabel: "2000",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Inicio de la era NoSQL",
    header: "Emergencia de las bases de datos NoSQL",
    text: "Para abordar las limitaciones de los modelos relacionales en aplicaciones web a gran escala, comienzan a popularizarse las bases de datos NoSQL, como MongoDB, ofreciendo mayor flexibilidad.",
    images: ["/img/nosql.png"],
    widthImg:"350px",
    mainColor: "orange",
    iconColor: "blue",
    author: "MongoDB, entre otros",
  },
  {
    timelabel: "2010",
    icon: "fas fa-database bg-blue",
    resaltHeader: "Big Data y análisis en tiempo real",
    header: "Expansión hacia el Big Data y análisis en tiempo real",
    text: "Las tecnologías de bases de datos se adaptan para manejar volúmenes masivos de datos y análisis en tiempo real, con sistemas como Hadoop y el procesamiento en memoria con SAP HANA.",
    images: ["/img/bigdata.png"],
    widthImg:"330px",
    mainColor: "purple",
    iconColor: "blue",
    author: "Apache Hadoop, SAP HANA",
  },
  // Añade más objetos según sea necesario
];
