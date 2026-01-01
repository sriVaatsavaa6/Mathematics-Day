export interface ChartDataPoint {
  name: string;
  value: number;
  fullMark?: number;
}

export interface ComicState {
  isLoading: boolean;
  imageUrl: string | null;
  error: string | null;
}

export enum SectionType {
  INTRO = 'INTRO',
  POLL = 'POLL',
  GAMING = 'GAMING',
  AI = 'AI',
  CONCLUSION = 'CONCLUSION'
}