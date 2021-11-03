import './src/css/tailwind.css';
const activateOptimize = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "optimize.activate" });
  };
  export const onRouteUpdate = () => {
    // ...
    activateOptimize();
  };