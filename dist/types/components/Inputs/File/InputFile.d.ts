export interface InputFileProps extends React.ComponentProps<"input"> {
    label?: string;
    onFileSelect?: (files: FileList) => void;
    multiple?: boolean;
}
export declare function InputFile({ className, label, onFileSelect, multiple, ...props }: InputFileProps): import("react/jsx-runtime").JSX.Element;
