export interface PageProps {
  visRef:  any;
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;

};
// visRef: React.RefObject<HTMLElement>; // Or React.RefObject<HTMLDivElement> or any other specific HTML element type
// visible: boolean;



// export type PageProps = {
//   pageRefs?: React.MutableRefObject<{}>;
//   visible?: boolean;
//   visRef?: React.RefObject<Element>;
//   params?: any;
//   children?: React.ReactNode;
// };