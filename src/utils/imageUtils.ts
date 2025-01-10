export const dataURItoBlob = (dataURI: string, fileType: string): Blob => {
  const byteString = atob(dataURI.split(',')[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: fileType });
};

export const dataURItoFile = (
  dataURI: string,
  fileName: string,
  fileType: string
): File => {
  const blob = dataURItoBlob(dataURI, fileType);
  return new File([blob], fileName, { type: blob.type });
};

export const blobToFile = (blob: Blob, fileName: string): File => {
  return new File([blob], fileName, { type: blob.type });
};

export const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number } | null> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () =>
      resolve(
        img.width && img.height
          ? { width: img.width, height: img.height }
          : null
      );
    img.onerror = (error) => reject(error);
  });
};

export const isImageDimensionWithinThreshold = (
  actual: number,
  ideal: number,
  threshold: number
): boolean => {
  const isWithinThreshold = actual >= ideal * (1 - threshold);
  return isWithinThreshold;
};
