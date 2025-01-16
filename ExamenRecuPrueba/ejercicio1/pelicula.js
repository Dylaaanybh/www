class Pelicula{
    id
    titulo
    genero
    #presupuesto
    director
    constructor(id, titulo, genero = [], presupuesto = 0, director = ''){
        this.id = id
        this.titulo = titulo
        this.genero = genero
        presupuesto >= 0 && (this.#presupuesto = presupuesto)
        this. director = director
    }
    toString(){
        return `${this.titulo} (${this.director}) ${this.presupuesto}$ [${this.genero}]`
    }
    set presupuesto(presupuesto){
        presupuesto >= 0 ? this.#presupuesto = presupuesto : null
        
    }
    get presupuesto(){
        return this.#presupuesto
    }
    static generos = ["Action","Comedy","Adventure","Animation","Children","Sci-Fi","Drama","Documentary","Thriller","Romance","Fantasy","Crime","Horror","War","Musical","Mystery","Film-Noir","Western"];
    static addGenero(genero){
        !Pelicula.generos.includes(genero) && (Pelicula.generos.push(genero))
    }
    static removeGenero(genero){
        Pelicula.generos.splice(Pelicula.generos.indexOf(genero), 1)
    }
}
let list = []
PELICULAS.forEach((p) => {
    list.push(new Pelicula(p.id, p.titulo, p.genero, p.presupuesto, p.director.nombre))
})
export default list