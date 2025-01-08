export const isEdge = (userAgent: string | null) =>
  !!userAgent?.indexOf("Edg") && userAgent?.indexOf("Edg") > -1;
