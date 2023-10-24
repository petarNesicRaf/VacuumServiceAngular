export interface Language{
    timestamp:string,
    time:number
    text:string
    detectedLangs:DetectedLanguage[]
}
export interface Similarity{
    timestamp:string,
    time:number
    lang:string
    langConfidence:number
    text1:string
    text2:string

    similarity:number
}
export interface DetectedLanguage{
  lang:string,
    confidence:number
}

export interface Sentiment{
    timestamp:string,
    time:number,
    lang:string,
    sentiment: DetectedSentiment
}

export interface DetectedSentiment{
    score:number
    type:string
}

export interface Entity{
    timestamp:string
    time:number
    lang:string
    annotations:Annotation[]
}

export interface Annotation{
    abstract:string
    id:number
    title:string
    categories:string[]
    image:Image
    label:string
    types:string[]
    confidence:number
    uri:string
    end:number
    spot:string
}

export interface Image{
    full:string
    thumbnail:string
}
