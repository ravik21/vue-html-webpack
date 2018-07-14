import Layout from './components/Index.vue';
import Index from './components/landing/Index.vue';
import aboutComponent from './components/about/Index.vue';
import productsComponent from './components/products/Index.vue';
import storeComponent from './components/store/Index.vue';

const routes = [
     {
        path: '/',
        component: Layout,
        children:
        [
          { path: '', component: Index, name: '', meta: { title: 'Coffee Shop' } },
          { path: 'about', component: aboutComponent, name: 'About', meta: { title: 'Coffee Shop - About' } },
          { path: 'products', component: productsComponent, name: 'Products', meta: { title: 'Coffee Shop - Products' } },
          { path: 'store', component: storeComponent, name: 'Store', meta: { title: 'Coffee Shop - Store' } },
        ]
    },

 ]

export default routes;
