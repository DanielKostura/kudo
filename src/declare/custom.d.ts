declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'qrcode'{
  const content: any;
  export default content
}
/*
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
*/
