APUNTES FLEXBOX
https://www.youtube.com/watch?v=F-KCncXMPk0&ab_channel=FalconMasters

display: flex;
flex-direction:row; //por defecto
    .Eje Principal: horizontalmente
    .Eje Secundario: verticalmente
flex-direction:column;
    .Eje Principal: verticalmente
    .Eje Secundario: horizontalmente
flex-direction:row-reverse; (los pone todos de reverse pero horizontalmente)
flex-direction:column-reverse;

//FLEX WRAP
*flex-wrap: wrap;
    Si el tamano es mas grande que su contenedor te los acomoda abajo
    Si respeta el width

*flex-wrap: nowrap;
    Te los acomoda al padre. Si el tamano no alcanza lo va a reducir
    proporcionalmente para que alcance. NO respeta tu width que
    le pusiste manualmente.  
    
    *flex-wrap: wrap-reverse;
    Te los acomoda al reves, casi no se usa 
   
//FLEX FLOW
    Es un atajo que recibe 2 valores:
    *flex-direction(row,column,etc)
    *flex-wrap(wrap,nowrap,etc)
    ej: flex-flow: row wrap;

//JUSTIFY CONTENT(eje principal)
    Decidir la posicion y distribucion de los elementos 
    * flex-start //por defecto
        .Se posicionan al principio
    * flex-end 
        .Se posicionan hacia la derecha, al final 
    * center
        .Se centra al padre 
    * space-around 
        .Espacios alredor de ellos, tanto al inicio como al final
    * space-between 
        .Lo mismo que space-around solo que al principio y al
        final no tenemos margenes

//ALIGN ITEMS(eje secundario)
    * flex-start(por defecto)
    * flex-end
        .Se posicionan al final
    * center 
        .Se centran los elementos 
    * stretch //Necesitas tener un height automatico
        .Se estira al 100%
    * baseline
        .Empieza las letras junto con los de los otros elementos
        
//ALIGN CONTENT
    * Solo se utiliza cuando tienes varias filas de elementos (wrap) 
    * Centra por grupo
    * Se utilizan los mismos valores que align-items


//HIJOS

    * flex-basis
        .Puede significar alto y ancho, dependiendo de row o column
    * flex-grow 
        * 1:
        .Van a tener la misma proporcion para que tengan el 100
        .Usualmente es 1 pero si quieres que un elemento vaya 
        creciendo poco a poco seria bueno de usar
    * flex-shrink 
        Lo mismo que grow pero al reves
    * flex 
        Atajo de grow y shrink, alfinal le puedes agregar
        el flex-basis tmb
    * order 
        Para ordenar los elementos, tienes que especificar
        en los elementos el order que va a tomar y despues
        al elemento
        .SE MODIFICAN VISUALMENTE
    *align-self 
        *stretch 
        .Si quieres ponerle stretch importante poner el height
        en auto




            