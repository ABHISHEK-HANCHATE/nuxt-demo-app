import { Middleware } from '@nuxt/types'

const boxColorMiddleware: Middleware = ({ route, app }) => {
  const isActiveBox1 = route.path === '/box1'
  const isActiveBox2 = route.path === '/box2'
  
  const brandHeader =  'bob';
  console.log("MW:", brandHeader);

  
  if (brandHeader === 'bob') {
      console.log("using maersk tokens in head");
      app.$isActiveBox1 = isActiveBox1
      import(`./assets/box1.css`);
      
  } else {
      console.log("using sealand tokens in head");
     // resolve('./assets/design-tokens-px.css'),
     app.$isActiveBox2 = isActiveBox2
      import(`./assets/box2.css`);
  }

}

export default boxColorMiddleware


