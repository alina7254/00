import React, { useEffect, useState } from "react";
import { ImageUploaderProps } from "../../hooks/types";

const ImageUploader: React.FC<ImageUploaderProps> = ({ blob, setImage }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);

      return () => {
        URL.revokeObjectURL(url);
        setPreviewUrl(null);
      };
    }
  }, [blob]);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {previewUrl && <img src={previewUrl} alt="Preview" width={50} />}
    </div>
  );
};

export default ImageUploader;

