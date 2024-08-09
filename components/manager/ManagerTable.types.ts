export type Board = {
  id: string;
  badges: {
    attachmentsByType: {
      trello: {
        board: number;
        card: number;
      };
    };
    externalSource: string | null;
    location: boolean;
    votes: number;
    viewingMemberVoted: boolean;
    subscribed: boolean;
    attachments: number;
    fogbugz: string;
    checkItems: number;
    checkItemsChecked: number;
    checkItemsEarliestDue: null;
    comments: number;
    description: boolean;
    due: null;
    dueComplete: boolean;
    lastUpdatedByAi: boolean;
    start: null;
  };
  checkItemStates: [];
  closed: boolean;
  dueComplete: boolean;
  dateLastActivity: string;
  desc: string;
  descData: {
    emoji: {};
  };
  due: null;
  dueReminder: null;
  email: string | null;
  idBoard: string;
  idChecklists: [];
  idList: string;
  idMembers: [];
  idMembersVoted: [];
  idShort: number;
  idAttachmentCover: number | null;
  labels: [
    {
      id: string;
      idBoard: string;
      name: string;
      color: string;
      uses: number;
    }
  ];
  idLabels: [string];
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  start: null;
  subscribed: boolean;
  url: string;
  cover: {
    idAttachment: null;
    color: null;
    idUploadedBackground: null;
    size: "normal";
    brightness: "dark";
    idPlugin: null;
  };
  isTemplate: boolean;
  cardRole: null;
};
