import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Editora',
      name: 'editora',
      component: () => import('@/views/lista-e-cadastro/Editora/Editora.vue'),
      meta: {
        pageTitle: 'Editora',
        breadcrumb: [
          {
            text: 'Editora',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Livro',
      name: 'livro',
      component: () => import('@/views/lista-e-cadastro/Livro/Livro.vue'),
      meta: {
        pageTitle: 'Livro',
        breadcrumb: [
          {
            text: 'Livro',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Autor',
      name: 'autor',
      component: () => import('@/views/lista-e-cadastro/Autor/Autor.vue'),
      meta: {
        pageTitle: 'Autor',
        breadcrumb: [
          {
            text: 'Autor',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Categoria',
      name: 'categoria',
      component: () => import('@/views/lista-e-cadastro/Categoria/Categoria.vue'),
      meta: {
        pageTitle: 'Categoria',
        breadcrumb: [
          {
            text: 'Categoria',
            active: true,
          },
        ],
      },
    },



    {
      path: '/Cad-editora',
      name: 'cad-editora',
      component: () => import('@/views/lista-e-cadastro/Editora/Cad-editora.vue'),
      meta: {
        pageTitle: 'Cadastrar Editora',
        breadcrumb: [
          {
            text: 'Cadastrar Editora',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Cad-livro',
      name: 'cad-livro',
      component: () => import('@/views/lista-e-cadastro/Livro/Cad-livro.vue'),
      meta: {
        pageTitle: 'Cadastrar Livro',
        breadcrumb: [
          {
            text: 'Cadastrar Livro',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Cad-autor',
      name: 'cad-autor',
      component: () => import('@/views/lista-e-cadastro/Autor/Cad-autor.vue'),
      meta: {
        pageTitle: 'Cadastrar Autor',
        breadcrumb: [
          {
            text: 'Cadastrar Autor',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Cad-categoria',
      name: 'cad-categoria',
      component: () => import('@/views/lista-e-cadastro/Categoria/Cad-categoria.vue'),
      meta: {
        pageTitle: 'Cadastrar Categoria',
        breadcrumb: [
          {
            text: 'Cadastrar Categoria',
            active: true,
          },
        ],
      },
    },

    {
      path: '/Edit-autor',
      name: 'edit-autor',
      component: () => import('@/views/lista-e-cadastro/Autor/Edit-autor.vue'),
      meta: {
        pageTitle: 'Editar Autor',
        breadcrumb: [
          {
            text: 'Editrar Autor',
            active: true,
          },
        ],
      },
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
