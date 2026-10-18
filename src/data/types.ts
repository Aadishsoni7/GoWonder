export type Possibility = {
 id:string; title:string; aliases:string[]; nodeType:'world'|'possibility'; possibilityType:string;
 shortDescription:string; longerDescription:string; tags:string[]; worldIds:string[];
 childIds:string[]; relatedIds:string[]; intersectionIds:string[]; peopleIds:string[];
 resourceIds:string[]; activityId?:string; surpriseLevel?:number; hidden?:boolean;
 eligibilityNotes?:string; deeperInfo?:string; icon?:string;
};
export type Activity={id:string;title:string;minutes:number;instructions:string[];reflectionOptions:{label:string;nodeId?:string}[];demo?:string};
export type Resource={id:string;title:string;url:string;type:'video'|'article'|'portfolio'|'guide';source?:string};
export type Person={portraitStatus?:string;processContext?:string;id:string;name:string;role:string;location?:string;country?:string;shortStory:string;journeySummary:string[];personType:'icon'|'practitioner'|'transition';imageUrl?:string;imageCredit?:string;imageLicense?:string;imageLicenseUrl?:string;imageSourceUrl?:string;youtubeVideoId?:string;videoTitle?:string;officialSite?:string;portfolioUrl?:string;articleUrl?:string;sourceUrls:string[];connectedNodeIds:string[]};
export type Relationship={source:string;target:string;type:'SUBTYPE'|'RELATED'|'INTERSECTION'|'CAN_LEAD_TO'|'USES_SKILL'|'WORKS_WITH'|'ALTERNATIVE_PATH'|'PERSON_DOES_THIS'|'RESOURCE_ABOUT_THIS';label?:string};
