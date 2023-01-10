//Declaro Variables
let salirDelMenu = false;
let cursos;
let todosLosCursos = "";
let nombreCurso = "";
let precioCursos = 0;
let consulta;
let numeroDeCursos;
let cursoTotal;

//Funcion para mostrar los cursos
function mostrarCursos() {
    cursos = parseInt(
        prompt(`
    Estos son los cursos que brindamos para que te capacites con nosotros: 
      1 - Marketing Digital - Precio del Curso: $30000
      2 - HTML 5 - Precio del Curso: $10000
      3 - CSS - Precio del Curso: $10000
      4 - JavaScript - Precio del Curso: $15000
  Escoge la opcion del 1 al 4 correspondiente al curso al cual 
  quieras inscribirte.`)
    );

    //Opciones
    switch (cursos) {
        case 1:
            precioCursos += 30000;
            nombreCurso = "Marketing Digital,";
            alert(`Genial agregaste el curso ${nombreCurso} al carro de compras.`);
            todosLosCursos += nombreCurso;
            break;

        case 2:
            precioCursos += 10000;
            nombreCurso = "HTML 5,";
            alert(`Genial agregaste el curso ${nombreCurso} al carro de compras`);
            todosLosCursos += nombreCurso;
            break;

        case 3:
            precioCursos += 10000;
            nombreCurso = "CSS,";
            alert(`Genial agregaste el curso ${nombreCurso} al carro de compras`);
            todosLosCursos += nombreCurso;
            break;

        case 4:
            precioCursos += 15000;
            nombreCurso = "JavaScript,";
            alert(`Genial agregaste el curso ${nombreCurso} al carro de compras`);
            todosLosCursos += nombreCurso;
            break;

        //Opcion Predeterminada
        default:
            alert("Ingrese una opcion del 1 al 4");
            break;
    }
}

//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRITO DE COMPRAS
function carroDeCompras() {
    consulta = prompt(
        `Desea comprar los cursos agregados al carrito de compras? Indique si o no.`
    ).toLowerCase();

    if (consulta === "si" /*  || consulta === "SI" */) {
        alert(
            `¡¡FELICIDADES!! compraste ${todosLosCursos} preparate para empezar a aprender y disfrutar de lo que se viene`
        );
        todosLosCursos = "";
        precioCursos = 0;
    } else if (consulta == "no") {
        alert(
            "Lamentamos que no sea de tu interes ninguno de los cursos disponibles. Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos."
        );
        todosLosCursos = "";
        precioCursos = 0;
    } else {
        alert("Ingresa si o no");
    }
}

//Menu Principal
do {
    let consultar = parseInt(
        prompt(`Ingrese la opcion deseada: 
    
    1 - Consultar cursos disponibles.
    2 - Ver carro de compras.
    0 - Salir del menu.
    `)
    );

    //Opciones
    switch (consultar) {
        case 1:
            mostrarCursos();
            break;

        case 2:
            if (todosLosCursos == "") {
                alert("El carrito esta vacio, agrega los cursos que desees.");
            } else {
                alert(
                    `En el carrito de compras agregaste ${todosLosCursos} y el precio total es de: $${precioCursos}.`
                );
                carroDeCompras();
            }
            break;

        case 0:
            alert(
                "Gracias por visitarnos, esperamos que pronto tengamos algun curso que sea de tu interes. "
            );
            salirDelMenu = true;
            break;

        //Opcion Predeterminada
        default:
            alert("Ingrese una opcion correcta del 0 al 1.");
            break;
    }
} while (!salirDelMenu);