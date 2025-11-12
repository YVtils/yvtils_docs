declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "prismjs/themes/*.css";
declare module "prismjs/components/*";
declare module "@yvtils/designsystem/styles";
