export type Angel = {
  id: number;
  name: string;
  imageUrl: string;
  twitterUrl: string;
};

export type MemberSocials = {
  twitter?: string;
  linkedin?: string;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  text: string;
  imageUrl: string;
  socials?: MemberSocials;
};

export type RoadmapMilestone = {
  title: string;
  link?: string;
};

export type RoadmapQuarter = {
  quarter: string;
  milestones: RoadmapMilestone[];
};

export type ContactInfo = {
  name: string;
  title: string;
  email: string;
  website: string;
};

export type ContactErrors = Partial<Record<keyof ContactInfo, string>>;
