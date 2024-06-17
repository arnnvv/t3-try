"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, type FC } from "react";
import { toast } from "sonner";
import { useUploadThing } from "~/utils/uploadthing";
type Input = Parameters<typeof useUploadThing>;

const UploadSVG = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
    />
  </svg>
);

const useUploadThingInputProps = (
  ...args: Input
): {
  inputProps: {
    onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
    multiple: boolean;
    accept: string;
  };
  isUploading: boolean;
} => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

const SimpleUploadButton: FC = (): JSX.Element => {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      router.refresh();
    },
  });

  return (
    <div
      onClick={() => {
        toast.success("clicked");
      }}
    >
      <label htmlFor="upload-button" className="cursor-pointer">
        <UploadSVG />
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
};

export default SimpleUploadButton;
