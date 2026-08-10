export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl?: string;
  imageUrls?: string[];
  videoUrl?: string;
  link?: string;
}
