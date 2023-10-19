package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hola mundo!" );
        get("/",
            (request, response)-> "<h1>Hola mundo</h1>"
        );
        get("/ruta1",
            (request, response)-> "<h1>Adios mundo</h1>"
        );
        get("/ruta2",
            (request, response)-> "<h1>Que tal mundo</h1>"
        );
        //get("/ruta3",
            //(request, response)-> "alumno":"json","matricula":"matricula","carrera":"carrera"
        //);
    }
}
