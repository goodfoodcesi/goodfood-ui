import { useRef, useState } from "react";
import { Input } from "../../ui/input";
import { cn } from "../../../lib/utils";
import FileSvg from "../../../assets/upload.svg";
import PngSvg from "../../../assets/png.svg";
import PdfSvg from "../../../assets/pdf.svg";
import { X } from "lucide-react";

export interface InputFileProps extends React.ComponentProps<"input"> {
  label?: string;
  onFileSelect?: (files: FileList) => void;
  multiple?: boolean;
}

export function InputFile({
  className,
  label,
  onFileSelect,
  multiple = false,
  ...props
}: InputFileProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const baseClasses = "gf-input";

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles = Array.from(fileList);
    setFiles((prev) => (multiple ? [...prev, ...newFiles] : newFiles));
    onFileSelect?.(fileList);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);
  const handleClick = () => ref.current?.click();

  const handleDelete = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const dropClasses = cn(
    "border-2 border-dashed rounded-lg p-[10px] text-center cursor-pointer transition-colors",
    isDragging ? "border-black bg-gray-100" : "border-gray-300 hover:border-black",
    className
  );

  return (
    <div className="input-wrapper flex flex-col gap-2">
      {label && (
        <label className="gf-input-text-label text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Zone de drag & drop */}
      <div
        className={dropClasses}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex justify-center">
          <div className="gf-input-file-logo">
            <img src={FileSvg} className="w-[24px] h-[24px]" />
          </div>
        </div>

        <p className="gf-input-file-notice">
          Glissez vos fichiers ici ou <span className="underline">cliquez</span>{" "}
          pour importer
        </p>

        <p className="gf-input-file-subtitle text-xs text-gray-500">
          Fichier de taille 10MB maximum — PDF, PNG, JPEG
        </p>

        <Input
          ref={ref}
          type="file"
          multiple={multiple}
          className={cn(baseClasses, "hidden")}
          onChange={(e) => handleFiles(e.target.files)}
          {...props}
        />
      </div>

      {/* Liste des fichiers */}
      {files.length > 0 && (
        <ul className="mt-2 space-y-2">
          {files.map((file, index) => (
            <FilePreview
              key={index}
              file={file}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}


interface FilePreviewProps {
  file: File;
  onDelete: () => void;
}

function FilePreview({ file, onDelete }: FilePreviewProps) {
  const getFileIcon = () => {
    if (file.type === "application/pdf") return PdfSvg;
    if (file.type === "image/png" || file.type === "image/jpeg") return PngSvg;
    return PngSvg;
  };

  const icon = getFileIcon();

  return (
    <li className="flex items-center justify-between border rounded-md px-3 py-2 bg-[var(--black)]">
      <div className="flex items-center gap-2">
        <img src={icon} alt={file.name} className="w-10 h-10 object-cover rounded" />
        <div>
          <p className="text-sm font-medium text-[var(--white)]">{file.name}</p>
          <p className="text-xs text-[var(--gray-700)]">
            {(file.size / 1024).toFixed(1)} Ko
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onDelete}
        className="text-gray-400 hover:text-red-500 transition"
        aria-label="Supprimer le fichier"
      >
        <X size={18} />
      </button>
    </li>
  );
}
