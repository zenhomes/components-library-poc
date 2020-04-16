/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const svgUrl: string;
    const svgComponent: SvgrComponent;
    export default svgUrl;
    export { svgComponent as ReactComponent };
}

declare module 'react-pdf' {
    export const Document: React.ComponentType<{
        file: string | any;
        onLoadSuccess?: (response: { [key: string]: any }) => void;
        loading?: any;
        error?: any;
        className?: string;
        externalLinkTarget?: string;
        noData?: any;
    }>;

    export const Page: React.ComponentType<{
        height?: number;
        width?: number;
        pageNumber: number;
        error?: any;
        className?: string;
    }>;

    export const Outline: React.ComponentType;

    export const pdfjs: React.ComponentType | any;
}

declare module 'react-load-script';
