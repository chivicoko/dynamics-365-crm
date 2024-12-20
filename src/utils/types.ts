export interface Campaign {
  _id: string;
  campaignName: string;
  campaignDescription: string;
  startDate: string;
  endDate: string;
  digestCampaign: boolean;
  linkedKeywords: string[];
  dailyDigest: string;
  campaignStatus: string;
}

export interface CampaignCreate {
  campaignName: string;
  campaignDescription: string;
  startDate: string;
  endDate?: string;
  digestCampaign: boolean;
  linkedKeywords: string[];
  dailyDigest: string;
  campaignStatus: string;
}

export interface FormData {
  campaignName: string;
  campaignDescription: string;
  startDate: string;
  endDate: string;
  digestCampaign: boolean;
  linkedKeywords: string;
  dailyDigest: string;
  campaignStatus: string;
}

export interface CampaignUpdate extends CampaignCreate {
  id: string;
}

export interface leadsProps {
  id: number;
  name: string;
  topic: string;
  statusReason: string;
  createdOn: string;
}

export interface CarouselProps {
  slides: { 
    id: number;
    imageSrc: string;
    alt: string;
    title: string
  }[];
}

export interface leadModalProps {
  handleLeadToggle: () => void;
}

export interface Lead {
  id: number;
  name: string;
  topic: string;
  statusReason: string;
  createdOn: string;
}