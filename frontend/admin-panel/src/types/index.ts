export interface Edition {
  id: string;
  name: string;
  location: string;
  date: string;
  status: 'draft' | 'live' | 'archived';
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface Reel {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl?: string;
}
