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
