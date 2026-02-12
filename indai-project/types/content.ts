// Content types for INDAI.CLEAN website

export type PageSection = {
  id: string;
  title: string;
  description?: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon?: string;
};

export type CaseStudy = {
  title: string;
  description: string;
  image?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  date: Date;
};
