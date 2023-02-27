export interface InitialUserData {
  address?: string;
  chain_id?: number;
}

export interface IAddProfileAPI {
  nickname: string;
  content: string;
}

export interface ICreateMilestoneAPI {
  token_id: number;
  milestone_id: number;
  status: boolean;
  address: string;
}

export interface ICreateFundingAPI {
  token_id: number;
  title: string;
  content: string;
  milestone: IMilestone[];
}

export interface IMilestone {
  order: number;
  title: string;
  output: {
    title: string;
  }[];
}

export interface IFundingOutputAPI {
  token_id: number;
  output_id: number;
  done: boolean;
}

export interface ImageUpload {
  formData: any;
  token_id?: number;
}

export interface IMileData {
  id: number;
  title: string;
  order: number;
  output: IOutput[];
}

export interface IOutput {
  id: number;
  title: string;
  done: boolean;
}
