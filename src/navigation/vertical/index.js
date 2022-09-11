export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Second Page',
    route: 'second-page',
    icon: 'FileIcon',
  },  

  {
    header: 'Lista & Cadastro',
  },
  
  {
    title: 'Livros',
    icon: 'BookOpenIcon',
    children: [
      {
        title: 'Lista de livros',
        route: 'livro',
      },
      {
        title: 'Cadastrar livro',
        route:  'cad-livro',
      },      
    ],
  },

  {
    title: 'Autores',
    icon: 'UserIcon',
    children: [
      {
        title: 'Lista de Autores',
        route: 'autor',
      },
      {
        title: 'Cadastrar Autore',
        route:  'cad-autor',
      },      
    ],
  },

  {
    title: 'Categorias',
    icon: 'GridIcon',
    children: [
      {
        title: 'Lista de Categorias',
        route: 'categoria',
      },
      {
        title: 'Cadastrar Categoria',
        route:  'cad-categoria',
      },      
    ],
  }, 

  {
    title: 'Editoras',
    icon: 'BookmarkIcon',
    children: [
      {
        title: 'Lista de Editoras',
        route: 'editora',
      },
      {
        title: 'Cadastrar Editora',
        route:  'cad-editora',
      },      
    ],
  },

  


]
