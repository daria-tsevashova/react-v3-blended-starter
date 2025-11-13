export interface Photo {
  id: number;
  avg_color: number;
  alt: string;
  src: {
    original: string;
    large: string;
  };
}
