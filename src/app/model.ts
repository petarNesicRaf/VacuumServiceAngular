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
